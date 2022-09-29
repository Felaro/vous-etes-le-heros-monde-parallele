let chaptersObj = {
 chapt1:{
    subtitle: "Obstacle",
    text: "Vous êtes dans un monde parallèle. Vous commencez à marcher et vous voyez une crevasse.",
    image: "crevasse.jpg",
    options:[{text:"text option1", action: goToChapter("chapitre2")}]
},
 chapt2:{
    subtitle: "Un monstre approche",
    text: "Vous courez, puis sauter de l'autre côté de la crevasse. Vous continuer à marcher et vous rencontrez une créature agressive.",
    image: "goomba.jpg",
    options:[{text:"text option1", action: goToChapter("chapitre3")}]
},
 chapt3: {
    subtitle: "Rencontre de l'homme-champignon",
    text: "En sautant sur le monstre, vous récupérez une clé verte. Après quelques minutes, vous apercevez un homme-champignon. Il vous propose d'échanger votre clé verte contre une clé rouge.",
    image: "toad.webp",
    options:[{text:"text option1", action: goToChapter("chapitre4")}]
},
chapt4: {
    subtitle: "Clé verte ou rouge ?",
    text: "Vous continuer dans le chemin de droite. Vous apercevez une lueur verte au bout du chemin. Une fois arrivée, vous découvrez une porte en fer.",
    image: "porte.jpg",
    options:[{text:"text option1", action: goToChapter("chapitre5")}]
},
chapt5: {
    subtitle: "Paradis",
    text: "Vous insérez la clé et débarrer la porte. En ouvrant la porte, une lumière blanche vous  aveugle. Vous êtes arrivé au paradis.",
    image: "paradis.jpg",
},
}
function goToChapter (chapterName) {
    console.log(chaptersObj[chapterName].subtitle);
    console.log(chaptersObj[chapterName].text);
}