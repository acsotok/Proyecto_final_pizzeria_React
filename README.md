Deploy: https://proyecto-final-pizzeria-react-nvz49hrjn-angelica-sotos-projects.vercel.app

1.- Se crea una variable global llamada token que guarda el token si la respuesta fue exitosa por JWT

2.- Se usa UserContext para implementar un metodo que elimine el token y el email del estado

3.- En el UserContext, implementa un método para obtener el perfil del usuario autenticado consumiendo la ruta /api/auth/me

4.- Tanto la página de Login como la de Register, deben implementar los métodos creados en UserContext para acceder al sistema.

5.- En la pagina profile, se muestra el email autenticado y el boton cerrar sesion que elimina el token del localStorage

6.- El boton logout del Navbar cierra sesion del usuario

7.- En Cart.js.jsx , implementar metodo para enviar carrito de compra al backend, consumiendo la ruta: /api/checkouts

8.- En la pagina Cart.jsx, muestra un mensaje de exito cuando se haya realizado la compra
