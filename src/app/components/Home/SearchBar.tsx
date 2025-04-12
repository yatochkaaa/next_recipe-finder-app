'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchInput from '@/app/components/UI/SearchInput';
import { CUISINES_LIST } from '@/app/consts';
import MaxReadyTimeInput from '@/app/components/UI/MaxReadyTimeInput';
import MultiSelect from '@/app/components/UI/MultiSelect';
import SearchBtn from '@/app/components/Home/SearchBtn';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [cuisines, setCuisines] = useState(searchParams.get('cuisines') || '');
  const [maxReadyTime, setMaxReadyTime] = useState(searchParams.get('maxReadyTime') || '');
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    const isQueryValid = query.trim() !== "";
    const isCuisinesValid = cuisines.trim() !== "";
    const isMaxReadyTimeValid = maxReadyTime.trim() !== "";
    setIsValid(isQueryValid || isCuisinesValid || isMaxReadyTimeValid);
  };

  useEffect(() => {
    validateForm();
  }, [query, cuisines, maxReadyTime]);

  return (
    <form className="py-8 flex justify-center gap-4" method="GET">
      <SearchInput onChange={(e) => setQuery(e.target.value)} />
      <MultiSelect
        label="Select cuisines"
        options={CUISINES_LIST}
        queryParam="cuisines"
        onChange={(value) => setCuisines(value)}
      />
      <MaxReadyTimeInput onChange={(e) => setMaxReadyTime(e.target.value)} />
      <SearchBtn disabled={!isValid} />
    </form>
  );
}
