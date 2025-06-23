import Head from "next/head";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import categories from "@/data/categories.json";

export default function HomePage() {
  return (
    <>
    <Head>
        <title>Artistly – Discover Top Talent for Your Events</title>
        <meta name="description" content="Explore and book singers, dancers, DJs, and performers for your events. Discover verified talent now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Artistly – Discover Top Talent" />
        <meta property="og:description" content="Explore India's best artists. Filter by category, location, and pricing. Book with confidence." />
        <meta property="og:image" content="/assets/banner.png" />
    </Head>

      <Hero />
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Explore by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} title={cat.title} image={cat.image} />
          ))}
        </div>
      </section>
    </>
  );
}
