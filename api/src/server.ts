import express from "express";
import { PORT, UID, TEST_ACCESS_TOKEN } from "./config";
import { join } from "path";
import cors from "cors";
import { buy, authorize, getToken } from "./scb";
import { json } from "body-parser";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(json());
app.use(express.static(join(__dirname, "..", "views")));

app.post("/token", (req, res) => {
  const { authCode } = req.body;
  getToken(UID, authCode)
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.toString()));
});

app.get("/buy", (req, res) => {
  buy(UID, 200, TEST_ACCESS_TOKEN)
    .then(e => {
      res.send(e.data.deeplinkUrl);
    })
    .catch(e => res.status(400).send(e.toString()));
});

app.get("/login", (req, res) => {
  authorize(UID)
    .then(e => {
      res.send(e.data.callbackUrl);
    })
    .catch(e => res.status(400).send(e.toString()));
});

app.listen(PORT || 4000, () => {
  console.log(`listen at: http://localhost:${PORT}`);
});
