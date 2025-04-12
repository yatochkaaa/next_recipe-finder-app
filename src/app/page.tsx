import Link from "next/link";
import Image from "next/image";
import { getRecipes } from "@/app/api";
import SearchBar from "@/app/components/Home/SearchBar";

interface HomePageProps {
  searchParams?: Promise<Record<string, string>>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const { results: recipes } = await getRecipes(params || {});

  return (
    <div>
      <header>
        <SearchBar />
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {recipes.length > 0 &&
            recipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.id}`}
                className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative h-48">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                    {recipe.title}
                  </h2>
                </div>
              </Link>
            ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
