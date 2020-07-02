function ColorChange(self) {
    if (self.value === "day") {
        $('body').css('color', 'white').css('background-color', 'black');
        $('nav,a').css('color', 'white').css('background-color', 'black');
        $(self).val('night');
    }
    else {
        $('body').css('color', 'black').css('background-color', 'white');
        $('nav,a').css('color', 'black').css('background-color', 'white');
        $(self).val('day');
    }
}
function TextChange() {
    $('section').css('color', $('#ch-text').val());
}
function FloatText() {
    $('#float-area').append("<MARQUEE>" + $('#float-text').val() + "</MARQUEE>")
}
var test = {
    programer: "lee",
    designer: "kim",
    user: "park",
    frontend: "choi",
    backend: "yim",
    ch_color: function (color, backcolor) {
        $('body').css('color', color).css('background-color', backcolor);
    },
    showAll: function () {
        for (key in test) {
            console.log(key + " : " + test[key]);
        }
    }
}
test.betatester = "yu";
function t_proto() { }
t_proto.prototype.type = "squre";
t_proto.prototype.width = "300px";
t_proto.prototype.heigth = "300px";
t_proto.prototype.showType = function () {
    for (i in t_proto.prototype) {
        $('#float-area').append("<span>" + i + " : " + t_proto.prototype[i] + "</span><br>");
    }
}
function nd_proto() { }
nd_proto.prototype = new t_proto();
nd_proto.prototype.type = "circle";
nd_proto.prototype.showType2 = function () {
    for (i in nd_proto.prototype) {
        $('#float-area').append("<span>" + i + " : " + nd_proto.prototype[i] + "</span><br>");
    }
}
function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours=mod(hours,12);
    $('.js-clock').text(hours+ ":" + minutes + ":" + seconds);
}
function init() {
    clock();
    setInterval(clock, 1000);
}
function mod(n, m) {
    return ((n % m) + m) % m;
  }

