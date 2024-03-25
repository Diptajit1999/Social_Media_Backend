

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./Schema/type-defs');
const resolvers = require('./Schema/resolvers');
const {connectDB}=require("./db")
// Set up Express server
const app = express();
connectDB()
// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply Apollo middleware to Express app
server.applyMiddleware({ app });

// Set up port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
