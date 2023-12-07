// let jour1 = "lundi"
// let jour2 = "mardi"
// let jour3 = "mercredi"
// let jour4 = "jeudi"
// let jour5 = "vendredi"
// let jour6 = "samedi"
// let jour7 = "dimanche"

let jourEntree = prompt('Entrer jour de la semaine');
switch (jourEntree){
    case "lundi":
        console.log("c'est lundi");
    break;
    
    case "mardi":
        console.log("c'est mardi");
    break;

    case "mercredi":
        console.log("c'est mercredi");
    break;
    
    case "jeudi":
        console.log("c'est jeudi");
    break;
    
    case "vendredi":
        console.log("c'est vendredi");
    break;
    
    case "samedi":
        console.log("c'est samedi");
    break;
    
    case "dimanche":
        console.log("c'est dimanche");
    break;
    
    default:
        console.log("Jour non valide");
    

    
}

// correction

let jour = prompt("Entrez un jour de la semaine").toLowerCase()

switch(jour){

    case "lundi" :
    console.log("c'est Lundi");
    break;

    case "mardi" :
    console.log("c'est mardi");
    break;

    case "mercredi" :
    console.log("c'est mercredi");
    break;

    case "jeudi" :
    console.log("c'est jeudi");
    break;

    case "vendredi" :
    console.log("c'est vendredi");
    break;

    case "samedi" :
    console.log("c'est samedi");
    break;

    case "dimanche" :
    console.log("c'est diamnche");
    break;

    default:
        console.log("le jour de la semaine n'est pas reconnu")
}

let jour = prompt("Entrez un jour de la semaine").toLowerCase()

switch(true){

    case (jour) == "lundi" :
    console.log("c'est Lundi");
    break;

    case (jour) >= "mardi" :
    console.log("c'est mardi");
    break;

    case (jour) == "mercredi" :
    console.log("c'est mercredi");
    break;

    case (jour) == "jeudi" :
    console.log("c'est jeudi");
    break;

    case (jour) == "vendredi" :
    console.log("c'est vendredi");
    break;

    case (jour) == "samedi" :
    console.log("c'est samedi");
    break;

    case (jour) == "dimanche" :
    console.log("c'est diamnche");
    break;

    default:
        console.log("le jour de la semaine n'est pas reconnu")
}