import { fetchJson } from "@/hooks/helpers/fetchJson";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

export function useProductSearch(query: string) {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const trimmedQuery = query.trim();

  useEffect(() => {
    if (!trimmedQuery) {
      setProductList([]);
      setLoading(false);
      return;
    }
    setLoading(true);
  }, [trimmedQuery]);

  useDebounce(
    () => {
      if (!trimmedQuery) {
        setProductList([]);
        setLoading(false);
        return;
      }
      fetchJson<Product[]>(`/api/products/search?query=${encodeURIComponent(trimmedQuery)}`)
        .then((data) => setProductList(data))
        .catch(() => setProductList([]))
        .finally(() => setLoading(false));
    },
    350,
    [trimmedQuery]
  );

  return { productList, loading };
}
