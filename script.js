let chaptersObj = {
 chapt1:{
    subtitle: "Obstacle",
    text: "Vous êtes dans un monde parallèle. Vous commencez à marcher et vous voyez une crevasse.",
    image: (document.querySelector('img').src='assets/image/crevasse.jpg'),
    options:[{text:"Sauter", action: goToChapter("chapter2")}, {text:"Contourner", action: goToChapter("chapiter1M")}]
},
chapt1M:{
    subtitle: "Mort",
    text: "En contournant la crevasse, une créature vous attaque et vous dévore.",
    image: (document.querySelector('img').src='assets/image/pierre_tombale.webp'),
    options:[{text:"Retourner au début", action: goToChapter("chapter1")},]
},
 chapt2:{
    subtitle: "Un monstre approche",
    text: "Vous courez, puis sauter de l'autre côté de la crevasse. Vous continuer à marcher et vous rencontrez une créature agressive.",
    image: (document.querySelector('img').src='assets/image/goomba.jpg'),
    options:[{text:"Sauter", action: goToChapter("chapitre3")}, {text:"Fuir", action: goToChapter("chapitre2M")}]
},
chapt2M:{
    subtitle: "Mort",
    text: "Vous fuyez à toute vitesse. Malheureusement, cela ne suffira pas. La bestiole vous rattrappe et vous tue.",
    image: (document.querySelector('img').src='assets/image/pierre_tombale.webp'),
    options:[{text:"Retourner au début", action: goToChapter("chapter1")},]
},
 chapt3: {
    subtitle: "Rencontre de l'homme-champignon",
    text: "En sautant sur le monstre, vous récupérez une clé verte. Après quelques minutes, vous apercevez un homme-champignon. Il vous propose d'échanger votre clé verte contre une clé rouge.",
    image: (document.querySelector('img').src='assets/image/toad.webp'),
    options:[{text:"Accepter", action: goToChapter("chapitre4")}, {text:"Refuser", action: goToChapter("chapitre4")}]
},
chapt4: {
    subtitle: "Clé verte ou rouge ?",
    text: "Vous continuer dans le chemin de droite. Vous apercevez une lueur verte au bout du chemin. Une fois arrivée, vous découvrez une porte en fer.",
    image: (document.querySelector('img').src='assets/image/porte.jpg'),
    options:[{text:"Clé verte", action: key("chapitre5")}, {text:"Clé rouge", action: key("chapitre1")}]
},
chapt4M: {
    subtitle: "Mort",
    text: "Vous tentez d'ouvrir la porte avec beaucoup de force. Malheureusement, vous attirez une monstre qui vous saute dessus et vous dévore.",
    image: (document.querySelector('img').src='assets/image/pierre_tombale.webp'),
    options:[{text:"Retourner au début", action: goToChapter("chapter1")},]
},
chapt5: {
    subtitle: "Paradis",
    text: "Vous insérez la clé et débarrer la porte. En ouvrant la porte, une lumière blanche vous  aveugle. Vous êtes arrivé au paradis.",
    image: (document.querySelector('img').src='assets/image/paradis.jpg'),
    options:[{text:"Retourner au début", action: goToChapter("chapter1")},]
},

}
function goToChapter (chapterName) {
    document.querySelector('.titre-chapitre').innerHTML = chaptersObj[chapterName]['subtitle'];
    document.querySelector(".texte").innerHTML = chaptersObj[chapterName]["texte"];
    document.querySelector(".image").src = chaptersObj[chapterName][".image"];
    document.querySelector("case").innerHTML='';
    for(i in chaptersObj[chapterName].option){
        const buttons = document.createElement('button');
        buttons.setAttributeNS('class', 'case');
        buttons.setAttribute("onclick", chaptersObj[chapterName].option[i].action);
        const node =document.createTextNode(
            chaptersObj[chapterName].option[i].texte
        );
        buttons.appendChild(node);
        const parent = document.querySelector(".case");
        parent.appendChild(buttons);
    }

}
let greenKeyFounded = false;

function keyFounded() {
    if(greenKeyFounded == true) {
        goToChapter("chapt5");
    }
}
