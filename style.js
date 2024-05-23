var nameError = document.getElementById("contact-name");

function validatename(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML="please fill name"
        return false;
    }
}





