import { MongoClient } from "mongodb";

async function handler(req, res) {
  //   import NewComment from "./../../../components/input/new-comment";
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    `mongodb+srv://eventManage:GsY3rNwIgQJryckt@cluster0.wtas1.mongodb.net/?retryWrites=true&w=majority`
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "'Invalid input." });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
      eventId,
    };

    const db = client.db("events");

    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    newComment = result.insertedId;

    res.status(201).json({ message: "Added Comment!", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "A first comment comment here" },
      { id: "c2", name: "Min", text: "A Second comment comment here" },
      { id: "c3", name: "More", text: "A Third comment comment here" },
    ];

    res.status(200).json({ comments: dummyList });

    // const db = client.db();

    // const documents = db
    //   .collection("comments")
    //   .find()
    //   .sort({ _id: -1 })
    //   .toArray();

    // res.status(200).json({ comments: documents });
  }
  client.close();
}

export default handler;
