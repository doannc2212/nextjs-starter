import { gql } from "@apollo/client";

export const QUERY = gql`
  query GetRecord {
    countries {
      capital
      currency
    }
  }
`;
