/*
async function fetchData() {
  // async function return promise
  const url = "https://jsonplaceholder.typicode.com/users";
  const request = await fetch(url); // await hold the code to full fill the promise
  const response = await request.json();
  console.log(response);
}
fetchData(); // function call
*/

// Array Destructirung
// const names = ["Sam", "Herik", "Pawan", "Ronak"];
// const [n1, name2,...rest] = names;
// console.log(n1, name2);

// // ...rest operator or spread 
// console.log(n1,name2,rest);


// Object Destructirung
const details = {
  fname : "Piyush",
  lname : "Thaware",
  rollNo : 233,
  email:"Piyush@gmail.com"
}
console.log(details.fname);
console.log(details.lname);
console.log(details.uuuff);

// or 
console.log(details["fname"]);

// -----------------
const {fname,lname,...rest} = details;
console.log(fname,lname,rest);
