import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "fGZBd2iSpldEH87MwPzHzhp2GnlrOmCpwMzKwWvSGxiO7lvvL8cbcSvvVuPO4UqtH9O2CAjn69T3BlbkFJMvPd5nuBH218R2Lgn_GX4EqQxz6WJl2FBgEfYSnmfvXl1bwQlKM_WCLTcGpvns_7HDSeJo9U4A," 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: req.body.message }]
    })
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Server running on port 3000"));
