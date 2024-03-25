// resolvers.js

const { User} = require('../model/client');
const { Post} = require('../model/project');

const resolvers = {
  Query: {
    user: (_, { id }) => User.findById(id),
    postsByUser: (_, { userId }) => Post.find({ author: userId })
  },
  Mutation: {
    createUser: (_, { username, email }) => User.create({ username, email }),
    createPost: (_, { content, userId }) => Post.create({ content, author: userId })
    
  },
  
  User: {
    posts: (user) => Post.find({ author: user.id })
  },
  Post: {
    author: (post) => User.findById(post.author),
  },
};

module.exports = {resolvers};
