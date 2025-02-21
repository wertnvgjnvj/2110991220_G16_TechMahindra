// let studentSahil = {
//   firstName: "Sahil",
//   lastName: "Aggarawal",

//   getResult: function () {
//     console.log("Passed");
//   },

// getName: function () {
//   console.log(this.firstName + " " + this.lastName);
// },
// };

// var print = studentSahil.firstName + " " + studentSahil.lastName;
// console.log(print);
// // console.log(studentSahil.getResult());
// console.log(studentSahil.getName());

// let getName = function (classStudent, text) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       " from class " +
//       classStudent +
//       " " +
//       text
//   );
// };

// let studentJasjot = {
//   firstName: "Jasjot",
//   lastName: "Singh",

//   getResult: function () {
//     console.log("Passed");
//   },
// };

// const student1 = getName.call(studentSahil, "G16", "G13"); // here student -> function to be called and G16 -> classStudent , the second place have the arguments
// const student2 = getName.apply(studentJasjot, ["G13,G14,G15"], "hen"); // only one argument is allowed to pass

// const getStudentBind = getName.bind(studentSahil, ["G13,G14,G15"], "jes"); //in this any argument like array plus any other arguments can also be showed

// console.log(getStudentBind());

//   console.log(student1);

// console.log(getName(studentJasjot));

// function a(){
//     return b(){

//     }
// }

// document.getElementById("searchbar").addEventListener("input",fetchData);
// let whichCall=0;
// function fetchData(){
//     console.log("Fetching API data")
// }

// let debouncingFunction = (){

// }

// const promise1 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     rej("PROMISE 1 DONE");
//   }, 5000);
// });
// const promise2 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     rej("PROMISE 2 DONE");
//   }, 2000);
// });
// const promise3 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     rej("PROMISE 3 DONE");
//   }, 3000);
// });
// const promise4 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     rej("PROMISE 4 DONE");
//   }, 1000);
// });

// console.log(Promise.all([promise1, promise2, promise3, promise4]));
// console.log("ENDD");

// console.log(Promise.allSettled([promise1, promise2, promise3, promise4]));

// console.log("RACE");

// console.log(Promise.race([promise1, promise2, promise3, promise4]));

// console.log("ANY");

// console.log(Promise.any([promise1, promise2, promise3, promise4]));
