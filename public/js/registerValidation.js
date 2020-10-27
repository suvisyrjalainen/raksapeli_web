function send_registerData(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    function validate (){
        var password = document.getElementById("password").value;
        var passwordConfir = document.getElementById("passwordConfir").value;

        if(password != passwordConfir){
            alert("Salasanaa ei ole kirjoitettu oikein");
            return false;
        }
        return true;
    }

    console.log(name);
    console.log(email);
    console.log(validate())

}
