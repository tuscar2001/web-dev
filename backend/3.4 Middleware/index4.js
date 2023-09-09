import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  });

  app.post("/submit", (req, res) => {
    console.log(req.body);
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
