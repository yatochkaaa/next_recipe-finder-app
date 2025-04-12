"use client";

import { useState, useRef, useEffect } from "react";

interface MultiSelectProps {
  label?: string;
  options: string[];
  queryParam: string;
}

export default function MultiSelect({
  label = "Select options",
  options,
  queryParam,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelected = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v: string) => v !== value)
      : [...selected, value];
    setSelected(newSelected);
  };

  const toggleOption = (value: string) => {
    handleSelected(value);
  };

  const clearSelection = () => {
    setSelected([]);
  };

  const getSelectedLabels = () => {
    const maxChars = 30;
    const displayText = selected.join(", ");

    if (displayText.length > maxChars) {
      const visibleLabels: string[] = [];
      let currentLength = 0;

      for (const label of selected) {
        if (currentLength + label.length + 2 > maxChars) break;
        visibleLabels.push(label);
        currentLength += label.length + 2;
      }

      const remaining = selected.length - visibleLabels.length;
      return `${visibleLabels.join(", ")} +${remaining}`;
    }

    return displayText;
  };

  return (
    <div className="relative w-full max-w-sm" ref={dropdownRef}>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full px-4 py-2 text-left border border-gray-300 rounded-lg  text-gray-400"
        >
          {selected.length > 0 ? getSelectedLabels() : label}
        </button>
        {selected.length > 0 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              clearSelection();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-[#0a0a0a] max-h-60 overflow-y-auto">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-600 cursor-pointer text-gray-400"
            >
              <input
                type="checkbox"
                value={option}
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}

      <input type="hidden" name={queryParam} value={selected.join(",")} />
    </div>
  );
}
