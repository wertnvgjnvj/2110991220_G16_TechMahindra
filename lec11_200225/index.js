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

// Async - Await

// async function techDirectFunction() {
//   console.log("THIS IS helloTECH MAHINDRA");
// }

// const techData = techDirectFunction();
// console.log(techData);
// techData.then((res) => {
//   return res;
// });

// const helloTechMahindra= async function(){
//     console.log("THIS IS helloTECH MAHINDRA");
// }

// console.log(helloTechMahindra)
// helloTechMahindra();

// const samarPromised = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("I will be on time");
//   }, 10000);
// });

// console.log("Hello Class");

// async function techMahindra() {
//   const promiseOfSamar = await samarPromised;
//   // console.log(promiseOfSamar);
//   promiseOfSamar.then((res) => {
//     return res;
//   });
// }
// techMahindra();

// console.log("Class End");

//


