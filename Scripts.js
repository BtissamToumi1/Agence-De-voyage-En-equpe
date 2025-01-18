//variables
const nominput=document.querySelector("#exampleInputNom1");
const prenominput=document.querySelector("#exampleInputPrenom1");
const telephoneinput=document.querySelector("#exampleInputTelephone1");
const emailinput=document.querySelector("#exampleInputEmail1");
const buutton=document.querySelector(".btn");
const contactlist=document.querySelector("#contact-list");
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
               
            return isValid;
        }