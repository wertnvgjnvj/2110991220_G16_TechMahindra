// Higher order function

// data = [2,4,6,8,10];

// function double(data)
// {
//     doubleDataArr=[];
//     for(let i=0;i<=data.length;i++)
//     {
//     doubleDataArr.push(data[i]*2);
//     }
// }

// console.log(doubleDataArr(data));

// const calculateDoubleData = function (data){
//     const output=[];
//     const put=[];
//     for(let i=0;i<data.length;i++)
//     {
//         output.push(data[i]*2);
//         put.push(data[i]/2);
//     }
//     return output;
   
// }

// const Half = function (data){
//     const output=[];
//     for(let i=0;i<data.length;i++)
//     {
//         output.push(data[i]/2);
//     }
//     return output;
// }


// const calculateAddTen = function (data){
//     const output=[];
//     for(let i=0;i<data.length;i++)
//     {
//         output.push(data[i]+10);
//     }
//     return output;
// }

// console.log(calculateData(data,double));
// console.log(calculateData(data,half));
// console.log(calculateData(data,AddTen));

// Polyfill feature in js
// By using prototype

// Array.prototype.mapp = function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++)
//     {
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// console.log(data.mapp(double));

// function diameter(inside){
//     var ans=inside*2;
//     return ans;
// }
// function circumference(inside){
//     var ans=2*3.14*inside;
//     return ans;
// }
// function Area(inside){
//     var ans=3.14*inside*inside;
//     return ans;
// }
// Array.prototype.mapp = function(calculate){
//     var output=[];
//     for(let i=0;i<this.length;i++)
//     {
//         output.push(calculate(this[i]));
//     }
//     return output;
// }
// console.log(data.mapp(diameter));
// console.log(data.mapp(circumference));
// console.log(data.mapp(Area));

// data = [1, 3, 6, 8, 7, 10];

// function filterOdd(data) {
//   var res = [];

//   for (let i = 0; i<data.length; i++) {
//     if (data[i] % 2 != 0) {
//       res.push(data[i]);
//     }
//   }
//   return res;
// }

// console.log(filterOdd(data));

const users = [
    { firstName: "Pratiyush", lastName: "Ray", age: 25 },
    { firstName: "Piyush", lastName: "Saini", age: 22 },
    { firstName: "Sahil", lastName: "Aggarwal", age: 20 },
    { firstName: "Ayush", lastName: "Jawa", age: 28 },
    { firstName: "Daksh", lastName: "Singh", age: 40 },
  ];
  
  // Combine first and last name
  const FullName = users.map((user) => user.firstName + " " + user.lastName);
  console.log(FullName); // Output: ["Pratiyush Ray", "Piyush Saini", "Sahil Aggarwal", "Ayush Jawa", "Daksh Singh"]
  
  // Filter out users above 24 and their full name
  const above24 = users
    .filter((user) => user.age > 24)
    .map((user) => user.firstName + " " + user.lastName);
  console.log(above24); // Output: ["Pratiyush Ray", "Ayush Jawa", "Daksh Singh"]