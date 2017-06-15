/**
 * Created by bom on 2016/6/22.
 */

var canvas = document.getElementById('shuidi');
  ctx = canvas.getContext("2d");

ctx.beginPath();
var grd = ctx.createLinearGradient(0,0,1200,600);
grd.addColorStop(0,"rgb(255,255,0)");
grd.addColorStop(0.4,"#ccc");
ctx.fillStyle=grd;
ctx.moveTo(120,360);
ctx.quadraticCurveTo(110,350,120,340);
ctx.lineTo(520,340);
ctx.quadraticCurveTo(570,340,570,290);
ctx.quadraticCurveTo(570,240,620,240);
ctx.lineTo(1020,240)
ctx.quadraticCurveTo(1040,250,1020,260)
ctx.lineTo(640,260)
ctx.quadraticCurveTo(590,260,590,310)
ctx.quadraticCurveTo(590,360,540,360)
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgb(0,255,255)';
ctx.moveTo(120,350);
ctx.quadraticCurveTo(52,290,50,250);
ctx.arc(120,250,70,Math.PI,0,false);
ctx.quadraticCurveTo(188,290,120,350);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle='rgb(160,255,255)';
//省地税局的圆
ctx.arc(120,250,40,0,Math.PI*2,false);
ctx.closePath();
ctx.fill();
ctx.beginPath();
var img = new Image();
img.src="../imges/sdsj.png";
img.onload=function(){
    ctx.drawImage(img,88,218)
}
ctx.closePath();
ctx.fillStyle='#fff'
ctx.font="18px Georgia";
ctx.fillText("省地税局",85,310);



