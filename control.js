// Below function Executes on click of login button.
function validar(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let hayArroba = username.search("@");

    if ( hayArroba == -1) {
        alert ("Falta el arroba");
        
    }
    else 
        if (password == null || password == "") {
            alert ("La contraseña no contiene caracteres");
            
        }
        else {
            alert("Formulario enviado con éxito");
           
        }

    
}