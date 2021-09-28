var firstName,lastName,Age,Department,UniverSity;

firstName = document.getElementById("fn").value ;
lastName = document.getElementById("ln").value ;
Age = document.getElementById("ag").value ;
Department = document.getElementById("dp").value ;
UniverSity = document.getElementById("un").value ;

function Details() {
    document.getElementById("fdetails").innerHTML= 
    "my name is" + firstName + lastName + "i am" + Age + "from the department of" + Department + UniverSity ;
}















