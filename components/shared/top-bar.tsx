import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "@/components/shared/container";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";

interface ITopBarProps {
  className?: string;
}

export const TopBar: React.FC<ITopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5",
        className
      )}
    >
      <Container>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
