"use server";

import { CuisineResponse } from "@/app/types/cuisine";
import { Recipe } from "@/app/types/recipe";

const baseUrl = "https://api.spoonacular.com/recipes";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export async function getRecipes(
  params: Record<string, string>
): Promise<CuisineResponse> {
  const query = new URLSearchParams({
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
    ...params,
  }).toString();

  const response = await fetch(`${baseUrl}/complexSearch?${query}`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export async function getRecipe(id: string) {
  const response = await fetch(`${baseUrl}/${id}/information?apiKey=${apiKey}`);
  const data: Recipe = await response.json();
  return data;
}
