document.getElementById('check').addEventListener('click',function menu(){
	document.getElementById('fondomenu').classList.toggle('menuabierto');
	document.getElementById('weare').classList.toggle('weareabierto');
	document.getElementById('navegador').classList.toggle('navegadorAbierto');
	document.getElementById('navegador2').classList.toggle('navegadorAbierto'); 

	document.getElementById('fondemenu2').classList.toggle('menuabierto2');

})

var cabecera = document.getElementById('header');
var menu =document.getElementById('menu');
var logo = document.getElementById('logo');
var burguer =document.getElementById('burguer');
var checa =document.getElementById('check');
window.addEventListener('scroll',headercolor);
function headercolor(){
	var top = window.scrollY;
	if(top >= 850){
	cabecera.style.backgroundColor="#3e3e3d";
	console.log('hey, estas escroleando');
	logo.style.width="120px";
	logo.style.top="15px";
	menu.style.opacity="0";
	burguer.style.top="-15px";
	check.style.top="-20px";
	}else{
		cabecera.style.backgroundColor="transparent";
		logo.style.width="190px";
		logo.style.top="30px";
		menu.style.opacity="1";
		burguer.style.top="0px";
		check.style.top="0px";
	}
}
	var categoria1 = document.getElementById('categorias1');
	var categoria2 = document.getElementById('categorias2');
	var categoria3 = document.getElementById('categorias3');
	var categoria4 = document.getElementById('categorias4');
	document.getElementById('flechaCorp').addEventListener('click',function catego(){
	categoria1.style.display="none";
	categoria2.style.display="block";
});
	document.getElementById('flechaCorp2').addEventListener('click',function catego2(){
	categoria2.style.display="none";
	categoria3.style.display="block";
});
	document.getElementById('flechaCorp3').addEventListener('click',function catego3(){
	categoria3.style.display="none";
	categoria4.style.display="block";
});
	document.getElementById('flechaCorp4').addEventListener('click',function catego4(){
	categoria4.style.display="none";
	categoria1.style.display="block";
})
