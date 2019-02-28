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
	$(".eliminar").removeClass("eliminar")
/*******SELLECION DE COLUMNAS*******/
	for(var n=0;n<8;n++){
		var images=$(".col-"+[n]+" .elemento")
		var pictures=$(images)[0]
		var hermanos=$(pictures).siblings()
		var longitud=$(hermanos).length
		for(var i=0;i<(longitud);i++){
			var oniichan=$(images)[i]
			var oniAtr=$(oniichan).attr("src")
			bro1=$(hermanos)[i]
			bro2=$(hermanos)[i+1]
			var hermanosSRC1=$(bro1).attr("src")
			var hermanosSRC2=$(bro2).attr("src")

			if((oniAtr==hermanosSRC1)&&(oniAtr==hermanosSRC2)){				
				$(oniichan).addClass("eliminar")
				$(bro1).addClass("eliminar")
				$(bro2).addClass("eliminar")				
				var brother=true
				while(brother){
						var broNext=$(hermanos)[i+2]
				var broNextAtr=$(broNext).attr("src")	
					if((oniAtr==broNextAtr)&&(i!=(longitud-2))){
					$(broNext).addClass("eliminar")
					i++
				}else{brother=false}
				}						
			}
		}	
	}


	/*******SELLECION DE FILAS*******/
for(var m=0;m<7;m++){
		var tablero=$(".panel-tablero div[class^='col-']")	
		var primerHijo=$(tablero).children()[m]
		
		var hermanosFila=$(tablero).siblings()
		var herFi=hermanosFila.length
		
		for(var v=0;v<5;v++){
			var padre=$(hermanosFila)[v]
			var hijo=$(padre).children()[m]
			var hijoatr=$(hijo).attr("src")
			var padrastro=$(hermanosFila)[v+1]
			var padrastro2=$(hermanosFila)[v+2]
			var hermano1=$(padrastro).children()[m]
			var hermano2=$(padrastro2).children()[m]
			var her1atr=$(hermano1).attr("src")
			var her2atr=$(hermano2).attr("src")
			
			
			if((hijoatr==her1atr)&&(hijoatr)==her2atr){
				$(hijo).addClass("eliminar")
				$(hermano1).addClass("eliminar")
				$(hermano2).addClass("eliminar")
			}
	
		}

		
				
	}		
		
}



function borrar(){
	$(".eliminar").remove()
		
}
function agregarHijos(){
	borrar()
	var tablero=$(".panel-tablero div[class^='col-']")	
		var tablero=$(tablero)[0]
		var primerHijo=$(tablero).children()
		var long=$(primerHijo).length
		reponer()	
}
function reponer(){
	var columnas=$(".panel-tablero div[class^='col-']")
	for(var j=0; j<7;j++){
		var columna1=$(columnas)[j]
		var hijos=$(columna1).children()
		var primogenito=$(hijos)[0]
		var veces=$(hijos).length
		console.log(veces)	
		
		for(var i=veces; i<7;i++){
			var contenido="<img src='image/"+aleatorio(minimo,maximo)+".png'class='elemento'>"
			$(primogenito).before(contenido)		
		}
		if(veces==0){
			for(var i=0;i<8;i++){
				var col=$(columnas)[j]
				maximo=4
				var contenido="<img src='image/"+aleatorio(minimo,maximo)+".png'class='elemento'>"
				$(col).append(contenido)
			}
		}	
	}
	
	
	

}





