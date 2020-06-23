import React from "react";
import { render } from "react-dom";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.code-challenge.ze.delivery/public/graphql",
});

const client = new ApolloClient({
  cache,
  link,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
