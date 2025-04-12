export interface Cuisine {
  id: number;
  image: string;
  imageType: string;
  title: string;
}

export interface CuisineResponse {
  number: number;
  offset: number;
  results: Cuisine[];
  totalResults: number;
}
