import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

const GRAPHQL_ENDPOINT = 'http://localhost:4000';

export default new VueApollo({
  defaultClient: new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
  })
});
