
```jsx
import React, { useState } from "react";

export default function Header({ bookmarks }) {
  const [showBookmarks, setShowBookmarks] = useState(false);

  return (
    <header className="bg-blue-900 text-white p-4 shadow-md sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold select-none">TrendingTechShowcase</h1>
        <button
          onClick={() => setShowBookmarks((prev) => !prev)}
          aria-label="Toggle bookmarks panel"
          className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded"
        >
          Bookmarks ({bookmarks.length})
        </button>
      </div>
      {showBookmarks && (
        <div className="bg-blue-800 mt-2 p-3 rounded max-h-60 overflow-y-auto container mx-auto">
          {bookmarks.length === 0 ? (
            <p className="text-blue-300 italic">No bookmarked articles yet.</p>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              {bookmarks.map(({ title, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-300"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
}
```

