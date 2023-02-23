declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production"

    NEXT_PUBLIC_TMDB_API_KEY: string

    NEXT_PUBLIC_BASE_URL: string

    NEXT_PUBLIC_SANITY_DATASET: string
    NEXT_PUBLIC_SANITY_PROJECT_ID: string
    SANITY_API_TOKEN: string

    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
    STRIPE_SECRETE_KEY: string
    STRIPE_SIGNING_SECRET: string

    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string

    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string

    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
  }
}

export interface Genre {
  id: number
  name: string
}

export interface Movie {
  title: string
  backdrop_path: string
  media_type?: string
  release_date?: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface Element {
  type:
  | 'Bloopers'
  | 'Featurette'
  | 'Behind the Scenes'
  | 'Clip'
  | 'Trailer'
  | 'Teaser'
}
