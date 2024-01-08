const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const nineteenOlder = people.some(function(age) {
    return ((new Date().getFullYear()) - age.year) >= 19;
  });   
  console.log(nineteenOlder);

  // Array.prototype.every() // is everyone 19 or older?
      const older = people.every(function(age) {
        let currentYear = new Date().getFullYear();
        return(currentYear - age.year) >= 19
    });
    console.log(older);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
    const comment = (comments.find(com => com.id === 823423)).text;
    console.log(comment);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  const comm = comments.findIndex(com => com.id === 823423);
  console.log(comm);
// delete the comment with the ID of 823423
//console.table(comments.splice(comm, 1));
const newCommentsArr = [
    ...comments.slice(0, comm),
    ...comments.slice(comm + 1)
];

console.table(newCommentsArr);
console.table(comments);


