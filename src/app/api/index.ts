'use server';

import { CuisineResponse } from '@/app/types/cuisine';
import { Recipe } from '@/app/types/recipe';

const baseUrl = 'https://api.spoonacular.com/recipes';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const ITEMS_PER_PAGE = 12;

export async function getRecipes(
  params: Record<string, string>
): Promise<CuisineResponse> {
  const page = Number(params.page) || 1;
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const query = new URLSearchParams({
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
    number: ITEMS_PER_PAGE.toString(),
    offset: offset.toString(),
    ...params,
  }).toString();

  const response = await fetch(`${baseUrl}/complexSearch?${query}`, {
    method: 'GET',
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
