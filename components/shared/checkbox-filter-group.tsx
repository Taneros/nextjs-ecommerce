"use client";

import React, { useState } from "react";
import {
  FilterCheckbox,
  IFilterCheckboxProps,
} from "@/components/shared/filter-checkbox";
import { Input } from "@/components/ui";

type TItem = IFilterCheckboxProps;

interface ICheckboxFilterGroupProps {
  className?: string;
  title: string;
  items: TItem[];
  defaultItems: TItem[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (selectedItems: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFilterGroup: React.FC<ICheckboxFilterGroupProps> = ({
  className,
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
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
    onChange?.(newCheckedItems);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const itemList = showAll
    ? items.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems?.slice(0, limit) || items.slice(0, limit);

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
