const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Topic {
    id: Int!
    title: String!
    speaker: String!
    speakerPhoto: String
    slides: String
    video: String
  }
  
  type Photo {
    id: Int!
    link: String!
  }

  type Event {
    id: Int!
    title: String!
    date: String!
    topics: [Topic!]
    photos: [Photo!]
  }
  
  type Query {
    events: [Event!]
    event(id: Int!): Event
  }
  
  schema {
    query: Query
  }
`;

const { events } = require('./data/fridayjs.json');

const getEvents = () => events;
const getEvent = (eventId) => events.find(({ id }) => id === eventId);

const resolvers = {
  Query: {
    events: () => getEvents(),
    event: (_, { id }) => getEvent(id),
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
