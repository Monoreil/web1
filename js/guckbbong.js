function ColorChange(self) {
    if (self.value === "day") {
        $('body,nav,a,header').css('color', 'white').css('background-color', '#020202');
        $(self).val('night');
    }
    else {
        $('body,nav,a,header').css('color', 'black').css('background-color', '#F4F5ED');
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
    hours = mod(hours, 12);
    $('.js-clock').text(zeroPlus(hours) + ":" + zeroPlus(minutes) + ":" + zeroPlus(seconds));
}
function zeroPlus(plus) {
    return (plus < 10) ? "0" + plus : plus;
}
function init() {
    clock();
    setInterval(clock, 1000);
}
function mod(n, m) {
    return ((n % m) + m) % m;
}
$(function movingBar() {

    var x;
    var y;
    var MIN = 100;
    var isvBarMoving = false;
    var isoBarMoving = false;
    var vContainer = $('#container');
    var oContainer = $('#rowContainer');

    $('#container nav div.verticleBar').mousedown(function (e) {
        isvBarMoving = true;
        x = e.pageX;
    });
    $('#rowContainer header div.opticleBar').mousedown(function (e) {
        isoBarMoving = true;
        y = e.pageY;
    });
    $(document).mouseup(function (e) {
        if (isvBarMoving) {
            isvBarMoving = false;
            movingvBar(vContainer, x, e.pageX);
            x = 0;
        }
        if (isoBarMoving) {
            isoBarMoving = false;
            movingoBar(oContainer, y, e.pageY);
            y = 0;
        }
    });
    $(document).mousemove(function (e) {
        if (isvBarMoving) {
            movingvBar(vContainer, x, e.pageX);
        }
        if (isoBarMoving) {
            movingoBar(oContainer, y, e.pageY);
        }
        x = e.pageX;
        y = e.pageY;
        $('#mouseCurser').css("top", y + 20).css("left", x - 15).text(x + "x " + y + "y");
    })
    function movingvBar(obj, bx, cx) {
        var gx = obj.css('gridTemplateColumns').split(" ")[0].replace(/[^0-9]/g, "");
        obj.css('gridTemplateColumns', pxControll(gx, bx, cx) + "px auto");
    }
    function movingoBar(obj, by, cy) {
        var gy = obj.css('gridTemplateRows').split(" ")[0].replace(/[^0-9]/g, "");
        obj.css('gridTemplateRows', pxControll(gy, by, cy) + "px auto");
    }
    function pxControll(g, b, c) {
        var d = c - b;
        var r = parseInt(g, 10) + d;
        if (r < MIN) {
            r = MIN;
        }
        return r;
    }
});
function ShowHide() {
    ($('#hide_show').val() == "show" ? $('#float-area').show() : $('#float-area').hide());
    ($('#hide_show').val() == "hide" ? $('#hide_show').val('show') : $('#hide_show').val('hide'));
}

$(function colorFunc(){
        
    window.onload = function (){
        var context = document.getElementById('myCanvas').getContext('2d');
        var img = new Image();
        img.src = '../img/color.jpg';
        context.drawImage(img, 0, 0,400,400);
    };

    function findPos(obj) {
        var current_left = 0, current_top = 0;
        if (obj.offsetParent) {
            do {
                current_left += obj.offsetLeft;
                current_top += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return { x: current_left, y: current_top };
        }
        return undefined;
    }

    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }

    $('#myCanvas').mousemove(function (e) {
        var position = findPos(this);
        var x = e.pageX - position.x;
        var y = e.pageY - position.y;
        var coordinate = "x=" + x + ", y=" + y;
        var canvas = this.getContext('2d');
        var p = canvas.getImageData(x, y, 1, 1).data;
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        $('#colorCurser').css("top", y + 20).css("left", x - 15).text("HEX: " + hex);
    });
    $('#myCanvas').mousedown(function(e){
        var position = findPos(this);
        var x = e.pageX - position.x;
        var y = e.pageY - position.y;
        var coordinate = "x=" + x + ", y=" + y;
        var canvas = this.getContext('2d');
        var p = canvas.getImageData(x, y, 1, 1).data;
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        $('#ch-color').val(hex);
    });
});


