import { Suspense } from 'react';
import { getRecipes } from '@/app/api';
import SearchBar from '@/app/components/Home/SearchBar';
import RecipesGrid from '@/app/components/Home/RecipesGrid';
import Pagination from '@/app/components/UI/Pagination';
import SearchResultsInfo from '@/app/components/Home/SearchResultsInfo';

interface HomePageProps {
  searchParams?: Promise<Record<string, string>>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = (await searchParams) || {};
  const page = Number(params?.page) || 1;

  // Filter out empty params
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== '')
  );

  const { results: recipes, totalResults } = await getRecipes({
    ...filteredParams,
    page: page.toString(),
  });

  const totalPages = Math.ceil(totalResults / 12);

  const createPageUrl = (pageNum: number) => {
    const newParams = new URLSearchParams(filteredParams);
    newParams.set('page', pageNum.toString());
    return `?${newParams.toString()}`;
  };

  return (
    <div>
      <header>
        <SearchBar />
      </header>
      <main className="flex flex-col gap-4">
        <SearchResultsInfo totalResults={totalResults} />
        <Suspense fallback={<div>Loading...</div>}>
          <RecipesGrid recipes={recipes} />
        </Suspense>
        <Pagination
          totalPages={totalPages}
          page={page}
          createPageUrl={createPageUrl}
        />
      </main>
    </div>
  );
}
