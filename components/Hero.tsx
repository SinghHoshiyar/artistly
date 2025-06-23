import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-16 px-6 bg-gradient-to-r from-purple-100 to-blue-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Connect Event Planners with Performing Artists</h1>
      <p className="text-gray-600 mb-6">Book singers, dancers, DJs, and speakers — all in one place.</p>
      <Link href="/artists" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
        Explore Artists
      </Link>
    </section>
  );
}
