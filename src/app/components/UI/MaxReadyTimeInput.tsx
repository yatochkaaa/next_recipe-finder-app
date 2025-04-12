'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface MaxReadyTimeInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MaxReadyTimeInput({
  onChange,
}: MaxReadyTimeInputProps) {
  const searchParams = useSearchParams();
  const [maxTime, setMaxTime] = useState('');

  useEffect(() => {
    const maxReadyTime = searchParams.get('maxReadyTime');
    if (maxReadyTime) {
      setMaxTime(maxReadyTime);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 300)) {
      setMaxTime(value);
      onChange(e);
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative">
        <input
          type="number"
          value={maxTime}
          onChange={handleChange}
          placeholder="Max cooking time (mins)"
          min="0"
          max="300"
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <input type="hidden" name="maxReadyTime" value={maxTime} />
    </div>
  );
}
