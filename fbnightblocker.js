var d = new Date();
var hour = d.getHours();
if (Number(hour) < 7) {
document.body.innerHTML = "Come on. You don't need to... It's " + hour + "a.m. and that's no time to be on Facebook. Try again after 7 a.m.";
}



