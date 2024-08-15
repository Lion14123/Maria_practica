document.getElementById('categoria').addEventListener('change',temaSeleccionado);

function temaSeleccionado(){
    document.getElementById('palabra').value=null;
    document.getElementById('mensaje').value=null;
    document.getElementById('foto').innerHTML="¡¡Resultado!!";
    capas=document.getElementsByTagName("article");

    for(var i=0; i<capas.length;i++){
        capas[i].style.display="none"; 
    }
    var articulo=document.getElementById('categoria').value;
    document.getElementById(articulo).style.display="block";
}

var fotografias=function(nombreFoto){
    document.getElementById("foto").src="img/"+nombreFoto+".png";
    
}
var imagenes=function(imagenFoto){
    document.getElementById("foto").src="img/"+imagenFoto+".png";
    
}

function cambiarArchivo(opcion){
    var objeto=document.getElementById("enlaceEstilo");
    objeto.href=opcion;
}
function datosSan(){
    var palabra=document.getElementById('palabra').value;
    var mensaje=document.getElementById('mensaje').value;
    datos='Cadena'+palabra+ mensaje;
    document.getElementById('resultado').innerHTML=datos; 
}


document.getElementById('cumple').addEventListener('change',cumpleSeleccionado);

function cumpleSeleccionado(){
    document.getElementById('titulo').value=null;
    document.getElementById('deseo').value=null;
    document.getElementById('resultado').innerHTML="¡¡Resultado!!";
    capas=document.getElementsByTagName("article");

    for(var i=0; i<capas.length;i++){
        capas[i].style.display="none"; 
    }
    var articulo=document.getElementById('cumple').value;
    document.getElementById(articulo).style.display="block";
}

var bordes=function(nombreFotos){
    document.getElementById("fotos").src="img/"+nombreFotos+".png";
    
}
var imagenesCumple=function(imagenFotos){
    document.getElementById("fotos").src="img/"+imagenFotos+".png";
    
}

function cambiarArchivos(opciones){
    var objeto=document.getElementById("enlaceEstilo");
    objeto.href=opciones;
}
function datosCumple(){
    var titulo=document.getElementById('titulo').value;
    var deseo=document.getElementById('deseo').value;
    dato='Cadena'+titulo+ deseo;
    document.getElementById('resultado').innerHTML=dato; 
}


document.getElementById('navidad').addEventListener('change',navidadSeleccionado);

function navidadSeleccionado(){
    document.getElementById('Titulo').value=null;
    document.getElementById('Desc').value=null;
    document.getElementById('resultado').innerHTML="¡¡Resultado!!";
    capas=document.getElementsByTagName("article");

    for(var i=0; i<capas.length;i++){
        capas[i].style.display="none"; 
    }
    var articulo=document.getElementById('cumple').value;
    document.getElementById(articulo).style.display="block";
}

var borde=function(nombresfotos){
    document.getElementById("Foto").src="img/"+nombresfotos+".png";
    
}
var imagenesNavidad=function(imagenesFotos){
    document.getElementById("Foto").src="img/"+imagenesFotos+".png";
    
}

function cambiarArchivos(opciones){
    var objeto=document.getElementById("enlaceEstilo");
    objeto.href=opciones;
}
function datosCumple(){
    var Titulo=document.getElementById('Titulo').value;
    var Desc=document.getElementById('Desc').value;
    dato='Cadena'+Titulo+ Desc;
    document.getElementById('resultado').innerHTML=dato; 
}

