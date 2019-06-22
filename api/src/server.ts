import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`listen at: http://localhost:${process.env.PORT}`);
});
