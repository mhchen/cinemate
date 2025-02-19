/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GenresQuery {\n    genres(pagination: { page: 1, perPage: 100 }) {\n      nodes {\n        id\n        title\n      }\n    }\n  }\n": typeof types.GenresQueryDocument,
    "\n  query MoviesQuery($page: Int!, $search: String!, $genre: String) {\n    movies(\n      pagination: { page: $page, perPage: 25 }\n      where: { search: $search, genre: $genre }\n    ) {\n      nodes {\n        id\n        title\n        posterUrl\n        summary\n        duration\n        rating\n        ratingValue\n        datePublished\n        genres {\n          id\n          title\n        }\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n": typeof types.MoviesQueryDocument,
};
const documents: Documents = {
    "\n  query GenresQuery {\n    genres(pagination: { page: 1, perPage: 100 }) {\n      nodes {\n        id\n        title\n      }\n    }\n  }\n": types.GenresQueryDocument,
    "\n  query MoviesQuery($page: Int!, $search: String!, $genre: String) {\n    movies(\n      pagination: { page: $page, perPage: 25 }\n      where: { search: $search, genre: $genre }\n    ) {\n      nodes {\n        id\n        title\n        posterUrl\n        summary\n        duration\n        rating\n        ratingValue\n        datePublished\n        genres {\n          id\n          title\n        }\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n": types.MoviesQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GenresQuery {\n    genres(pagination: { page: 1, perPage: 100 }) {\n      nodes {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GenresQuery {\n    genres(pagination: { page: 1, perPage: 100 }) {\n      nodes {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MoviesQuery($page: Int!, $search: String!, $genre: String) {\n    movies(\n      pagination: { page: $page, perPage: 25 }\n      where: { search: $search, genre: $genre }\n    ) {\n      nodes {\n        id\n        title\n        posterUrl\n        summary\n        duration\n        rating\n        ratingValue\n        datePublished\n        genres {\n          id\n          title\n        }\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query MoviesQuery($page: Int!, $search: String!, $genre: String) {\n    movies(\n      pagination: { page: $page, perPage: 25 }\n      where: { search: $search, genre: $genre }\n    ) {\n      nodes {\n        id\n        title\n        posterUrl\n        summary\n        duration\n        rating\n        ratingValue\n        datePublished\n        genres {\n          id\n          title\n        }\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;