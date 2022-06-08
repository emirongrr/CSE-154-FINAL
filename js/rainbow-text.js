function toSpans(span) {
  var str = span.firstChild.data;
  var a = str.length;
  span.removeChild(span.firstChild);
  for (var i = 0; i < a; i++) {
    var theSpan = document.createElement("SPAN");
    theSpan.appendChild(document.createTextNode(str.charAt(i)));
    span.appendChild(theSpan);
  }
}
function RainbowSpan(span, hue, deg, brt, spd, hspd) {
  this.deg = (deg == null ? 360 : Math.abs(deg));
  this.hue = (hue == null ? 0 : Math.abs(hue) % 360);
  this.hspd = (hspd == null ? 3 : Math.abs(hspd) % 360);
  this.length = span.firstChild.data.length;
  this.span = span;
  this.speed = (spd == null ? 50 : Math.abs(spd));
  this.hInc = this.deg / this.length;
  this.brt = (brt == null ? 255 : Math.abs(brt) % 256);
  this.timer = null;
  toSpans(span);
  this.moveRainbow();
}
RainbowSpan.prototype.moveRainbow = function () {
  if (this.hue > 359) this.hue -= 360;
  var color;
  var b = this.brt;
  var a = this.length;
  var h = this.hue;
  for (var i = 0; i < a; i++) {

    if (h > 359) h -= 360;
    if (h < 60) { color = Math.floor(((h) / 60) * b); red = b; grn = color; blu = 0; }
    else if (h < 120) { color = Math.floor(((h - 60) / 60) * b); red = b - color; grn = b; blu = 0; }
    else if (h < 180) { color = Math.floor(((h - 120) / 60) * b); red = 0; grn = b; blu = color; }
    else if (h < 240) { color = Math.floor(((h - 180) / 60) * b); red = 0; grn = b - color; blu = b; }
    else if (h < 300) { color = Math.floor(((h - 240) / 60) * b); red = color; grn = 0; blu = b; }
    else { color = Math.floor(((h - 300) / 60) * b); red = b; grn = 0; blu = b - color; }
    h += this.hInc;
    this.span.childNodes[i].style.color = "rgb(" + red + ", " + grn + ", " + blu + ")";
  }
  this.hue += this.hspd;
}
var r1 = document.getElementById("r1");
var myRainbowSpan = new RainbowSpan(r1, 0, 360, 255, 50, 18);
myRainbowSpan.timer = window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);
