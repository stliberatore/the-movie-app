export interface FilmResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Film[];
}

export interface Film {
      popularity: number;
      id: number;
      video: boolean;
      vote_count: number;
      vote_average: number;
      title: string;
      release_date: string;
      original_language: string;
      original_title: string;
      genre_ids: number[];
      backdrop_path: string;
      adult: boolean;
      overview: string;
      poster_path: string;
  }


