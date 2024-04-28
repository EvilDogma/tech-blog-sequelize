// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User)
User.hasMany(Post)

Comment.belongsTo(User)
User.hasMany(Comment)

Comment.belongsTo(Post)
Post.hasMany(Comment)

module.exports = {
  User,
  Post,
  Comment
}