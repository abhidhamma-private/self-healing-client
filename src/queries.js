import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  {
    users {
      id
      name
    }
  }
`;
