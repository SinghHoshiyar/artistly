 'use client';

import { useState } from "react";

interface Props {
  onFilter: (filters: { category: string; location: string }) => void;
}

export default function FilterBlock({ onFilter }: Props) {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <select
        className="border px-4 py-2 rounded w-full sm:w-1/3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>

      <select
        className="border px-4 py-2 rounded w-full sm:w-1/3"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <button
        onClick={() => onFilter({ category, location })}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Apply Filters
      </button>
    </div>
  );
}
