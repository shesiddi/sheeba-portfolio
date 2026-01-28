//import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from '@apollo/client';

  const httpLink = new HttpLink({ 
    uri: 'https://example.com/graphql' 
  });

 const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  });

export default client;