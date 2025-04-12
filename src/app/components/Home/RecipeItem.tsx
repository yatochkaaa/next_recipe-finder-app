import Link from "next/link";
import Image from "next/image";
import { Cuisine } from "@/app/types/cuisine";
interface RecipeItemProps {
  cuisine: Cuisine;
}

export default function RecipeItem({ cuisine }: RecipeItemProps) {
  return (
    <Link
      key={cuisine.id}
      href={`/recipes/${cuisine.id}`}
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      <div className="relative h-48">
        <Image
          src={cuisine.image}
          alt={cuisine.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
          {cuisine.title}
        </h2>
      </div>
    </Link>
  );
}

