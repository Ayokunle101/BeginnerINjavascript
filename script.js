var firstName,lastName,Age,Department,UniverSity;

firstName = document.getElementById("fn").value ;
lastName = document.getElementById("ln").value ;
Age = document.getElementById("ag").value ;
Department = document.getElementById("dp").value ;
UniverSity = document.getElementById("un").value ;

var button = document.getElementById("mybtn"); 
button.addEventListener("click",() => {
alert("my name is" + " " + firstName + " " + lastName + " " + "i am " + Age + "years old, from the department of" + " " +
Department + " " + UniverSity)
})

































