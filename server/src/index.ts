import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const app = express();
const PORT = 5050;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

type dataItem = {
  username: string;
  password: string;
};
let database: dataItem[] = [];

app.get("/", (req, res) => {
  console.log(req);
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/getInfo", (req, res) => {
  res.json(database);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = { username: req.body.username, password: hashedPassword };
    database.push(user);
    res.status(201).json({ status: "Received" });
  } catch {
    res.status(500).send();
  }
});

app.post("/users/login", async (req, res) => {
  console.log(req.body.username);
  const user = database.find((user) => user.username === req.body.username);

  if (!user) {
    res.status(400).send("Cannot find user");
    return;
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("success");
    } else {
      res.send("not allowed");
    }
  } catch {
    res.status(500).send();
  }
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
