import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 5000;

app.get("/test", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ message: "HELLO THE TEST API IS RUNNING" });
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
