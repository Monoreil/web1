import RowOption from "./RowOption.js"
import ColOption from "./ColOption.js"
import SplitWin from "./SplitWin.js";

var rowOption = Object.assign({},RowOption,{wid1:"#first",wid2:"#second"});
var colOption = Object.assign({},ColOption,{wid1:"#third",wid2:"#forth"});

new SplitWin(rowOption).makeGrid();
new SplitWin(colOption).makeGrid();
