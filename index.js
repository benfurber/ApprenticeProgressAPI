const { ApolloServer, gql } = require("apollo-server");

const goals = [
  {
    id: 1,
    actions: [
      "Help make the office a great place to work",
      "Pick up tasks others normally do when appropriate",
    ],
    description: "thoughtbot must be a great place to work for all staff.",
    evidence: ["Sorting snacks, etc. for office."],
    score: 4,
    tag: "Team thoughtbot",
    title: "I contribute to thoughtbot being a good place to work",
  },
  {
    id: 2,
    actions: [
      "Continue to learn React Native",
      "Pick up client projects quickly",
      "Solve own bugs/technical challenges without needing support",
    ],
    description: "I can support my own learning.",
    evidence: ["Completed a 5 point story with only gentle support."],
    score: 3,
    tag: "Team thoughtbot",
    title: "I iterate over my existing knowledge effectively",
  },
  {
    id: 3,
    actions: [],
    description: "Collaborating with colleagues is essential to innovation.",
    evidence: ["Refreshing the pairing programming skills of pairs"],
    score: 4,
    tag: "Team thoughtbot",
    title: "I’m a great pair programmer",
  },
  {
    id: 4,
    actions: ["Run workshop for team to discuss effective pairing methods"],
    description: "Everyone in thoughtbot helps each other learn and grow",
    evidence: ["Refreshing the pairing programming skills of pairs"],
    score: 2,
    tag: "Team thoughtbot",
    title: "I help others become better",
  },
  {
    id: 5,
    actions: ["1", "2"],
    description: "",
    evidence: [
      "Eye for detail",
      "Wanting to make products better (not just story minimum)",
    ],
    score: 3,
    tag: "Team thoughtbot",
    title: "I’m passionate about software/products",
  },
  {
    id: 6,
    actions: [],
    description: "Self management requires that you can motivate yourself to do better.",
    evidence: [""],
    score: 4,
    tag: "Team thoughtbot",
    title: "I set my own direction",
  },
  {
    id: 7,
    actions: ["Implement redux"],
    description: "Code is object orientated, easy to read/understand and easy to change.",
    evidence: [
      "Can explain difference and value of different types of components.",
      "Came up with the idea of the internal link component",
    ],
    score: 2.5,
    tag: "I'm a developer",
    title: "I can write high quality code for React Native",
  },
  {
    id: 8,
    actions: [
      "Continue to write more complex tests",
      "Write unit tests for redux",
    ],
    description: "Test driven development is central to how thoughtbot work.",
    evidence: ["Over initial hurdle of basics"],
    score: 2.5,
    tag: "I'm a developer",
    title: "I can write high quality test suites for React Native",
  },
  {
    id: 9,
    actions: [
      "Contribute to client projects",
      "Build breakable toy",
    ],
    description: "Bit difficult to do job otherwise...",
    evidence: ["Completed a few screens/components"],
    score: 2.5,
    tag: "I'm a developer",
    title: "I can build apps in React Native",
  },
  {
    id: 10,
    actions: [],
    description: "",
    evidence: ["Can explain the basics to non-developers"],
    score: 3,
    tag: "I'm a developer",
    title: "I understand how React Native works",
  },
  {
    id: 11,
    actions: [
      "Build an API",
      "Deploy an app to the marketplace",
    ],
    description: "Fundamentals of the how the internet is possible.",
    evidence: [""],
    score: 3,
    tag: "I'm a developer",
    title: "I understand how the web/databases works",
  },
  {
    id: 12,
    actions: ["Example of difficult conversations"],
    description: "Central to how thoughtbot work.",
    evidence: ["Good day-to-day communication with first client"],
    score: 3,
    tag: "I'm a consultant",
    title: "I communicate clearly with clients",
  },
  {
    id: 13,
    actions: ["Participate in a sales meeting"],
    description: "All thoughtbot staff contribute to the sales process.",
    evidence: ["Could give boilerplate thoughtbot explanation"],
    score: 2,
    tag: "I'm a consultant",
    title: "I can clearly explain to others where/when thoughtbot can add value",
  },
  {
    id: 14,
    actions: [],
    description: "All thoughtbot developers aspire to be CTOs for clients.",
    evidence: [
      "Have shown eye for detail in commits, communication and meetings",
    ],
    score: 3,
    tag: "I'm a consultant",
    title: "I understand how technical/design decisions will impact clients",
  },
  {
    id: 15,
    actions: [],
    description: "thoughtbot build software clients and users want.",
    evidence: ["First client continue to be happy with output"],
    score: 0,
    tag: "I'm a consultant",
    title: "My teams build software clients’ love",
  },
];

const typeDefs = gql`
  type Goal {
    id: Int
    actions: [String]
    description: String
    evidence: [String]
    score: Int
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
