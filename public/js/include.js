
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'seagreen';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  //grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  //grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function convertIntoText(h,m){
    $("#id01").addClass('boldClass');
    if(m==0) {
        selectHour(h,m);
    }else if(m==30) {
        $("#id02").addClass('boldClass');
        selectHour(h,m);
    }else if(m<30){
        $("#id09").addClass('boldClass');
        selectHour(h,m);
        if(m==5){
            $("#id06").addClass('boldClass');
            $("#id07").addClass('boldClass');
        }else if(m==10) {
            $("#id03").addClass('boldClass');
            $("#id07").addClass('boldClass');
        }else if(m==15) {
            $("#id04").addClass('boldClass');
        }else if(m==20) {
            $("#id05").addClass('boldClass');
            $("#id07").addClass('boldClass');
        }else if(m==25) {
            $("#id05").addClass('boldClass');
            $("#id06").addClass('boldClass');
            $("#id07").addClass('boldClass');
        }else{
            clearStyles();
        } 
    }else if(m>30){
        selectHour(h,m);
        $("#id08").addClass('boldClass');
        if(m==35){
            $("#id05").addClass('boldClass');
            $("#id06").addClass('boldClass');
            $("#id07").addClass('boldClass');
        }else if(m==40) {
            $("#id05").addClass('boldClass');
            $("#id07").addClass('boldClass');
        }else if(m==45) {
            $("#id04").addClass('boldClass');
        }else if(m==50) {
            $("#id03").addClass('boldClass');
            $("#id07").addClass('boldClass');
        }else if(m==55) {
            $("#id06").addClass('boldClass');
            $("#id07").addClass('boldClass');
        }else{
            clearStyles();
        } 
    } else{
        clearStyles();
    } 
}

function selectHour(h,m){
    var a = h+9;
    if(m>30){
        a=a+1;
    }
    var id = "id"+a;
    if(id=="id22"){
        id="id10";
    }
    $("#"+id).addClass('boldClass');
}

function clearStyles(){
    $("#id01").removeClass('boldClass');
    $("#id02").removeClass('boldClass');
    $("#id03").removeClass('boldClass');
    $("#id04").removeClass('boldClass');
    $("#id05").removeClass('boldClass');
    $("#id06").removeClass('boldClass');
    $("#id07").removeClass('boldClass');
    $("#id08").removeClass('boldClass');
    $("#id09").removeClass('boldClass');
    $("#id10").removeClass('boldClass');
    $("#id11").removeClass('boldClass');
    $("#id12").removeClass('boldClass');
    $("#id13").removeClass('boldClass');
    $("#id14").removeClass('boldClass');
    $("#id15").removeClass('boldClass');
    $("#id16").removeClass('boldClass');
    $("#id17").removeClass('boldClass');
    $("#id18").removeClass('boldClass');
    $("#id19").removeClass('boldClass');
    $("#id20").removeClass('boldClass');
    $("#id21").removeClass('boldClass');
    $("#id22").removeClass('boldClass');   
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    //console.log("Hour is"+hour);
    //console.log("Minute is"+minute);
        
    convertIntoText(hour,minute);

    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);

    
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
