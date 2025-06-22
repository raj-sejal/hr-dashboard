"use client";
import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(Object.keys(tabs)[0]);

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        {Object.keys(tabs).map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded ${active === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
            {tab}
          </button>
        ))}
      </div>
      <div>{tabs[active]}</div>
    </div>
  );
}
