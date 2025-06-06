"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useClickAway } from "react-use";
import { useRef } from "react";
import Link from "next/link";
import { Api } from "@/services/api-client";

interface ISearchInputProps {
  className?: string;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef(null);

  useClickAway(searchRef, () => setIsFocused(false));

  useEffect(() => {
    if (searchInput.trim()) {
      Api.products.search(searchInput);
    }
  }, [searchInput]);

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

        <div
          className={cn(
            "absolute  w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            isFocused && "visible opacity-100 top-12"
          )}
        >
          <Link
            className="inline-flex w-full items-center gap-2 px-3 py-2 hover:bg-primary/10"
            href={"/product/1"}
          >
            <img
              className="rounded-sm h-8 w-8"
              src="https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif"
              alt="Пицца 1"
            />
            <span>Пицца 1</span>
          </Link>
        </div>
      </div>
    </>
  );
};
