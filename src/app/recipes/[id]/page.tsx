import Image from "next/image";
import { getRecipe } from "@/app/api";

interface RecipePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="relative h-96 mb-8">
        <Image
          src={recipe.image || "https://placehold.co/600x400/png?text=Food+Image"}
          alt={recipe.title}
          className="rounded-lg object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Ready in:</span>
          <span>{recipe.readyInMinutes} minutes</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Servings:</span>
          <span>{recipe.servings}</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2">
          {recipe.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>
          )) || <li>No ingredients available</li>}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <div
          className="prose prose-zinc dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: recipe.instructions || "" }}
        />
      </div>
    </div>
  );
}
