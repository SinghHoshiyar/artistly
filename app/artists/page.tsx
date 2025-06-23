// FILE: app/artists/page.tsx
"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import data from "@/data/artists.json";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
}

export default function ArtistListingPage() {
  const [filtered, setFiltered] = useState<Artist[]>(data);
  const [showShortlist, setShowShortlist] = useState(false);
  const [priceRange, setPriceRange] = useState<string>("all");

  useEffect(() => {
    const categoryQuery = new URLSearchParams(window.location.search).get("category");
    if (categoryQuery) {
      const matched = data.filter((artist) => artist.category === categoryQuery);
      setFiltered(matched);
    }
  }, []);

  const handleFilter = ({ category, location }: { category: string; location: string }) => {
    let temp = data;

    if (category) {
      temp = temp.filter((artist) => artist.category === category);
    }

    if (location) {
      temp = temp.filter((artist) => artist.location === location);
    }

    if (priceRange !== "all") {
      temp = temp.filter((artist) => {
        const price = parseInt(artist.price.replace(/[^0-9]/g, ""));
        if (priceRange === "low") return price <= 5000;
        if (priceRange === "mid") return price > 5000 && price <= 10000;
        if (priceRange === "high") return price > 10000;
        return true;
      });
    }

    setFiltered(temp);
  };

  const handleToggleShortlist = () => {
    setShowShortlist(!showShortlist);

    if (!showShortlist) {
      const saved = localStorage.getItem("shortlist");
      if (saved) {
        const ids: number[] = JSON.parse(saved);
        const filteredShortlist = data.filter((artist) => ids.includes(artist.id));
        setFiltered(filteredShortlist);
      }
    } else {
      setFiltered(data);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRange = e.target.value;
    setPriceRange(selectedRange);

    let temp = data;

    if (selectedRange !== "all") {
      temp = data.filter((artist) => {
        const price = parseInt(artist.price.replace(/[^0-9]/g, ""));
        if (selectedRange === "low") return price <= 5000;
        if (selectedRange === "mid") return price > 5000 && price <= 10000;
        if (selectedRange === "high") return price > 10000;
        return true;
      });
    }

    setFiltered(temp);
  };

  return (
    <>
    <Head>
        <title>Browse Artists | Artistly</title>
        <meta name="description" content="Discover top-rated artists for your events. Filter by category, city, and budget to find your perfect performer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Browse Artists on Artistly" />
        <meta property="og:description" content="Filter by singers, dancers, DJs and more. View artist profiles and request bookings instantly." />
        <meta property="og:image" content="/assets/banner.png" />
    </Head>

    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Browse Artists</h1>
      <FilterBlock onFilter={handleFilter} />

      <div className="mb-4">
        <label htmlFor="price" className="font-medium mr-2">Price Range:</label>
        <select
          id="price"
          value={priceRange}
          onChange={handlePriceChange}
          className="border px-3 py-2 rounded"
        >
          <option value="all">All</option>
          <option value="low">₹0–5,000</option>
          <option value="mid">₹5,001–10,000</option>
          <option value="high">₹10,001+</option>
        </select>
      </div>

      <button
        onClick={handleToggleShortlist}
        className="mb-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        {showShortlist ? "Show All Artists" : "View My Shortlist"}
      </button>

      {filtered.length === 0 ? (
        <p className="text-gray-500 mt-6">No artists found for selected filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((artist) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              category={artist.category}
              location={artist.location}
              price={artist.price}
            />
          ))}
        </div>
      )}
    </div>
    </>
  );
}