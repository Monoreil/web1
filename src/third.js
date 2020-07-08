import SplitWin from './SplitWin.js';
import css from './style.css'

new SplitWin({wid1:"#w1",wid2:"#w2",direction:"horizental",firstSize:100}).makeGrid();
new SplitWin({wid1:"#w11",wid2:"#w12",barColor:"purple",firstSize:100}).makeGrid();
new SplitWin({wid1:"#w21",wid2:"#w22",barColor:"salmon"}).makeGrid();
new SplitWin({wid1:"#w111",wid2:"#w112",barColor:"blue"}).makeGrid();