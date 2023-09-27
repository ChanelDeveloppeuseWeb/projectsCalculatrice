function calculator(value) {
  // code pour supprimer tous les chiffres entres
  if (value == "c") {
    document.getElementById("worspace_operation").innerHTML = "";
    value = "";
    document.getElementById("worspace_result").innerHTML = "";
  }

  // code pour supprimer chaque chiffre entres

  if (value == "d") {
    let number = document.getElementById("worspace_operation").innerHTML;

    console.log(number, typeof number);
    document.getElementById("worspace_operation").innerHTML = number.substring(
      0,
      number.length - 1
    );
    value = "";
  }
  // code pour afficher uniquement le resultat
  if (value == "=") {
    document.getElementById("worspace_operation").innerHTML = "";
  value= "";

  }else{
 // code pour afficher tous les nombres sur une seule ligne
 document.getElementById("worspace_operation").innerHTML += value;

 // code pour afficher le resultat

 let result = document.getElementById("worspace_operation");

 document.getElementById("worspace_result").innerHTML =
   result.innerHTML != "" ? eval(result.innerText) : "";
  }
 
}
