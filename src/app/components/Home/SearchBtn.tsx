interface SearchBtnProps {  
  disabled: boolean;
}

export default function SearchBtn({ disabled }: SearchBtnProps) {
  return (
    <button
      className={`px-4 py-2 text-white rounded-md transition-colors ${
        disabled 
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
      disabled={disabled}
    >
      Search
    </button>
  );
}
