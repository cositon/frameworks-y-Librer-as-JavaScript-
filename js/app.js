$(function(){

	agregarElementos(col1)
		var elemento=$(".main-titulo")
	
	blanco(elemento)
})
var minimo=1
var maximo=2
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
/*******SELLECION DE COLUMNAS*******/
	for(var n=0;n<8;n++){
		var images=$(".col-"+[n]+" .elemento")
		var pictures=$(images)[0]
		var hermanos=$(pictures).siblings()
		var longitud=$(hermanos).length
		for(var i=0;i<(longitud-2);i++){
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
}

/*******SELLECION DE FILAS*******/
for(var m=0;m<8;m++){
		var tablero=$(".panel-tablero")[0]
		console.log(tablero)
		var primerHijo=$(tablero).children()[0]
		var hermanosFila=$(primerHijo).siblings()
		console.log(primerHijo)
		console.log(hermanosFila)
		
		var pictures=$(tablero)[0]
		
		var longitud=$(hermanosFila).length
		for(var y=0;y<(longitud-2);y++){
			var oniichan=$(tablero)[y]
			var oniAtr=$(oniichan).attr("src")
			bro1=$(hermanosFila)[y]
			bro2=$(hermanosFila)[y+1]
			var hermanosSRC1=$(bro1).attr("src")
			var hermanosSRC2=$(bro2).attr("src")

			if((oniAtr==hermanosSRC1)&&(oniAtr==hermanosSRC2)){
				$(oniichan).addClass("eliminar")
				$(bro1).addClass("eliminar")
				$(bro2).addClass("eliminar")				
				var brother=true
				while(brother){
						var broNext=$(hermanosFila)[y+2]
				var broNextAtr=$(broNext).attr("src")	
					if((oniAtr==broNextAtr)&&(y!=(longitud-2))){
					$(broNext).addClass("eliminar")
					y++
				}else{brother=false}
				}						
			}
		}	
	}		


/*
function borrar(){
	$(".eliminar").remove()
	$(".eliminar").removeClass("eliminar")		
}
*/



