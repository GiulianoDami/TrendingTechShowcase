
```jsx
import React from "react";

export default function Highlights({ highlights }) {
  return (
    <section aria-label="Highlight on Breakthrough Devices" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4 border-b border-gray-300 pb-2">
        Highlight on Breakthrough Devices
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ id, title, description, image, link }) => (
          <div key={id} className="bg-white rounded shadow hover:shadow-lg transition-shadow">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
                <p className="text-gray-700 mt-1">{description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
```

