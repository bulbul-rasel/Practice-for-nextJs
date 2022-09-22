import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const client = await MongoClient.connect(
      `mongodb+srv://eventManage:GsY3rNwIgQJryckt@cluster0.wtas1.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("events");

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    console.log(userEmail);
    res.status(201).json({ message: "Signed Up!" });
  }
}

export default handler;
