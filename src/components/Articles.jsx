
```jsx
import React from "react";

export default function Articles({ articles }) {
  return (
    <section aria-label="Deep-Dive Articles and Reviews" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4 border-b border-gray-300 pb-2">
        Deep-Dive Articles and Reviews
      </h2>

      <ul className="space-y-6">
        {articles.map(({ id, title, excerpt, link }) => (
          <li key={id} className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-blue-900 hover:underline">
              {title}
            </a>
            <p className="text-gray-700 mt-2">{excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

