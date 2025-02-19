import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'https://0kadddxyh3.execute-api.us-east-1.amazonaws.com/graphql': {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvcGVuSnd0MiIsIm5hbWUiOiJPcGVuSldUWzJdIn0.ZV0H5kJrzOsfk3guI9pHt1bp0xzuCEFiuS4bP1XbEZE`,
        },
      },
    },
  ],
  documents: ['src/**/*.ts'],
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};
export default config;
