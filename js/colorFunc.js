 $(function colorFunc(){
        
    window.onload = function (){
        var context = document.getElementById('myCanvas').getContext('2d');
        var img = new Image();
        img.src = '../img/color.png';
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
        $('#ch-text').val(hex);
    });
});