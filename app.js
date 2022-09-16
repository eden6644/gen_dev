var dev_Gen = function(){
    var bon_chiffre = Math.floor(Math.random()*11)
    console.log(bon_chiffre);  
    var chiffre_user = parseInt(prompt("entrez un chiffre: "))
    while(chiffre_user != bon_chiffre){
    
        if (chiffre_user > bon_chiffre) {
            chiffre_user = parseInt(prompt("c\'est en dessous. retry: "))
        } 
        else if(chiffre_user < bon_chiffre) {
            chiffre_user = parseInt(prompt("c\'est au dessus. retry: "))
        }
    }
    alert("wow")
    var restart = window.confirm("bravo. recommencer?")
    console.log("restart =  "+restart);
            if (restart == true) {
                dev_Gen()
            } else {
                alert("le programme c'est arrété.")
                return
            }
}
dev_Gen()