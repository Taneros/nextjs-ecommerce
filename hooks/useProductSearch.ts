import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

export function useProductSearch(query: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      return;
    }

    setLoading(true);
  }, [query]);

  useDebounce(
    () => {
      if (!query.trim()) {
        setProducts([]);
        return;
      }

      fetch(`/api/products/search?query=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .finally(() => setLoading(false));
    },
    350,
    [query]
  );

  return { products, loading };
}
