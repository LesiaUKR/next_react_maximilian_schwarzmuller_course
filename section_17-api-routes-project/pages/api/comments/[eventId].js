import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://admin:123@cluster0.wowqk.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0";
const DB_NAME = "events";
const COLLECTION_NAME = "comments";

/** Connect to MongoDB */
export async function connectToCluster() {
  try {
    const client = new MongoClient(MONGODB_URI);
    console.log("✅ Connecting to MongoDB Atlas cluster...");
    await client.connect();
    console.log("✅ Successfully connected to MongoDB Atlas!");
    return client;
  } catch (error) {
    console.error("❌ Connection to MongoDB Atlas failed!", error);
    throw new Error("Database connection failed.");
  }
}

/** Save a new comment in MongoDB */
async function saveComment(commentData) {
  const client = await connectToCluster();
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);

  console.log("Saving comment:", commentData);

  try {
    const result = await collection.insertOne(commentData);
    console.log("✅ Comment inserted:", result.insertedId);
    return result.insertedId;
  } catch (error) {
    console.error("❌ Error inserting comment:", error);
    throw new Error("Failed to save comment.");
  } finally {
    await client.close();
  }
}

/** Get comments from MongoDB */
async function getComments(eventId) {
  if (!eventId) {
    throw new Error("❌ eventId is required.");
  }

  const client = await connectToCluster();
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);

  const comments = await collection
    .find({ eventId })
    .sort({ _id: -1 })
    .toArray();
  client.close();
  return comments;
}

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    console.log(newComment);
    try {
      const commentId = await saveComment(newComment);
      newComment.id = commentId; // Add MongoDB-generated ID
      return res
        .status(201)
        .json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      console.error("❌ Error saving comment:", error);
      return res.status(500).json({ message: "Could not store comment." });
    }
  }

  if (req.method === "GET") {
    try {
      const comments = await getComments(eventId);
      res.status(200).json({ comments });
    } catch (error) {
      console.error("❌ Error fetching comments:", error);
      return res.status(500).json({ message: "Failed to retrieve comments." });
    }
  }
}
