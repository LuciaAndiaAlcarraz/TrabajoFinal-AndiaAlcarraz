
function validar() {

    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;

    if (correo == "") {
        document.getElementById('texto').innerHTML = "*Ingrese un correo"
        document.getElementById('texto').style.color = "red";
        return false;
    } else if (clave == "") {
        document.getElementById('textoP').innerHTML = "* Ingrese una contraseña"
        document.getElementById('textoP').style.color = "red";
        return false;
    }


    if (correo == "lucia@gmail.com" && clave == "809503") {

        window.location.href = "user/usuario.html";
        return false;
    } else {

        document.getElementById('invalido').innerHTML = "El usuario y contraseña son incorrectos"
        document.getElementById('invalido').style.color = "red";
        return false;
    }

}


