"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React, { FC } from "react";

interface CategoriesProps {
  className?: string;
}

const categoryList = [
  { id: 1, categoryName: "Пиццы" },
  { id: 2, categoryName: "Комбо" },
  { id: 3, categoryName: "Закуски" },
  { id: 4, categoryName: "Коктейли" },
  { id: 5, categoryName: "Кофе" },
  { id: 6, categoryName: "Напитки" },
  { id: 7, categoryName: "Десерты" },
];

export const Categories: FC<CategoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categoryList.map(({ categoryName, id }) => (
        <a
          key={id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${categoryName}`}
          // onClick={(e) => {
          //   e.preventDefault();
          //   const targetId = `#${categoryName}`;
          //   const targetElement = document.querySelector(targetId);
          //   targetElement?.scrollIntoView({ behavior: "smooth" });
          // }}
        >
          <button>{categoryName}</button>
        </a>
      ))}
    </div>
  );
};
