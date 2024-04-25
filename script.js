document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var ciudad = document.getElementById('ciudad').value;
    var pais = document.getElementById('pais').value;
    var estado = document.getElementById('estado').value;
    console.log('Nombre: ' + nombre);
    console.log('Correo Electrónico: ' + email);
    console.log('Teléfono: ' + telefono);
    console.log('Dirección: ' + direccion);
    console.log('Ciudad: ' + ciudad);
    console.log('País: ' + pais);
    console.log('Estado/Provincia: ' + estado);
});
