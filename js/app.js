$(function(){

	agregarElementos(col1)
		var elemento=$(".main-titulo")
	
	blanco(elemento)
})
var minimo=1
var maximo=4
var columnas=7
var filas=8	

function blanco(elemento){
	$(elemento).animate({
		color:"#fff"
	},2000,function(elemento){
		amarillo(this)
	})
	
}
function amarillo(elemento){
	$(elemento).animate({
		color:"#DCFF0E"
	},2000,function(elemento){
		blanco(this)
	})
	
}


function aleatorio(minimo,maximo){
  return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}
	var col1=new Array(7)


function agregarElementos(col){
	for(var i=0;i<columnas;i++){
		for(var j=0;j<filas;j++){
			var col1=$(".col-"+[j])
			col1.append("<img src='image/"+aleatorio(minimo,maximo)+".png'class='elemento'>")
		}

}
chequeo()
	var imagenes=$(".elemento")	
			return imagenes
}
	

function chequeo(){
		var pictures=$(".elemento")
		
	
	
}
	


