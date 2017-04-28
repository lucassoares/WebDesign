var d = document.documentElement;
var contador = 0;
var cores = ["#007CFF","#01CC4E","#E8422D","#FFED4E"];

d.onclick = function(){
	contador = contador + 1>=cores.length?0:contador+1,d.style.backgroundColor=cores[contador]
};
