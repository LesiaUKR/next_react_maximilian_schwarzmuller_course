import fs from 'fs';
import path from 'path';
export default function handler(req, res) {
   
   if (req.method === 'POST') {
      const email = req.body.email;
      const feedback = req.body.feedback;
      console.log(email, feedback);
      const newFeedback = {
         id: new Date().toISOString(),
         email: email,
         feedback: feedback
      };
      // store that in a database or in a file 
      const filePath = path.join(process.cwd(), 'data', 'feedback.json');
      const fileData = fs.readFileSync(filePath);
      const data = JSON.parse(fileData);
      data.push(newFeedback);
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(201).json({ message: 'Data from form saved successfully!', feedback: feedback });
   } else {
      res.status(200).json({ message: 'This works!' });
   }

   

}