"use client";

import { FC } from "react";
import { CheckboxFilterGroup } from "@/components/shared/checkbox-filter-group";
import { PriceFilter } from "@/components/shared/price-filter";
import { Title } from "@/components/shared/title";
import { useGetFilterIngredientList } from "@/hooks/useFilterIngredientList";

const topCheckboxFilter = [{label: 'Можно собирать', value: '1' }, {label: 'Новинки', value: '2' }]

interface IFiltersProps {
  className?: string;
}

export const Filters: FC<IFiltersProps> = ({ className }) => {
  const { ingredientList, loading } = useGetFilterIngredientList();

  const allIngredientList = ingredientList.map(({ name, id }) => ({
    value: id.toString(),
    label: name,
  }));

  return (
    <div className={className}>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
      <CheckboxFilterGroup
        className="mb-5"
        limit={2}
        items={topCheckboxFilter}
        isLoading={loading}
        onClickCheckbox={(id) => console.log(`shared/filters.tsx - line: 37 ->> id`, id)}
      />
      </div>

      <PriceFilter />

      <CheckboxFilterGroup
        title="Ингредиенты"
        className="mb-5"
        limit={6}
        defaultItems={allIngredientList.slice(0, 6)}
        items={allIngredientList}
        defaultValue={["1", "2"]}
        searchInputPlaceholder="Поиск ингредиентов"
        isLoading={loading}
        onClickCheckbox={(id) => console.log(`shared/filters.tsx - line: 62 ->> id`, id)}
      />
    </div>
  );
};
