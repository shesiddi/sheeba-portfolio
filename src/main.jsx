import React from "react";
import ReactDOM from "react-dom/client";
// import { ApolloProvider } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';
import { Provider } from "react-redux";
import { store } from "./store";
import client from "./graphql/client";
import App from "./App";
import "./index.css";

// const client = new ApolloClient({
//   uri: "https://countries.trevorblades.com/", // temporary test API
//   cache: new InMemoryCache(),
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
