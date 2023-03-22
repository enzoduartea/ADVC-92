var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
var E= document.getElementById("myAudio5");
var n= document.getElementById("myAudio3");
var z= document.getElementById("myAudio4");
var o= document.getElementById("myAudio2");


function new_image()
{

fabric.Image.fromURL('bday-651.gif', function(Img) {
    console.log(Img);
    blockImageObject = Img;
    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
        top:0,
        ledt:0
    });
    canvas.add(blockImageObject);
});
}

function playSound(){
x.play();
}
function playSound2(){
    E.play();
    }
    function playSound3(){
        n.play();
        }
        function playSound4(){
            z.play();
            }
            function playSound5(){
                o.play();
                }
                            
                
