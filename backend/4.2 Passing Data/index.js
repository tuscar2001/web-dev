import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function nameGenerator(req, res, next) {
  console.log(req.body);
  next();
}

app.use(nameGenerator);


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body['fName'].length + req.body['lName'].length;
  res.render("index.ejs",{numberOfLetters:numLetters});
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
