"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="p-2 border rounded w-full mb-4"
      placeholder="Search by name, email, or department..."
      value={query}
      onChange={handleChange}
    />
  );
}
