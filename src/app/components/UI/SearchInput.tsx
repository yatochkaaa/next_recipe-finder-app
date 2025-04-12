export default function SearchInput() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="relative">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
          />
        </svg>
      </div>
    </div>
  );
}
