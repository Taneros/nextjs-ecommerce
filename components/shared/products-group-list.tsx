'use client'

import { ProductCard } from "@/components/shared/product-card";
import { Title } from "@/components/shared/title";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React, { useEffect, useRef, FC } from "react";
import { useIntersection } from "react-use";

interface IProductsGroupListProps {
  className?: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productList: any[];
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: FC<IProductsGroupListProps> = ({
  className,
  categoryId,
  productList,
  title,
  listClassName,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  
  const ref = useRef<HTMLDivElement>(null);

  const intersection = useIntersection(ref, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)

      console.log(
        `shared/products-group-list.tsx - line: 32 ->> `,
        title,
        categoryId
      );
    }
  }, [title, categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={ref}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {productList.map(({ id, name, imageUrl, price, items }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={items[0].price}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
