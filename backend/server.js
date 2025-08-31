// server.js
import express from "express";

const app = express();
const PORT = 5000;

// Proxy endpoint for subreddit posts
app.get("/api/posts/:subreddit", async (req, res) => {
  const { subreddit } = req.params;

  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const json = await response.json();
    res.json(json);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Proxy endpoint for subreddit list
app.get("/api/subreddits", async (req, res) => {
  try {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    res.json(json);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch subreddits" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
