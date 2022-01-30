const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_content: "Wow this is a nice post",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_content: "https://nasa.gov/donec.json",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_content: "Great Websites to check out are...",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    post_content: "Hello friends this is my first post!",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    post_content: "Love it here.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
