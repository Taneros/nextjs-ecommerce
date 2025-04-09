import { ProductCard } from "@/components/shared/product-card";
import { Title } from "@/components/shared/title";
import { cn } from "@/lib/utils";
import React from "react";

interface IProductsGroupListProps {
  className?: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productList: any[];
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<IProductsGroupListProps> = ({
  className,
  categoryId,
  productList,
  title,
  listClassName
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {
          productList.map(({id, name, imageUrl, price, items}) => (
            <ProductCard 
            key={id}
            id={id}
            name={name}
            price={items[0].price}
            imageUrl={imageUrl}
            />
          ))
        }
      </div>
    </div>
  );
};
