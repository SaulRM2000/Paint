var borrador = document.getElementById("borrador");
var grosorLinea = document.getElementById("grosor");  // grueso de la linea 
var colorLinea = document.getElementById("color");    // color a la linea
var area = document.getElementById('area_dibujo');    // se trae el canvas
var lienzo = area.getContext("2d");                   // contexto del canvas

 /*area de variables*/   
var x;                      // guardar coordenada en X
var y;                     // guardar coordenada en Y
var Click_activo = false;       // estado del click

/*Variables de borrador*/
var Modo_borrador = false      
var BorradorClick = false;    // estado del borrador

/*Funciones para dibujar*/
area.addEventListener("mousedown",presionarMouse);  //cuando presionas click
area.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
area.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

/*Funciones del borrador*/
borrador.addEventListener("click",modoBorrador_True);
area.addEventListener("mouseout",modoBorrador_False);
area.addEventListener("mousedown",borradorClick_True);
area.addEventListener("mouseup",borradorClick_False);

function modoBorrador_True(evento)
{
  Modo_borrador = true;
  x = evento.layerX;
  y = evento.layerY;
}

function modoBorrador_False(evento)
{
  Modo_borrador = false;
  x = evento.layerX;
  y = evento.layerY;
}

function borradorClick_True(evento)
{
  BorradorClick = true;
  x = evento.layerX;
  y = evento.layerY;
}

function borradorClick_False(evento)
{
  BorradorClick = false;
  x = evento.layerX;
  y = evento.layerY;
}



// Evento mousedown
function presionarMouse(evento)
{
  Click_activo = true;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Evento mouseup
function soltarMouse(evento)
{
  Click_activo = false;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}


// Evento mousemove
function dibujarMouse(evento)
{
  if(Modo_borrador == true && BorradorClick == true)
  {
    dibujarLinea("white", x, y, evento.layerX, evento.layerY, grosorLinea.value);
  } 

  else if (Click_activo == true)  // solo se dibujara si esta el click del mouse presionado
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

/* -=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-.
*                                      * -----------------------------------------------------------*| 
*       Version para celulares         *                   | | | | | | | | |
*                                      *                   V V V V V V V V V
* .-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=. */


/*area de variables*/  
var xm;
var ym;
var Touch_activo = 0;  

area.addEventListener("touchstart",presionarPantalla);  //cuando la pantalla es tocada
area.addEventListener("touchend",soltarPantalla);       //cuando dejas de presionar la pantalla
area.addEventListener("touchmove",dibujarTouch);    //cuando mueves el dedo en la pantalla

function presionarPantalla(evento)
{
  Touch_activo = 1;
  xm = evento.touches[0].clientX;
  ym = evento.touches[0].clientY;
}

function soltarPantalla(evento)
{
  Touch_activo = 0;
  xm = evento.touches[0].clientX;
  ym = evento.touches[0].clientY;
}

function dibujarTouch(evento)
{
  if (Touch_activo == 1)  
  { 
      
    dibujarLinea(colorLinea.value, xm, ym, evento.touches[0].clientX, evento.touches[0].clientY, grosorLinea.value);
  }
  xm = evento.touches[0].clientX;
  ym = evento.touches[0].clientY;
}








