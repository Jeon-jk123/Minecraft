var canvas=new fabric.Canvas('Canvas');
playerx=15;
playery=15;
blockwidth=30;
blockheight=30;

var player_object="";
var block_object="";

function pupdate() {
    fabric.Image.fromURL('player.png',function(Img){
        player_object=Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeight(100);
        player_object.set({
            top:playery,
            left:playerx,
        });
        canvas.add(player_object);
    });
}

function newimg(get_Img) {
    fabric.Image.fromURL(get_Img,function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockwidth);
        block_object.scaleToHeight(blockheight);
        block_object.set({
            top:playery,
            left:playerx,
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);
 function my_keydown(e) {
     var keypressed=e.keyCode;
     console.log(keypressed);

if  (keypressed=='37') {
    left();
    console.log("left");
}
if  (keypressed=='38') {
    up();
    console.log("up");
}
if  (keypressed=='39') {
    right();
    console.log("right");
}
if  (keypressed=='40') {
    down();
    console.log("down");
}
if  (keypressed=='84') {
    newimg("trunk.jpg");
    console.log("T");
}
if  (keypressed=='68') {
    newimg("dark_green.png");
    console.log("D");
}
if  (keypressed=='76') {
    newimg("light_green.png");
    console.log("L");
}
if  (keypressed=='71') {
    newimg("ground.png");
    console.log("G");
}
if  (keypressed=='87') {
    newimg("wall.jpg");
    console.log("W");
}
if  (keypressed=='89') {
    newimg("yellow_wall.png");
    console.log("Y");
}
if  (keypressed=='82') {
    newimg("roof.jpg");
    console.log("R");
}
if  (keypressed=='67') {
    newimg("cloud.jpg");
    console.log("C");
}
if  (keypressed=='85') {
    newimg("unique.png");
    console.log("U");
}
if   (e.shiftkey=true && keypressed=='80') {
    console.log("shift+p is clicked");
    blockheight=blockheight+10;
    blockwidth=blockwidth+10;
    document.getElementById("height").innerHTML=blockheight;
    document.getElementById("width").innerHTML=blockwidth;
}
if   (e.shiftkey=true && keypressed=='77') {
    console.log("shift+m is clicked");
    blockheight=blockheight-10;
    blockwidth=blockwidth-10;
    document.getElementById("height").innerHTML=blockheight;
    document.getElementById("width").innerHTML=blockwidth;
}
 }

 function up() {
if   (playery>=0){
    playery=playery-blockheight;
    console.log("playery="+playery+"playerx="+playerx);
    canvas.remove(player_object);
    pupdate();
}
 }

 function down() {
if   (playery<=500) {
    playery=playery+blockheight;
    console.log("playery="+playery+"playerx="+playerx);
    canvas.remove(player_object);
    pupdate();
}
 }

 function right() {
if   (playerx<=700) {
    playerx=playerx+blockwidth;
    console.log("playerx="+playerx+"playery="+playery);
    canvas.remove(player_object);
    pupdate();
}
}

function left() {
if  (playerx>=0) {
    playerx=playerx-blockwidth;
    console.log("playerx="+playerx+"playery="+playery);
    canvas.remove(player_object);
    pupdate();
}
}
 