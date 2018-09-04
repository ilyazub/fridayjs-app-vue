const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Photo {
    id: Int!
    link: String!
  }

  type Event {
    id: Int!
    title: String!
    date: String!
    photos: [Photo!]
  }
  
  type Query {
    events: [Event!]
  }
  
  schema {
    query: Query
  }
`;

const { events } = require('./data/fridayjs.json');

const resolvers = {
  Query: {
    events: () => events,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
