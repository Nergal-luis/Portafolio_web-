function datos(e){
    e.preventDefault();

    var users=["gato@correo.com","perro@correo.com","tomate@correo.com"];
var password=["A1234","B1234","C1234"];

var correo= document.querySelector("#mail").value;
var pass= document.querySelector("#password").value;

var idcorreo = document.querySelector("#box1");
var idpass = document.querySelector("#box2");
var    contador = 0;

    for(var i=0;i<=2;i++){

    /*----------------------condicional------------------------*/

    if(correo == users[i]){

		idcorreo.innerHTML ="<p> Bienvenido </p>";


		if(pass == password[i]){

			return

		}else{

			idpass.innerHTML ="<p> Has olvidado tu contraseña?</p>";
			return
		}


	}
 /*-----------------------------------------------------*/

}
	idcorreo.innerHTML="<p> correo invalido </p>";
	 document.getElementById("cuenta").style.fontStyle="italic";
        document.getElementById("cuenta").style.fontSize="17px";
}

var boton =document.querySelector("#boton");
boton.addEventListener("click",datos);
