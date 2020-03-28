const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googleboks"
);

const bookSeed = {
  authors: ["Stephen King"],
    description:  "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    image: "https://3.bp.blogspot.com/-V_y4mmBL46s/WM-1ri7233I/AAAAAAAAsy0/k5ugPVyUodI4wIKDRgdHOOWuCH18aUQFgCLcB/s1600/King%2B-%2BThe%2BDead%2BZone%2BMMP%2Band%2BeBook%2B525px.jpg",
    link: "https://books.google.com/books?id=ZbUACwAAQBAJ&printsec=frontcover&dq=title:The+Dead+Zone&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwj6wo7Mjr3oAhUtn-AKHVx0CQEQ6AEwAHoECAYQAg#v=onepage&q=title%3AThe%20Dead%20Zone&f=false",
    title: "The Dead Zone",
}
  

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
