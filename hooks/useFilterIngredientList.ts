import { fetchJson } from "@/hooks/helpers/fetchJson";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

export function useGetFilterIngredientList() {
  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchJson<Ingredient[]>(`/api/ingredients`)
      .then((data) => setIngredientList(data))
      .catch(() => setIngredientList([]))
      .finally(() => setLoading(false));
  }, []);

  return { ingredientList, loading };
}
