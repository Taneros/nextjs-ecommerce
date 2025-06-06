import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

export function useProductSearch(query: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const trimmedQuery = query.trim();

  useEffect(() => {
    if (!trimmedQuery) {
      setProducts([]);
      setLoading(false);
      return;
    }
    setLoading(true);
  }, [trimmedQuery]);

  useDebounce(
    () => {
      if (!trimmedQuery) {
        setProducts([]);
        setLoading(false);
        return;
      }
      fetch(`/api/products/search?query=${encodeURIComponent(trimmedQuery)}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch(() => setProducts([]))
        .finally(() => setLoading(false));
    },
    350,
    [trimmedQuery]
  );

  return { products, loading };
}
