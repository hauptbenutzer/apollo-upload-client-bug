// This setup does not work
import ApolloClient from 'apollo-client'
import { createNetworkInterface } from 'apollo-upload-client'

// Standard ApolloClient setup works
// import ApolloClient, { createNetworkInterface } from 'apollo-client'

import gql from 'graphql-tag'

const networkInterface = createNetworkInterface({
  uri: 'http://someendpoint.com/'
})

export const apolloClient = new ApolloClient({
  networkInterface: networkInterface,
})

apolloClient.query({
  query: gql`query ($token: ID!) {
    currentUser(token: $token) {
      email
      permissions { app, permissions }
    }
  }`,
  variables: {
    token: 'whatever'
  }
})
