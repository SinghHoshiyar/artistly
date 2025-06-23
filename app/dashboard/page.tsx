"use client";
import Head from "next/head";
import { useState } from "react";
import submissions from "@/data/submissions.json";
import ViewArtistModal from "@/components/ViewArtistModal";

// ✅ Type added here
interface Artist {
  id: number;
  name: string;
  category: string;
  city: string;
  fee: string;
  bio: string;
  languages: string[];
  profileImage: string;
}

export default function DashboardPage() {
  const [selected, setSelected] = useState<Artist | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (artist: Artist) => {
    setSelected(artist);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelected(null);
    setIsOpen(false);
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

    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Artist Submissions</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">City</th>
              <th className="p-2">Fee</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((artist: Artist) => (
              <tr key={artist.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{artist.name}</td>
                <td className="p-2">{artist.category}</td>
                <td className="p-2">{artist.city}</td>
                <td className="p-2">{artist.fee}</td>
                <td className="p-2">
                  <button
                    onClick={() => openModal(artist)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ViewArtistModal artist={selected} isOpen={isOpen} onClose={closeModal} />
    </div>
     </>
  );
}
