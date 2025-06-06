"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { useProductSearch } from "@/hooks/useProductSearch";

interface ISearchInputProps {
  className?: string;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef(null);

  useClickAway(searchRef, () => setIsFocused(false));

  const { products, loading } = useProductSearch(searchInput);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 right-0 bg-black z-30 pointer-events-none transition-opacity duration-150",
          isFocused ? "opacity-50 pointer-events-auto" : "opacity-0"
        )}
      />
      <div
        className={cn(
          className,
          "flex rounded-2xl flex-1 justify-between relative h-11 z-50"
        )}
        ref={searchRef}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setIsFocused(true)}
          onChange={(input) => setSearchInput(input.currentTarget.value)}
        />

        {searchInput.trim().length > 0 && (
          <div
            className={cn(
              "absolute  w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              isFocused && "visible opacity-100 top-12"
            )}
          >
            {loading && <div className="px-3 py-2">Загрузка...</div>}
            {!loading && products.length === 0 && searchInput.trim() && (
              <div className="px-3 py-2 text-gray-400">Ничего не найдено</div>
            )}
            {products.map((product) => (
              <Link
                key={product.id}
                className="inline-flex w-full items-center gap-2 px-3 py-2 hover:bg-primary/10"
                href={`/product/${product.id}`}
              >
                <img
                  className="rounded-sm h-8 w-8"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
