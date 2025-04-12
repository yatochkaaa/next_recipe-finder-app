interface SearchResultsInfoProps {
  totalResults: number;
}

export default function SearchResultsInfo({
  totalResults,
}: SearchResultsInfoProps) {
  return (
    <h2 className="text-xl font-semibold px-4">
      {totalResults > 0
        ? `Найдено ${totalResults} рецептов`
        : 'Рецепты не найдены'}
    </h2>
  );
}
