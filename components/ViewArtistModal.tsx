// FILE: components/ViewArtistModal.tsx
"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";

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

interface Props {
  artist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewArtistModal({ artist, isOpen, onClose }: Props) {
  if (!artist) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4 bg-black/50">
        <DialogPanel className="bg-white rounded-md shadow-xl max-w-md w-full p-6">
          <DialogTitle className="text-lg font-bold mb-4">Artist Details</DialogTitle>

          <div className="mb-4">
            <Image
              src={artist.profileImage}
              alt={`${artist.name}'s image`}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded"
            />
          </div>

          <div className="space-y-1 text-sm text-gray-700">
            <p><strong>Name:</strong> {artist.name}</p>
            <p><strong>Category:</strong> {artist.category}</p>
            <p><strong>City:</strong> {artist.city}</p>
            <p><strong>Fee:</strong> ₹{artist.fee}</p>
            <p><strong>Languages:</strong> {artist.languages.join(", ")}</p>
            <p><strong>Bio:</strong> {artist.bio}</p>
          </div>

          <button
            onClick={onClose}
            className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
