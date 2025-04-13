interface SearchResultsInfoProps {
  totalResults: number;
}

export default function SearchResultsInfo({
  totalResults,
}: SearchResultsInfoProps) {
  return (
    <h2 className="text-xl font-semibold px-4">
      {totalResults > 0
        ? `Found ${totalResults} recipes`
        : 'No recipes found'}
    </h2>
  );
}
