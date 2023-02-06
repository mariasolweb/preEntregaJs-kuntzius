 /***SIMULADOR DE COMPRAS***/
 //primero hola bienvenido a Mundo Bebe, 

 alert("Bienvenido a Mundo Bebe");

 let productos = prompt("Ingrese el producto que desea comprar: body / carrito / sillita (o fin para salir)");

 let productoUno = 3000;
 let productoDos = 41000;
 let productoTres = 32000;

 let body = "body";
 let carrito = "carrito";
 let sillita = "sillita";

while (productos != "fin") {

switch(productos) {

    case body:
        alert("El valor de su compra es: $ " + productoUno);
        break;

    case carrito:
        alert("El valor de su compra es: $ " + productoDos);
        break;

    case sillita:
        alert("El valor de su compra es: $ "+ productoTres);
        break;

default: alert("lo siento, ese producto no es valido.")


}

let cuota = parseInt(prompt("Por favor indique el numero de cuotas a abonar: 1 / 3 / 6 "))

let interes = 1000;

if ( productos == "body") {
{      function totalCompra1 (productoUno, cuota) {
        return (productoUno / cuota) + (interes * cuota);
    }

    let valorTotalBody = totalCompra1();
    alert("El total de su compra es de $ "+ valorTotalBody + ", gracias por elegirnos!");
}} else if  (productos == "carrito") {
    function totalCompra2 (productoDos, cuota) {
        return (productoDos, cuota) + (interes * cuota);
    }
    let valorTotalCarrito = totalCompra2();
    alert("El total de su compra es de $ "+ valorTotalCarrito + ", gracias por elegirnos!");

} else if (productos = "sillita") {
    function totalCompra3 (productoTres, cuota) {
        return (productoTres, cuota) + (interes * cuota);
    }
    let valorTotalSillita = totalCompra3();
    alert("El total de su compra es de $ "+ valorTotalSillita + ", gracias por elegirnos!");
}


} 

