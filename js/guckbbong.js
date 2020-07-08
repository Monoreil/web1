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

function ShowHide() {
        ($('#hide_show').val() == "show" ? $('#float-area').show() : $('#float-area').hide());
        ($('#hide_show').val() == "hide" ? $('#hide_show').val('show') : $('#hide_show').val('hide'));
    }