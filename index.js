// document.querySelector("button").addEventListener("click", handleClick)
//
// function handleClick(){
//   alert("I got clicked!");
// }




// document.querySelector(".set").addEventListener("click", handleClick)
//
// function handleClick(){
//   alert("I got clicked!");
// }

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//
// for ( var i = 0; i < numberOfDrumButtons ; i++){
//
// document.querySelectorAll(".drum")[i].addEventListener("click", function (){
// alert("I got clicked!");
// });
// }


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var audio= new Audio("sounds/tom-1.mp3");
    audio.play();

  });
}
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// console.log("numberOfDrumButtons");
// var i = 7;
// while (i < numberOfDrumButtons){
//
//   document.querySelectorAll("drum")[i].addEventListener("click", function(){
//     alert ("I got clicked!!");
//   })
// }
