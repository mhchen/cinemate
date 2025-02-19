import { GraphQLClient } from 'graphql-request';
import { API_DOMAIN, API_GRAPHQL_ENDPOINT } from './constants';
import { graphql } from '@/gql';
import { unstable_cache } from 'next/cache';

async function getClient() {
  const token = await getAuthToken();
  return new GraphQLClient(API_GRAPHQL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

type TokenResponse = { token: string };

export async function getAuthToken() {
  const response = await fetch(`${API_DOMAIN}/auth/token`, {
    cache: 'force-cache',
  });
  if (!response.ok) {
    throw new Error('Error fetching auth token');
  }

  const data = (await response.json()) as TokenResponse;
  return data.token;
}

const genresQuery = graphql(/* GraphQL */ `
  query GenresQuery {
    genres(pagination: { page: 1, perPage: 100 }) {
      nodes {
        id
        title
      }
    }
  }
`);
export async function getGenresResultUncached() {
  const client = await getClient();
  console.log('fetching genres');
  return await client.request(genresQuery);
}

export const getGenresResult = unstable_cache(getGenresResultUncached);

const moviesQuery = graphql(/* GraphQL */ `
  query MoviesQuery($page: Int!, $search: String!, $genre: String) {
    movies(
      pagination: { page: $page, perPage: 25 }
      where: { search: $search, genre: $genre }
    ) {
      nodes {
        id
        title
        posterUrl
        summary
        duration
        rating
        ratingValue
        datePublished
        genres {
          id
          title
        }
      }
      pagination {
        page
        perPage
        totalPages
      }
    }
  }
`);

export async function findMovies({
  page,
  search,
  genre,
}: {
  page: number;
  search: string;
  genre?: string;
}) {
  const client = await getClient();

  return client.request(moviesQuery, {
    page,
    search,
    genre,
  });
}
