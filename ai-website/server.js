import dotenv from "dotenv";
dotenv.config();
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
npm install dotenv
const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: req.body.message }]
      })
    });

    const data = await response.json();

    // send only the message back
    res.json(data.choices[0].message);

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
