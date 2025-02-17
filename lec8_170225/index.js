// var count =0;
// function b(){
//     var count =0;
// document.getElementById("btn-click").addEventListener("click", function () {
//     count++;
//     console.log("click");
//     console.log(count);
//   });
// }
// function h(){
//     var count =0;
//   document.getElementById("btn-click1").addEventListener("click", function () {
//     count++;
//     console.log("click");
//     console.log(count);
//   });
// }
// b();
// h();
  

function reachedRestaurant(callback){
    console.log("reachedRestaurant");
    setTimeout(callback,1000);
}
function TableFinding(callback){
    console.log("TableFinding");
    setTimeout(callback,2000);
}
function menuDiscover(callback)
{
    console.log("menuDiscover");
    setTimeout(callback,3000);
}
function pricecheck(callback)
{
    console.log("pricecheck");
    setTimeout(callback,4000);
}
function startOrder(callback)
{
    console.log("startorder");
    setTimeout(callback,5000);
}
function starters(callback)
{
    console.log("starters");
    setTimeout(callback,6000);
}
function MainCourse(callback)
{
    console.log("MainCourse");
    setTimeout(callback,7000);
}
function desert(callback){
    console.log("desert");
    setTimeout(callback,8000);
}
function PayBill(callback){
    console.log("PayBill");
    setTimeout(callback,9000);
}


//chaining the callbacks

// reachedRestaurant(TableFinding(menuDiscover(pricecheck(startOrder(starters(MainCourse(desert(PayBill()))))))));


reachedRestaurant(()=>{
    TableFinding(()=>{
        menuDiscover(()=>{               //Pyramid of doom
            pricecheck(()=>{
                startOrder(()=>{
                    starters(()=>{
                        MainCourse(()=>{
                            desert(()=>{
                                PayBill()
                            })
                        })
                    })
                })
            })
        })
    })
})


