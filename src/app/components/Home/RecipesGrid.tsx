import { SearchRecipe } from '@/app/types/recipe';
import RecipeItem from '@/app/components/Home/RecipeItem';

interface RecipesGridProps {
  recipes: SearchRecipe[];
}

export default function RecipesGrid({ recipes }: RecipesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {recipes.length > 0 &&
        recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
    </div>
  );
}
