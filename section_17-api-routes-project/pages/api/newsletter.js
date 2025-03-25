import { MongoClient } from "mongodb";

export async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    console.log(userEmail);

    let client;
    try {
      client = await connectToCluster(
        "mongodb+srv://admin:123@cluster0.wowqk.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0"
      );

      const db = client.db(); // Підключаємось до бази даних (newsletter)
      const collection = db.collection("subscribers"); // Обираємо колекцію

      await collection.insertOne({ email: userEmail, date: new Date() });

      res.status(201).json({ message: "Signed up!", email: userEmail });
    } catch (error) {
      res.status(500).json({ message: "Could not store email." });
    } finally {
      if (client) {
        await client.close(); // Закриваємо підключення
      }
    }
  }
}
