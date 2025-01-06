// The First Challenge
//1. Retrieve the content of the post.
//2. Retrieve the username of the author.
//3. Retrieve the text of the second comment.
//4. Retrieve the number of comments on the post using the getCommentCount() method.
//5. Retrieve the number of followers of the author using the getFollowers() method. 
// const post = {
//   id: 1,
//   content: "Hello, world!",
//   author: {
//     name: "John Doe",
//     username: "johndoe",
//     followers: 1000,
//     getFollowers: function () {
//       return this.followers;
//     }
//   },
//   comments: [
//     { id: 1, text: "Great post!" },
//     { id: 2, text: "I totally agree!" },
//     { id: 3, text: "Keep up the good work!" }
//   ],
//   getCommentCount: function () {
//     return this.comments.length;
//   }
// };

// let property = "author";

// console.log(post.content);
// console.log(post[property].username);
// console.log(post.comments[1].text);
// console.log(post.getCommentCount());
// console.log(post[property].getFollowers());


// The Second Challenge
// This is a more challenging question, covering things we haven't even covered yet.
// It requires you to think about what value
// the genie property points at after each notation to the captain.
// We also have to pass an argument to a function

const post = {
  content: "Hello, world!",
  author: {
    username: "johndoe",
    getFollowers: function() {
      return function(category) {
        if (category === "active") {
          return [/* Array of active followers */];
        } else {
          return [/* Array of all followers */];
        }
      };
    }
  },
  comments: [
    { text: "Great post!" },
    { text: "I totally agree!" },
    { text: "Looking forward to the next one." }
  ]
};

console.log(post.author.getFollowers(category.active))

// Question: 
// Retrieve the number of followers in the "active" category