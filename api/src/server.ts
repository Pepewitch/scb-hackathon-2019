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

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post("/token", (req, res) => {
  const { authCode } = req.body;
  getToken(UID, authCode)
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.toString()));
});

app.post("/buy", (req, res) => {
  const { token, amount } = req.body;
  buy(UID, amount, token)
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

export default app;
