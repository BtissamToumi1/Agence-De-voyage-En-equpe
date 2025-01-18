//variables
const nominput=document.querySelector("#exampleInputNom1");
const prenominput=document.querySelector("#exampleInputPrenom1");
const telephoneinput=document.querySelector("#exampleInputTelephone1");
const emailinput=document.querySelector("#exampleInputEmail1");
const buutton=document.querySelector(".btn");
const contactlist=document.querySelector("#contact-list");
buutton.addEventListener("click",function(event){
      
    event.preventDefault();
     if(validateForm()){
  if(nominput.value=="" && prenominput.value=="" && telephoneinput.value==""){
    alert("Entrez any input");
  }else{
    // recuperation des donnes de nom
    const contactlistRow=document.createElement("tr");
    const newNom=document.createElement("th");
    newNom.innerHTML=nominput.value;
    contactlistRow.appendChild(newNom);
    // recuperation des donnes de prenom
    const newPrenom=document.createElement("th");
    newPrenom.innerHTML=prenominput.value;
    contactlistRow.appendChild(newPrenom);
     // recuperation des donnes de telephone
     const newTelephone=document.createElement("th");
     newTelephone.innerHTML=telephoneinput.value;
     contactlistRow.appendChild(newTelephone);
     contactlist.appendChild(contactlistRow);

      // Vider les champs après ajout
      nominput.value = "";
      prenominput.value = "";
      telephoneinput.value = "";
      emailinput.value= "";
  }
  }
// else{
//        alert("le formulaire n'est pas valide")
//    }
}); 
// Fonction de validation
buutton.addEventListener("click",validateForm());
function validateForm() {
       // Sélectionner les éléments du formulaire
       const nom = document.getElementById("exampleInputNom1").value;
       console.log(nom);
       const prenom = document.getElementById("exampleInputPrenom1").value;
       const telephone = document.getElementById("exampleInputTelephone1").value;
 
       let isValid = true;
 
       // Réinitialiser les messages d'erreur précédents
       document.querySelectorAll(".error").forEach((element) => {
         element.style.display = "none";
       });
 
       // Vérifier si les champs sont vides
       if (nom === "") {
              document.getElementById("nom-error").style.display= "block"; // Afficher l'erreur
              isValid = false;
            } 
        if (prenom === "") {
                document.getElementById("prenom-error").style.display = "block";
                isValid = false;
              } 
        if (telephone === "") {
                document.getElementById("telephone-error").style.display = "block";
                isValid = false;
              } 
         //  Verfier le format du email
       if (emailinput=== "") {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
      }
 //      const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
 //      if ( !emailinput== "" && !emailRegex.test(telephone)) {
 //        document.getElementById("email-format-error").style.display = "block";
 //        isValid = false;
 // }               
            return isValid;
        }