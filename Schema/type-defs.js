
const { gql } = require('apollo-server-express');

// Define GraphQL type definitions
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    # Add other user fields as needed
  }

  type Post {
    id: ID!
    content: String!
    author: User!
    # Add other post fields as needed
  }

  type Query {
    user(id: ID!): User
    postsByUser(userId: ID!): [Post]
    # Add other query fields as needed
  }

  type Mutation {
    createUser(username: String!, email: String!): User
    createPost(content: String!, userId: ID!): Post
    # Add other mutation fields as needed
  }
`;

module.exports = {typeDefs};
