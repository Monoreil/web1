import SplittWin from './SplitWin.js';
import RowOption from './RowOption.js';
import ColOption from './ColOption.js';
import css from './style.css';

var rowOption = Object.assign({},RowOption,{wid1:"#header",wid2:"#container"});
var colOption = Object.assign({},ColOption,{wid1:"#nav",wid2:"#section"});

new SplittWin(rowOption).makeGrid();
new SplittWin(colOption).makeGrid();