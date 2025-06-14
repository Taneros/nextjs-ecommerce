"use client";

import React, { useState } from "react";
import {
  FilterCheckbox,
  IFilterCheckboxProps,
} from "@/components/shared/filter-checkbox";
import { Input, Skeleton } from "@/components/ui";

type TItem = IFilterCheckboxProps;

interface ICheckboxFilterGroupProps {
  className?: string;
  title: string;
  items: TItem[];
  defaultItems: TItem[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (selectedItems: string[]) => void;
  defaultValue?: string[];
  isLoading: boolean;
}

export const CheckboxFilterGroup: React.FC<ICheckboxFilterGroupProps> = ({
  className,
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onClickCheckbox,
  defaultValue,
  isLoading,
}) => {
  const [checkedItems, setCheckedItems] = useState<string[]>(
    defaultValue || []
  );

  const [showAll, setShowAll] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const handleCheckedChange = (value: string) => {
    const newCheckedItems = checkedItems.includes(value)
      ? checkedItems.filter((item) => item !== value)
      : [...checkedItems, value];

    setCheckedItems(newCheckedItems);
    setSearchValue("")
    onClickCheckbox?.(newCheckedItems);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const itemList = showAll
    ? items.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems?.slice(0, limit) || items.slice(0, limit);

  if (isLoading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {Array.from({ length: limit }).map((_, index) => (
          <Skeleton key={index} className="h-6 mb-5 rounded-[8px]" />
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={handleSearchChange}
            value={searchValue}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {itemList.map((item, index) => (
          <FilterCheckbox
            key={index}
            label={item.label}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={checkedItems.includes(item.value)}
            onCheckedChange={() => handleCheckedChange(item.value)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            className="text-primary mt-3"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
