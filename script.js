// Your JS goes here
var body = document.getElementsByTagName('body');
function createTile(color) {
var tile = document.createElement('div');
    tile.style.backgroundColor = color;
     //tile.innerText = 'squares';
     tile.className = "tiles";
     tile.style.width = "11.1%";
     tile.style.paddingBottom = "11.1%";
     tile.style.float = "left";

     //tile.style.backgroundColor = 'red';
     document.body.appendChild(tile);

}


var length = 8;
var width = 8;
var fillBox = (length * width);



function createBoard(){
  var color = '';
  for (var i = 1; i < fillBox; i++) {
    if (i%2===0){
      color = 'red';

    }else{
      color = 'black';

    }
    createTile(color);
  }
};

createBoard();




//NEXT PART----------------

function createBoard(){
  var color = '';
  for (var i = 1; i < fillBox; i++) {
    var randomRed = Math.floor(Math.random()*255);
    var randomGreen = Math.floor(Math.random()*255);
    var randomBlue = Math.floor(Math.random()*255);
var myString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")"
color = myString;
    createTile(color);
  }

};

createBoard();




//_______________________________

// function createBoard(){
//   var color = '';
//   for (var i = 1; i < fillBox; i++) {
//     var red = 255-(i*5);
//     var green = 0;
//     var blue = 0;
//     if (i%2==0){
//       var myString = "rgb(" + red + "," + green + "," + blue + ")"
//       color = myString;
//     }else{
//       color = 'rgb(0,255,0)'
//     }
// // color = myString;
//     createTile(color);
//   }
//
// };
//
// createBoard();
