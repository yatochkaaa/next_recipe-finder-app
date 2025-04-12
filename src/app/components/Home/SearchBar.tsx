"use client";

import SearchInput from "@/app/components/UI/SearchInput";
import { CUISINES_LIST } from "@/app/consts";
import MaxReadyTimeInput from "@/app/components/UI/MaxReadyTimeInput";
import MultiSelect from "@/app/components/UI/MultiSelect";
import SearchBtn from "@/app/components/Home/SearchBtn";

export default function SearchBar() {
  return (
    <form className="py-8 flex justify-center gap-4" method="GET">
      <SearchInput />
      <MultiSelect
        label="Select cuisines"
        options={CUISINES_LIST}
        queryParam="cuisines"
      />
      <MaxReadyTimeInput />
      <SearchBtn />
    </form>
  );
}
