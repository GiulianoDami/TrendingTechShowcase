
```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";
import Highlights from "./components/Highlights";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  const [news, setNews] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [articles, setArticles] = useState([]);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarkedArticles");
    return saved ? JSON.parse(saved) : [];
  });

  // Fetch trending tech news dynamically
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Example fetch from backend API proxy that aggregates news from trusted sources
        const { data } = await axios.get("/api/news");
        setNews(data.articles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    // Fetch highlights and deep-dive articles statically or via another endpoint
    const fetchHighlightsAndArticles = async () => {
      try {
        // Dummy static data for demo
        const highlightsData = [
          {
            id: "h1",
            title: "Samsung Unveils Micro RGB LED TVs",
            description: "Experience ultra-fine display technology from 55\" up to 115\" sizes.",
            image: "/images/micro-rgb-led-tv.jpg",
            link: "https://news.samsung.com/global/samsung-introduces-next-gen-micro-rgb-led-tvs"
          },
          {
            id: "h2",
            title: "Next-Gen AI Smartphones Reviewed",
            description: "Top models from Google, Samsung, and OnePlus redefine AI integration.",
            image: "/images/ai-smartphones.jpg",
            link: "https://www.techreviews.com/ai-smartphones-2025"
          },
          {
            id: "h3",
            title: "Hollyland 4K Lyra Webcam",
            description: "Improved creator gear with wireless mic tech integrated.",
            image: "/images/hollyland-4k-lyra.jpg",
            link: "https://hollylandtech.com/4k-lyra"
          }
        ];
        setHighlights(highlightsData);

        const articlesData = [
          {
            id: "a1",
            title: "Social Media Platform Trademark Disputes Explained",
            excerpt: "An overview of recent legal tussles shaping the industry.",
            link: "https://lawandtech.com/social-media-trademark"
          },
          {
            id: "a2",
            title: "The Future of AI in Game Development",
            excerpt: "How artificial intelligence is revolutionizing game design and storytelling.",
            link: "https://gaminginsights.com/ai-game-dev-future"
          }
        ];
        setArticles(articlesData);
      } catch (error) {
        console.error("Failed to fetch highlights or articles:", error);
      }
    };

    fetchNews();
    fetchHighlightsAndArticles();
  }, []);

  // Bookmark management
  const toggleBookmark = (article) => {
    const isBookmarked = bookmarks.find((a) => a.url === article.url);
    let updatedBookmarks;
    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter((a) => a.url !== article.url);
    } else {
      updatedBookmarks = [...bookmarks, article];
    }
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarkedArticles", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header bookmarks={bookmarks} />
      <main className="flex-grow container mx-auto p-4">
        <NewsFeed news={news} bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />
        <Highlights highlights={highlights} />
        <Articles articles={articles} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

