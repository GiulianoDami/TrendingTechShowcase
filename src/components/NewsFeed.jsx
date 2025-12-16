
```jsx
import React from "react";

export default function NewsFeed({ news, bookmarks, onToggleBookmark }) {
  return (
    <section aria-label="Real-Time Tech News Feed" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4 border-b border-gray-300 pb-2">
        Real-Time Tech News Feed
      </h2>

      {news.length === 0 ? (
        <p className="text-gray-600 italic">Loading trending tech news...</p>
      ) : (
        <ul className="space-y-4 max-h-[480px] overflow-y-auto">
          {news.map(({ title, description, url, source, publishedAt }) => {
            const isBookmarked = bookmarks.find((a) => a.url === url);
            return (
              <li
                key={url}
                className="bg-white rounded shadow p-4 flex flex-col sm:flex-row sm:justify-between"
              >
                <div className="mb-2 sm:mb-0 sm:flex-1">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-900 hover:underline"
                  >
                    {title}
                  </a>
                  <p className="text-gray-700 mt-1">{description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Source: {source.name} | {new Date(publishedAt).toLocaleString()}
                  </p>
                </div>
                <button
                  aria-pressed={isBookmarked}
                  onClick={() =>
                    onToggleBookmark({ title, url })
                  }
                  className={`self-start sm:self-center mt-2 sm:mt-0 px-3 py-1 rounded ${
                    isBookmarked
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {isBookmarked ? "Bookmarked" : "Bookmark"}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
```

