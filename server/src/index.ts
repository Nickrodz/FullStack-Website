import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5050;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req);
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.post("/sub", (req, res) => {
  //res.send("<h1>Hello</h1>");
  console.log(req.body);
  res.status(201).json({ status: "Received" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
