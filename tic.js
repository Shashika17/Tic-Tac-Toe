
function changeimageX(bid)
{
    var myImage = document.getElementById(bid);
    var currentPointerEvents = myImage.style.pointerEvents;
    myImage.style.pointerEvents ='none';
    document.getElementById(bid).src = "cross.png"

}
function changeimageO(bid)
{
    var myImage = document.getElementById(bid);
    var currentPointerEvents = myImage.style.pointerEvents;
    myImage.style.pointerEvents ='none';
    document.getElementById(bid).src = "circle.png";
}
function checkwin()
{  
     if(isFunctionEnabled == true)
    {
for (let i = 0; i < 8; i++) {
    if(all[i].every(item =>x.includes(item)) == true)
    {
         console.log("Player X wins!");
         document.getElementById("winner").textContent="Player X wins!"
         isFunctionEnabled = false;
    }
    else if(all[i].every(item =>O.includes(item)) == true)
    {
        console.log("Player O wins!");
        document.getElementById("winner").textContent="Player O wins!"
        isFunctionEnabled = false;
    }
    else if(O.length == 5 || x.length == 5)
    {
        document.getElementById("winner").textContent="Game over match draw !"
        isFunctionEnabled = false;
    }
}
    }
    else
   {
    console.log("winner has choosen")
   }
}

var click_count= 1;
let all=[
["btn1","btn2","btn3"],
["btn1","btn5","btn9"],
["btn1","btn4","btn7"],
["btn4","btn5","btn6"],
["btn7","btn8","btn9"],
["btn2","btn5","btn8"],
["btn3","btn6","btn9"],
["btn3","btn5","btn7"]]
let x=[]
let O=[]
let isFunctionEnabled = true;

function changeimage(imageId)
{
   if(isFunctionEnabled == true)
   {
 if(click_count % 2 == 1)
 {
    changeimageX(imageId);
    x.push(imageId);
    click_count++;
    if(x.length >= 2)
    {
      checkwin();
    }
 }
 else
 {
    changeimageO(imageId);
    O.push(imageId);
    click_count++;
    if(O.length >= 2)
    {
      checkwin();
    }
 }
   }
   else
   {
    console.log("winner has choosen")
   }
}


