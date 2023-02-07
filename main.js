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

     switch (productos) {

         case body:
             alert("El valor del body es: $ " + productoUno);
             break;

         case carrito:
             alert("El valor del carrito es: $ " + productoDos);
             break;

         case sillita:
             alert("El valor de la sillita es: $ " + productoTres);
             break;

         default:
             alert("lo siento, ese producto no es valido.")
     }

     let cuota = parseInt(prompt("Por favor indique el numero de cuotas a abonar: 1 / 3 / 6 "));

     let interes = 1000;
     
     function totalCompra(producto, cuota) {
        return (producto / cuota) + (interes * cuota);}

     if (productos == "body") {
           let valorTotalBody = totalCompra(3000,cuota);
            alert("El total de su compra es de $ " + valorTotalBody + ", gracias por elegirnos!");
            productos = "fin";            
         }  else if (productos == "carrito") {
          let valorTotalCarrito = totalCompra(41000, cuota);
         alert("El total de su compra es de $ " + valorTotalCarrito + ", gracias por elegirnos!");
         productos = "fin";

     } else if (productos = "sillita") {
         let valorTotalSillita = totalCompra(32000, cuota);
         alert("El total de su compra es de $ " + valorTotalSillita + ", gracias por elegirnos!");
         productos = "fin";

     }
     }


