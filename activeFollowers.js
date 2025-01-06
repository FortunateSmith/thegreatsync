/*
* This is a more challenging question, covering things we haven't even discussed yet 😲. It requires you to think about what value the genie points at after each expression. The goal is cognitive effort, not getting the right answer.
* I recommend copying the code into your code editor and isolating the expressions with well-named variables.
* The question: retrieve the number of followers in the "active" category.
*/

const post = {
    content: "Hello, world!",
    author: {
      username: "johndoe",
      getFollowers: function() {
        return function(category) {
          if (category === "active") {
            return [{ id: 1 }];
          } else {
            return [{ id: 2 }, { id: 3 }];
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
  
  // Write the expression here
  let activeFollowers;
  
  console.log(activeFollowers);