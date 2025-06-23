import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <Link href={`/artists?category=${encodeURIComponent(title)}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition transform cursor-pointer">
        <div className="relative w-full h-40">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
