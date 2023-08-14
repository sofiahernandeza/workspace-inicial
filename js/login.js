document.getElementById("button").addEventListener("click", function() {
    event.preventDefault();
    let formusuario= document.getElementById("usurio");
    let contrasena= document.getElementById('contasenia');

    if ((formusuario.value === "") || (contrasena.value === "")) {
        alert('Debes completar todos los campos para poder ingresar');
    } else {
        window.location.href = 'https://sofiahernandeza.github.io/workspace-inicial/';
    } 
   
})