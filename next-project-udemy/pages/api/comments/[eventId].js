function handler(req, res) {
  //   import NewComment from "./../../../components/input/new-comment";
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
      res.status(422).json({ message: "'Invalid input." });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(email, name, text);

    res.status(201).json({ message: "Added Comment!", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "A first comment comment here" },
      { id: "c2", name: "Min", text: "A Second comment comment here" },
      { id: "c3", name: "More", text: "A Third comment comment here" },
    ];

    res.status(200).json({ comment: dummyList });
  }
}

export default handler;
