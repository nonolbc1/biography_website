const translations = {
    fr: {
        title:"Site internet par ©Nonolbc1",
        language:"Langue:",
        title_bio:"Biographie de Nonolbc1",
        h1_desc:"Description",
        p1_desc:"Je fais des vidéos sur Youtube et Tiktok sur le thème de Minecraft. Mes passions sont de développer certains petits jeux ou logiciels. Je joue beaucoup aux jeux vidéos, je modélise certaines choses et j'aime bien faire du sport (de l'escalade, du basket, etc...).",
        sourceCode:"Code source"
    },
    en: {
        title:"Website by ©Nonolbc1",
        language:"Language:",
        title_bio:"Biography of Nonolbc1",
        h1_desc:"Description",
        p1_desc:"I make videos on Youtube and Tiktok on the theme of Minecraft. My passions are developing certain small games or software. I play a lot of video games, I model certain things and I like to do sports (climbing, basketball, etc...).",
        sourceCode:"Source code"
    }
}

const languageSelectop = document.querySelector("select");
let t1 = document.getElementById("_00000");
let t2 = document.getElementById("_00001");
let t3 = document.getElementById("_00002");
let t4 = document.getElementById("_00003");
let t5 = document.getElementById("_00004");
let t6 = document.getElementById("_00005");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "fr") {
        t1.innerText = translations.fr.title
        t2.innerText = translations.fr.language
        t3.innerText = translations.fr.title_bio
        t4.innerText = translations.fr.h1_desc
        t5.innerText = translations.fr.p1_desc
        t6.innerText = translations.fr.sourceCode
    } else if (language == "en") {
        t1.innerText = translations.en.title
        t2.innerText = translations.en.language
        t3.innerText = translations.en.title_bio
        t4.innerText = translations.en.h1_desc
        t5.innerText = translations.en.p1_desc
        t6.innerText = translations.en.sourceCode
    }
}