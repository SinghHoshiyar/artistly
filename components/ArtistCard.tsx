"use client";

import { useEffect, useState } from "react";
import RequestBookingModal from "@/components/RequestBookingModal";

interface ArtistCardProps {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
}

export default function ArtistCard({ id, name, category, location, price }: ArtistCardProps) {
  const [shortlisted, setShortlisted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Load shortlist state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("shortlist");
      const list: number[] = stored ? JSON.parse(stored) : [];
      setShortlisted(list.includes(id));
    } catch (error) {
      console.error("Failed to load shortlist from localStorage:", error);
    }
  }, [id]);

  // ✅ Toggle shortlist and update localStorage
  const toggleShortlist = () => {
    try {
      const stored = localStorage.getItem("shortlist");
      let list: number[] = stored ? JSON.parse(stored) : [];

      if (list.includes(id)) {
        list = list.filter((artistId) => artistId !== id);
        setShortlisted(false);
      } else {
        list.push(id);
        setShortlisted(true);
      }

      localStorage.setItem("shortlist", JSON.stringify(list));
    } catch (error) {
      console.error("Failed to update shortlist:", error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="border rounded shadow p-4 relative">
      {/* ❤️ Shortlist Button */}
      <button
        onClick={toggleShortlist}
        className={`absolute top-2 right-2 text-xl ${
          shortlisted ? "text-red-500" : "text-gray-400"
        }`}
        aria-label="Toggle shortlist"
        title="Click to shortlist"
      >
        ❤️
      </button>

      {/* Artist Info */}
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{category} — {location}</p>
      <p className="text-sm text-gray-700 font-medium mt-1">Fee: {price}</p>

      {/* Request Booking Button */}
      <button
        onClick={openModal}
        className="mt-3 text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Request Booking
      </button>

      {/* Booking Modal */}
      <RequestBookingModal
        artistName={name}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
