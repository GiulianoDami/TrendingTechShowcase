
```js
/**
 * Simple backend for proxying tech news API requests.
 * This example uses NewsAPI.org (or any you prefer).
 * Replace YOUR_NEWSAPI_KEY with your actual API key.
 */

const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const NEWS_API_KEY = "YOUR_NEWSAPI_KEY"; // Replace with your key

// Serve static build files from React app if built
app.use(express.static(path.join(__dirname, "build")));

// Endpoint to fetch aggregated trending tech news from NewsAPI.org (example)
app.get("/api/news", async (req, res) => {
  try {
    // Example: top technology news from trusted sources
    const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=20&apiKey=${NEWS_API_KEY}`;
    const response = await axios.get(url);

    // Respond only with required fields for frontend
    const articles = response.data.articles.map((article) => ({
      source: article.source,
      author: article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
    }));

    res.json({ articles });
  } catch (error) {
    console.error("Error fetching tech news:", error.message);
    res.status(500).json({ error: "Failed to fetch tech news" });
  }
});

// Fallback to serve React app for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

