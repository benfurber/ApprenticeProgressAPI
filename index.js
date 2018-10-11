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
    score: 5,
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
    evidence: [
      "Completed a 5 point story with only gentle support.",
      "Having had issues with Jest setup, was able to fix client test suite."
    ],
    score: 4,
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
    actions: [],
    description: "Everyone in thoughtbot helps each other learn and grow",
    evidence: [
      "Refreshing the pairing programming skills of pairs",
      "Run workshop for team to discuss effective pairing methods",
      "Cool head when dealing with clients helped others",
    ],
    score: 3.5,
    tag: "Team thoughtbot",
    title: "I help others become better",
  },
  {
    id: 5,
    actions: [],
    description: "",
    evidence: [
      "Eye for detail",
      "Wanting to make products better (not just story minimum)",
    ],
    score: 4,
    tag: "Team thoughtbot",
    title: "I’m passionate about software/products",
  },
  {
    id: 6,
    actions: [],
    description: "Self management requires that you can motivate yourself to do better.",
    evidence: ["Have focused on toy when project direction didn't support learning"],
    score: 5,
    tag: "Team thoughtbot",
    title: "I set my own direction",
  },
  {
    id: 7,
    actions: ["Build a more mature redux setup"],
    description: "Code is object orientated, easy to read/understand and easy to change.",
    evidence: [
      "Can explain difference and value of different types of components.",
      "Came up with the idea of the internal link component",
      "Have build a basic redux flow"
    ],
    score: 3,
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
    evidence: [
      "Over initial hurdle of basics",
      "Appreciate the limits of snapshot tests",
      "When to refactor out component functionality to pure javascript to aid testing",
    ],
    score: 3,
    tag: "I'm a developer",
    title: "I can write high quality test suites for React Native",
  },
  {
    id: 9,
    actions: [
      "Continue to build breakable toy",
    ],
    description: "Bit difficult to do job otherwise...",
    evidence: [
      "Contribute to client projects",
      "Completed a few screens/components",
      "Have an MVP breakable toy",
    ],
    score: 3,
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
    title: "I understand enough about how React Native works",
  },
  {
    id: 11,
    actions: [
      "Setup testflight for toy",
    ],
    description: "Essential to building products ",
    evidence: ["Have deployed to testflight"],
    score: 3,
    tag: "I'm a developer",
    title: "I can complete the app life-cycle process",
  },
  {
    id: 12,
    actions: [],
    description: "",
    evidence: [],
    score: 3,
    tag: "I'm a developer",
    title: "I understand how enough about how the web/databases works",
  },
  {
    id: 13,
    actions: [],
    description: "Central to how thoughtbot work.",
    evidence: [
      "Good day-to-day communication with first client",
      "Have supported difficult conversations with a client",
    ],
    score: 4,
    tag: "I'm a consultant",
    title: "I communicate clearly with clients",
  },
  {
    id: 14,
    actions: ["Participate in a sales meeting"],
    description: "All thoughtbot staff contribute to the sales process.",
    evidence: ["Could give boilerplate thoughtbot explanation"],
    score: 2,
    tag: "I'm a consultant",
    title: "I can clearly explain to others where/when thoughtbot can add value",
  },
  {
    id: 15,
    actions: [],
    description: "All thoughtbot developers aspire to be CTOs for clients.",
    evidence: [
      "Have shown eye for detail in commits, communication and meetings",
      "Can explain impact of off-shoring development work",
    ],
    score: 3.5,
    tag: "I'm a consultant",
    title: "I understand how technical/design decisions will impact clients",
  },
  {
    id: 16,
    actions: [],
    description: "thoughtbot build software clients and users want.",
    evidence: ["First client continue to be happy with output"],
    score: 2,
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
