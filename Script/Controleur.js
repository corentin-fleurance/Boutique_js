//Script permettant de charger les différents catalogue
test();
var div_boutique = document.querySelector(".boutique");
var div_panier = document.querySelector(".container_panier");
var p_tot_panier = document.querySelector("#total_panier");
var tot_panier = 0;
console.log(div_panier)

function charger_catalogue(catalogue_a_afficher, display_mode) {
    catalogue_a_afficher.forEach(item => {
        //Création de la div produit
        var div_produit = document.createElement("div");
        div_produit.setAttribute("class","produit "+item.categorie);
        div_produit.setAttribute("id",item.id)
        div_produit.style.display  = display_mode
        div_boutique.appendChild(div_produit)
        //Création et ajout de l'image
        var img_produit = document.createElement("img");
        img_produit.setAttribute("class","img_produit");
        img_produit.setAttribute("src",item.img);
        div_produit.appendChild(img_produit);
        //Création et ajout de la sous-div contenant les infos
            var div_info_produit = document.createElement("div");
            div_info_produit.setAttribute("class","info_quantite");
            div_produit.appendChild(div_info_produit);
            //Création et ajout champs nom du priduit
            var p_nom_produit = document.createElement("p");
            p_nom_produit.setAttribute("class","nom_produit");
            p_nom_produit.innerHTML = item.name;
            div_info_produit.appendChild(p_nom_produit);
            //Création et ajout img logo + 
            var img_logo_plus = document.createElement("img");
            img_logo_plus.setAttribute("class","btn_plus "+item.id);
            img_logo_plus.setAttribute("src","Style/logo_plus.png");
            div_info_produit.appendChild(img_logo_plus);
            //Création et ajout champs quantité produit
            var p_selection = document.createElement("p");
            p_selection.setAttribute("class","selection "+item.id);
            p_selection.innerHTML = "0";
            div_info_produit.appendChild(p_selection);
            //Création et ajout img logo -
            var img_logo_moins = document.createElement("img");
            img_logo_moins.setAttribute("class","btn_moins "+item.id);
            img_logo_moins.setAttribute("src","Style/logo_moin.png");
            div_info_produit.appendChild(img_logo_moins);
        //Création et ajout du prix
        var div_prix = document.createElement("p");
        div_prix.setAttribute("class","prix_produit "+item.id);
        div_prix.innerHTML = item.prix+" €";
        div_produit.appendChild(div_prix);
        //Création et ajout bouton ajouter panier
        var div_ajouter_panier = document.createElement("div");
        div_ajouter_panier.setAttribute("class","ajouter_panier "+item.id);
        div_produit.appendChild(div_ajouter_panier);
        //Création et ajout img logo_panier
        var img_logo_panier = document.createElement("img");
        img_logo_panier.setAttribute("class","logo_panier")
        img_logo_panier.setAttribute("src","Style/ajouter_panier.png")
        div_ajouter_panier.appendChild(img_logo_panier);
    });
}


function ajouter_panier(img, name, prix, id, quantite,){
    //Création de la div produit
    div_achat = document.createElement("div");
    div_achat.setAttribute("class","achat "+id);
    div_panier.appendChild(div_achat);
        //Création et ajout de l'image
        var img_achat = document.createElement("img");
        img_achat.setAttribute("class","img_produit_panier");
        img_achat.setAttribute("src",img);
        div_achat.appendChild(img_achat);
        //Création et ajout champs nom du priduit
        var p_nom_achat = document.createElement("p");
        p_nom_achat.setAttribute("class","nom_produit_panier");
        p_nom_achat.innerHTML = name;
        div_achat.appendChild(p_nom_achat);
        //Création et ajout de la quantité
        var p_quantite = document.createElement("p");
        p_quantite.setAttribute("class","quantite_panier");
        p_quantite.innerHTML = quantite;
        div_achat.appendChild(p_quantite);
        //Création et ajout du signe multiplié
        var p_multiplie = document.createElement("p");
        p_multiplie.setAttribute("class","multiplie");
        p_multiplie.innerHTML = "x";
        div_achat.appendChild(p_multiplie);
        //Création et ajout du prix
        var p_prix = document.createElement("p");
        p_prix.setAttribute("class","prix_produit_panier");
        p_prix.innerHTML = prix;
        div_achat.appendChild(p_prix);
        //Création et ajout du bouton suppression
        var img_poubelle = document.createElement("img");
        img_poubelle.setAttribute("class", "supression_produit");
        img_poubelle.setAttribute("src","Style/poubelle.png");
        div_achat.appendChild(img_poubelle);
    console.log(div_achat)
}


function charger_tous_les_catalogues() {
    charger_catalogue(catalogue_pdt, "none")
    charger_catalogue(catalogue_voiture, "initial")
    //charger_catalogue(catalogue_informatique, "none")
    //charger_catalogue(catalogue_oiseau, "none")
    //charger_catalogue(catalogue_peluche, "none")
}

function afficher_catalogue(catalogue_a_afficher) {
    var tableau_produit = document.querySelectorAll(".produit."+catalogue_a_afficher);
    tableau_produit.forEach(element => {
        element.style.display = 'initial'
    });
}

function cacher_catalogue(catalogue_a_cacher) {
    var tableau_produit = document.querySelectorAll(".produit."+catalogue_a_cacher);
    tableau_produit.forEach(element => {
        element.style.display = 'none'
    });
}

//On charge les catalogue
charger_tous_les_catalogues();

//Listener qui permet de changer les catalogues en fonction des clics sur les catégories
var cat = document.querySelectorAll(".catalogue");
console.log(cat)
cat.forEach(element => {
    element.addEventListener('click', function() {
        console.log("Vous m'avez cliqué !");
        var id_div_clicked = this.getAttribute('id');
        console.log(id_div_clicked)
        switch (id_div_clicked) {
            case "voiture":
                afficher_catalogue("voiture");
                cacher_catalogue("pdt");
                cacher_catalogue("informatique");
                cacher_catalogue("oiseau");
                cacher_catalogue("peluche");
                break;
            case "pdt":
                afficher_catalogue("pdt");
                cacher_catalogue("voiture");
                cacher_catalogue("informatique");
                cacher_catalogue("oiseau");
                cacher_catalogue("peluche");
                break;
            case "informatique":
                afficher_catalogue("informatique");
                cacher_catalogue("pdt");
                cacher_catalogue("voiture");
                cacher_catalogue("oiseau");
                cacher_catalogue("peluche");
                break;
            case "oiseau":
                afficher_catalogue("oiseau");
                cacher_catalogue("pdt");
                cacher_catalogue("voiture");
                cacher_catalogue("informatique");
                cacher_catalogue("peluche");
                break;
            case "peluche":
                afficher_catalogue("peluche");
                cacher_catalogue("pdt");
                cacher_catalogue("voiture");
                cacher_catalogue("oiseau");
                cacher_catalogue("informatique");
                break;
            default:
                afficher_catalogue("voiture");
                cacher_catalogue("pdt");
                cacher_catalogue("informatique");
                cacher_catalogue("oiseau");
                cacher_catalogue("peluche");
                break;
        }
        ajouter_quantite();
        console.log("fini")
    }, false);  
});


//Augmenter le nombre de la sélection

document.querySelectorAll(".btn_plus").forEach(btn =>{
    btn.addEventListener('click', function() {
        id_prod = this.parentNode.parentNode.getAttribute("id");
        var quantite_actuelle = Number(document.querySelector(".selection."+id_prod).innerHTML);
        if (quantite_actuelle === 9) {
            alert("Vous ne pouvez pas commander plus de 9 articles.")
        }
        else{
            if (quantite_actuelle === 0) {
                console.log(quantite_actuelle)
                document.querySelector(".ajouter_panier."+id_prod).style.opacity = "1";
            }
            document.querySelector(".selection."+id_prod).innerHTML =  quantite_actuelle + 1;

        };
    });
});


//Diminuer le nombre de la sélection
document.querySelectorAll(".btn_moins").forEach(btn =>{
    btn.addEventListener('click', function() {
        id_prod = this.parentNode.parentNode.getAttribute("id");
        quantite_actuelle = Number(document.querySelector(".selection."+id_prod).innerHTML)
        console.log(quantite_actuelle);
        if (quantite_actuelle > 0) {
            if (quantite_actuelle === 1) {
                console.log(quantite_actuelle)
                document.querySelector(".ajouter_panier."+id_prod).style.opacity = "0.25";
            }
            document.querySelector(".selection."+id_prod).innerHTML =  quantite_actuelle - 1;
        }
    });
});


document.querySelectorAll(".ajouter_panier").forEach(btn =>{
    btn.addEventListener('click', function() {
        var div_prod = this.parentNode
        id_prod = div_prod.getAttribute("id");
        console.log(id_prod)
        console.log(div_prod)
        item_img = div_prod.querySelector(".img_produit").getAttribute("src");
        item_name = div_prod.querySelector(".nom_produit").innerHTML;
        item_prix = div_prod.querySelector(".prix_produit").innerHTML
        item_quantite = Number(div_prod.querySelector(".selection."+id_prod).innerHTML)
        if (div_panier.querySelector(".achat."+id_prod) === null) {
            ajouter_panier(item_img,item_name,item_prix,id_prod,item_quantite)
            div_prod.querySelector(".selection."+id_prod).innerHTML = 0
            document.querySelector(".ajouter_panier."+id_prod).style.opacity = "0.25";
            //On change le total du panier : 
            item_prix = item_prix.replace(" €","") //On enlève le signe €
            tot_panier = tot_panier + Number(item_prix) * item_quantite
            p_tot_panier.innerHTML = tot_panier + " €"
            //Instentiation du bouton supprimer
            bouton_supp = document.querySelectorAll(".supression_produit")
            console.log("on arrive au bouton")
            
            bouton_supp.forEach(btn =>{
                body.addEventListener('click', event => {
                    if (event.target === btn) {
                    console.log("ca_marceh")
                    };
                });
                btn.addEventListener('click', function() {
                    console.log("rentré2")
                    console.log(this)
                    console.log(bouton_supp)
                    btn.parentNode.remove()
                    bouton_supp = document.querySelectorAll(".supression_produit")
                    //On change la valeur du panier
                    var prix_article = btn.parentNode.querySelector(".prix_produit_panier").innerHTML
                    var quantite_article = btn.parentNode.querySelector(".quantite_panier").innerHTML
                    console.log("Total Panier avant:"+tot_panier)
                    console.log("Total_article:"+(Number(prix_article.replace(" €",""))) * (Number(quantite_article)))
                    tot_panier = tot_panier - (Number(prix_article.replace(" €",""))) * (Number(quantite_article))
                    if (tot_panier < 0) {
                       tot_panier = 0; 
                    }
                    p_tot_panier.innerHTML = tot_panier + " €"
                    console.log("Total Panier après:"+tot_panier)
                    return 0;
                })
            });
        }else{
            var quantite_panier = document.querySelector(".achat."+id_prod).querySelector(".quantite_panier").innerHTML
            if (Number(quantite_panier) + item_quantite >= 9) {
                alert("Vous ne pouvez pas commander plus de 9 articles")
            }
            else{
                document.querySelector(".achat."+id_prod).querySelector(".quantite_panier").innerHTML = Number(quantite_panier) + item_quantite;
                //On change le total du panier : 
                item_prix = item_prix.replace(" €","") //On enlève le signe €
                tot_panier =  tot_panier + Number(item_prix) * item_quantite
                p_tot_panier.innerHTML = tot_panier + " €"
                div_prod.querySelector(".selection."+id_prod).innerHTML = 0;
                document.querySelector(".ajouter_panier."+id_prod).style.opacity = "0.25";
            }
        }
    });
});



console.log(document.querySelector(".c_marcherapa"))


console.log("fin du programme");
