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