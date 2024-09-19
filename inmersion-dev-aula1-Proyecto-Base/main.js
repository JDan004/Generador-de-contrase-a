let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar')
let contrasenia = document.getElementById('contrasena');

const mayusculas = /[A-Z]/;
const minusculas = /[a-z]/;
const numeros = /[0-9]/;
const especiales = /[!@#$%^&*()]/;

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar (){

    let numeroDigitado = parseInt(cantidad.value);
    let password = "";

    if (numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }else{
        for(let i=0; i < numeroDigitado; i++){

            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]; 
            console.log(caracterAleatorio)
    
            password+=caracterAleatorio;
    
        }

    }

    contrasenia.value = password;
    
    if(mayusculas.test(contrasenia.value) && minusculas.test(contrasenia.value) && numeros.test(contrasenia.value) && especiales.test(contrasenia.value)){
        alert("Tu contraseña es muy segura");
    }else if (mayusculas.test(contrasenia.value) && minusculas.test(contrasenia.value) && numeros.test(contrasenia.value)){
        alert("Tu contraseña es poco segura, debe contener carateres especiales");
    }else{
        alert("Tu contraseña no es segura");
    }

}

function limpiar (){

    cantidad.value = '';
    contrasenia.value = '';
}