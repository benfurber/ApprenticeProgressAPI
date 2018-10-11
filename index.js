const { ApolloServer, gql } = require("apollo-server");

const data = require("./data");
const goals = data.goals;

const typeDefs = gql`
  type Goal {
    id: Int
    actions: [String]
    description: String
    evidence: [String]
    score: Float
    tag: String
    title: String
  }

  type Query {
    goals: [Goal]
  }
`;

const resolvers = {
  Query: {
    goals: () => goals,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
