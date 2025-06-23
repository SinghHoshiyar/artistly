'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">Artistly</Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/artists">Explore Artists</Link>
        <Link href="/onboarding">Onboard Artist</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
