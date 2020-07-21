import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

const link = new HttpLink({uri: 'http://localhost:1232/'});
const cache = new InMemoryCache();

/**
 * Creates a new apollo client
 * @type {ApolloClient}
 */
const client = new ApolloClient({
    link,
    cache
});

export default client;