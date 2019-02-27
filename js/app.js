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
	var images=$(".col-1 .elemento")
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
				console.log(oniichan)
				console.log(bro1)
				console.log(bro2)
				$(oniichan).addClass("eliminar")
				$(bro1).addClass("eliminar")
				$(bro2).addClass("eliminar")
				
				
				var brother=true
				while(brother){
						var broNext=$(hermanos)[i+2]
				var broNextAtr=$(broNext).attr("src")	
					if((oniAtr==broNextAtr)&&(i!=(longitud-3))){
					console.log(broNext)
					$(broNext).addClass("eliminar")
					i++
				}else{brother=false}
				}
				
						
			}

		}
		
	
	
}
	


