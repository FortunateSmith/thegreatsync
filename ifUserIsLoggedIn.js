const user = {
  isLoggedIn: true,
  isPremium: false,
  isAdmin: true,
};

// if (user.isLoggedIn) {
//   if (user.isAdmin) {
//     console.log("User is an Admin");
//   } else {
//     if (user.isPremium) {
//       console.log("User is a Premium");
//     } else {
//       console.log("User is Logged In but not an Admin and not a Premium");
//     }
//   }
// } else {
//   console.log("User is not logged in");
// }

// if (user.isLoggedIn && user.isAdmin) {
//   console.log("User is an Admin");
// } else if (user.isLoggedIn && user.isPremium) {
//   console.log("User is a Premium");
// } else if (user.isLoggedIn) {
//   console.log("User is Logged In but not an Admin and not a Premium");
// } else {
//   console.log("User is not logged in");
// }

if (!user.isLoggedIn){
  console.log("User is not logged in")
}  
if (user.isLoggedIn && !user.isAdmin && !user.isPremium) {
  console.log("User is Logged In but not an Admin and not a Premium");
} 
if (user.isLoggedIn) {
  user.isAdmin ? console.log("User is an Admin") : console.log("User is a Premium")
}

/**
 * if user is logged in
 *    and user is admin
 *        console User is admin
 * else if user is logged in and
 *    user is premium
 *        console such
 * else if user logged in
 *    user not admin and not premium
 *        console such
 * else
 *    user is not logged in
 */
