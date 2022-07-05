function validar() {
    // var es para defininir una variable para todas las funciones
    // let es solo para la funcion donde se declara


    //
    var nombre = document.formulario.txt_nombre.value;
    var apellidoPaterno = document.formulario.txt_apellidoPaterno.value;
    var apellidoMaterno = document.formulario.txt_apellidoMaterno.value;
   // let descripcion = document.formulario.txa_descripcion.value;
   // let pais = document.formulario.txt_pais.value;
   // let precio = document.formulario.txt_precio.value;
    var rut = document.formulario.txt_rut.value
    var telefono = document.formulario.txt_telefono.value;
    //TabNine.tabnine-vscode


    if (nombre.length <=3 )
    {
        alert("Nombre debe tener mas de 3 caracteres");
        document.formulario.txt_nombre.focus();
        return false;
    }

    if (apellidoPaterno.length <=3 )
    {
        alert("Apellido Paterno debe tener mas de 3 caracteres");
        document.formulario.txt_apellidoPaterno.focus();
        return false;
    }

    if (apellidoMaterno.length <=3)
    {
        alert("Apellido Materno debe tener mas de 3 caracteres");
        document.formulario.txt_apellidoMaterno.focus();
        return false;  
    }

    if(rut.length < 9 || rut.length > 10 || rut.indexOf('-') < 0 || rut.indexOf('.') > 1) {
        alert("Rut debe ser de 9 o 10 cararteres de largo, con guión y sin puntos")
        document.formulario.txt_rut.focus();
        return false;
    }


    if ((!telefono.startsWith(9) || telefono.length != 9 || telefono.indexOf('-')>1 || telefono.indexOf('+')>1))
     {
        alert("Telefono debe tener 9 numeros sin - ni +");
        document.formulario.txt_telefono.focus();
        return false;
    }



    alert("Datos ingresados correctamente: " +
        "\nNombre: "+ nombre +
        "\nApellido Paterno: "+ apellidoPaterno +
        "\nApellido Materno: "+ apellidoMaterno +
        "\nRut: "+ rut +
        "\nTeléfono: "+ telefono 
    );

}