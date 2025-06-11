import { fetchJson } from "@/hooks/helpers/fetchJson";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

export function useFilterIngredientList() {
  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);

  useEffect(() => {
    fetchJson<Ingredient[]>(`/api/ingredients`)
      .then((data) => setIngredientList(data))
      .catch(() => setIngredientList([]));
  }, []);

  return { ingredientList };
}
