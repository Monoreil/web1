export default function SplitWin(opt) {
    this.option = Object.assign({}, {
        wid1: "#win1",
        wid2: "#win2",
        barSize: 10,
        barColor: "green",
        direction: "vertical",
        minSize: 50,
        firstSize: "auto",
        secondSize: "auto"
    }, opt);
    this.pos = 0;
    this.isMoving = false;
}
SplitWin.prototype.makeGrid = function () {
    var o = this.option;
    var _grid = makeForm("div"),
        _w1 = makeForm("div"),
        _w2 = makeForm("div"),
        _bar = makeForm("div");

    _grid.appendChild(_w1);
    _grid.appendChild(_w2);
    _w1.appendChild(_bar);

    fullSize(_grid);
    fullSize(_w1);
    fullSize(_w2);

    _w1.style.position = "relative";
    _w1.style.whiteSpace = "nowrap";
    _w1.style.overflow = "hidden";

    _bar.style.position = "absolute";
    _bar.style.backgroundColor = o.barColor;
    _bar.style.opacity = "0.2";

    if (o.direction === "vertical") {
        _bar.style.width = isNaN(o.barSize) ? o.barSize : o.barSize + "px";
        _bar.style.height = "100%";
        _bar.style.top = 0;
        _bar.style.right = 0;
        _bar.addEventListener('mouseenter', function (e) {
            this.style.opacity = 0.8;
            this.style.cursor = "ew-resize";
        });
    } else {
        _bar.style.height = isNaN(o.barSize) ? o.barSize : o.barSize + "px";
        _bar.style.width = "100%";
        _bar.style.bottom = 0;
        _bar.style.left = 0;
        _bar.addEventListener('mouseenter', function (e) {
            this.style.opacity = 0.8;
            this.style.cursor = "ns-resize";
        });
        
    }
    _bar.addEventListener('mouseout', function (e) {
        this.style.opacity = 0.2;
        this.style.cursor = "";
    });
    _bar.addEventListener('mousedown', e => {
        this.pos = Direction(e.pageX, e.pageY);
        this.isMoving = true;
    });

    window.addEventListener('mousemove', e => {
        if (this.isMoving) {
            var epos = Direction(e.pageX, e.pageY);
            this.movingBar(_grid, epos);
            this.pos = Direction(e.pageX, e.pageY);
            _grid.style.cursor = Direction("ew-resize", "ns-resize");
            _bar.style.opacity = 0.8;
            _w1.style.userSelect = "none";
        }
    });
    window.addEventListener('mouseup', e => {
        if (this.isMoving) {
            var epos = Direction(e.pageX, e.pageY);
            this.movingBar(_grid, epos)
            this.pos = 0;
            this.isMoving = false;
        }
        _grid.style.cursor = "";
        _bar.style.opacity = 0.2;
        _w1.style.userSelect = "";

    });


    function fullSize(obj) {
        obj.style.width = "100%";
        obj.style.height = "100%";
        return obj;
    }
    function makeForm(form) {
        return document.createElement(form);
    }
    function Direction(verticalVal, horizentalVal) {
        return (o.direction === "vertical") ? verticalVal : horizentalVal;
    }
    var w1 = document.querySelector(o.wid1),
        w2 = document.querySelector(o.wid2);

    //  화면분할
    var fsize = isNaN(o.firstSize) ? o.firstSize : Number(o.firstSize) + "px";
    var ssize = isNaN(o.secondSize) ? o.secondSize : Number(o.secondSize) + "px";

    _grid.style.display = "grid";

    if (o.direction === "vertical") {
        _grid.style.gridTemplateColumns = fsize + " " + ssize;
        _w1.style.borderRight = "1px solid #777";
    } else {
        _grid.style.gridTemplateRows = fsize + " " + ssize;
        _w1.style.borderBottom = "1px solid #777";
    }


    //DOM 등록

    w1.before(_grid);
    _w1.appendChild(w1);
    _w2.appendChild(w2);

    _grid.parentElement.style.width = "100%";
    _grid.parentElement.style.height = "100%";

}
SplitWin.prototype.movingBar = function (obj, epos) {
    var o = this.option;
    var gpos, dpos, rpos;
    gpos = (o.direction === "vertical") ?
        window.getComputedStyle(obj).gridTemplateColumns.split(" ")[0].replace(/[^0-9.]/g, "") :
        window.getComputedStyle(obj).gridTemplateRows.split(" ")[0].replace(/[^0-9.]/g, "");

    dpos = epos - this.pos;
    rpos = parseInt(gpos, 10) + dpos;

    var minSize = isNaN(o.minSize) ? o.minSize.replace(/[^0-9.]/g, "") : Number(o.minSize);
    rpos = (rpos < minSize) ? rpos = minSize : rpos;
    
    
    if (o.direction === "vertical") {
        obj.style.gridTemplateColumns = rpos + "px auto"

    } else {
        obj.style.gridTemplateRows = rpos + "px auto"

    }


}