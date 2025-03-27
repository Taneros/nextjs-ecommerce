import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { Title } from "@/components/shared/title";
import { Input } from "@/components/ui";
import React from "react";

interface IFiltersProps {
  className?: string;
}

export const Filters: React.FC<IFiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox label="Можно собирать" value="1" />
        <FilterCheckbox label="Новинки" value="2" />
      </div>

      <div className="mt-5  border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="от"
            min={0}
            max={10000}
            className="w-1/2 px-4 py-2 border border-neutral-200 rounded-lg"
          />
          <Input
            type="number"
            placeholder="до"
            min={100}
            max={10000}
            className="w-1/2 px-4 py-2 border border-neutral-200 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
