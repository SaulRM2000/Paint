var grosorLinea = document.getElementById("grosor");
var colorLinea = document.getElementById("color");    // color a la linea
var area = document.getElementById('area_dibujo');
var lienzo = area.getContext("2d");

 /*area de variables*/   
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
var Click_activo = 0;             // estado del click

document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// Funcion para mousedown
function presionarMouse(evento)
{
  Click_activo = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento)
{
  Click_activo = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}


// Funcion para mousemove
function dibujarMouse(evento)
{
  if (Click_activo == 1)  // solo se dibujara si esta el click del mouse presionado
  { 
      
    dibujarLinea(colorLinea.value, x, y, evento.layerX, evento.layerY, grosorLinea.value);
  }
    x = evento.layerX;
    y = evento.layerY;
}



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, grosor)
{
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)

  lienzo.lineWidth = grosor;                // Ancho de la linea

  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}
