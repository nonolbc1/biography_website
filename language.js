const translations = {
  fr: {
    "categorie1": "Réseaux sociaux",
    "categorie2": "Moi",
    "categorie3": "Ce que j'utilise",
    "cat-title-1-social-networks": "Mes réseaux",
    "cat-title-2-social-networks": "Mes chaînes YouTube",
    "cat-title-3-social-networks": "Mes amis",
    "cat-title-1-me": "Sur les réseaux",
    "cat-title-2-me": "Entre amis",
    "cat-title-3-me": "Développement",
    "cat-title-4-me": "IRL",
    "cat-desc-1": `J'aime faire des vidéos <a onclick="showContent('social_networks', this)">YouTube</a>, publié mes shorts sur <a onclick="showContent('social_networks', this)">TikTok</a><br>et tourner des vidéos avec <a onclick="showContent('social_networks', this)">Horizyon</a> par exemple.<br>J'ai un serveur <a href="https://discord.gg/Fq3qAbGuDy">Discord</a> dans le quelle j'aime faire des évènements,<br>comme des concours, notifiés ma communautée d'une nouvelle vidéo,<br>ou autres choses, n'hésitez pas à passer sur le serveur !`,
    "cat-desc-2": `Vous pouvez trouvez mes amis sur la page <a onclick="showContent('social_networks', this)">"Réseaux sociaux"</a>.<br>Avec eux j'aime bien joué à <a onclick="showContent('what_i_use', this)">plusieurs jeux</a>, comme <a onclick="showContent('what_i_use', this)">Valorant</a>, <a onclick="showContent('what_i_use', this)">Minecraft</a>,<br><a onclick="showContent('what_i_use', this)">BeamNG.Drive</a>, etc. Je les aides dans certaines tâches trop techniques<br>comme un besoin de programmation ou de commandes dans <a onclick="showContent('what_i_use', this)">Minecraft</a>.<br>On fait des vidéos enssembles et les postes sur <a onclick="showContent('social_networks', this)">YouTube</a>, et <a onclick="showContent('social_networks', this)">TikTok</a>.`,
    "cat-desc-3": `J'aime bien développer des petits logiciel, ou même des plugins/addons.<br>Généralement, je code avec <a onclick="showContent('what_i_use', this)">Visual Studio Code</a>, avec le quel je code<br>en ce momment même. Mais j'utilise autrement d'autres logiciels, tel que<br><a onclick="showContent('what_i_use', this)">Intellij IDEA</a> pour du <a onclick="showContent('what_i_use', this)">Java</a>, ou même le bloc-notes directement.`,
    "cat-desc-4": `Je suis un étudiant intéresser par la Cybersécurité dans le pentesting<br>(Majoritairement le souhait de tous ceux intéresser par ça). J'étudie donc<br>la programmation, la cybersécurité etc. IRL je n'aime pas trop sortir pour<br>aller voir mes amis (Je suis un modo discord...), je passe donc mes<br>journées à sois tourner des vidéos, sois jouer avec mes amis sur internet.<br>J'ai aussi d'autre passions IRL, comme l'électicité (Circuit électronique<br>ou même des installations basses/hautes tensions), faire du sport,<br>et même regarder tous ce qui est course automobile<br>(Principalement F1/F4).`,
    "cat-title-1-what-i-use": "Jeux",
    "cat-title-2-what-i-use": "Logiciels",
    "cat-title-3-what-i-use": "Languages de programmation",
  },
  en: {
    "categorie1": "Socials network",
    "categorie2": "Me",
    "categorie3": "What i use",
    "cat-title-1-social-networks": "My networks",
    "cat-title-2-social-networks": "My YouTube channels",
    "cat-title-3-social-networks": "My friends",
    "cat-title-1-me": "On networks",
    "cat-title-2-me": "With friends",
    "cat-title-3-me": "development",
    "cat-title-4-me": "IRL",
    "cat-desc-1": `I like to make <a onclick="showContent('social_networks', this)">YouTube</a> videos, published my shorts on <a onclick="showContent('social_networks', this)">TikTok</a><br>and record videos with <a onclick="showContent('social_networks', this)">Horizyon</a> for exemple.<br>I have a <a href="https://discord.gg/Fq3qAbGuDy">Discord</a> server in wich I like to make events,<br>like contests, notified my community of a new video,<br>or other things, do not hesitate to go on the server ! !`,
    "cat-desc-2": `You can find my friends on the page <a onclick="showContent('social_networks', this)">"Socials networks"</a>.<br>With them I like to play <a onclick="showContent('what_i_use', this)">several games</a>, such as <a onclick="showContent('what_i_use', this)">Valorant</a>, <a onclick="showContent('what_i_use', this)">Minecraft</a>,<br><a onclick="showContent('what_i_use', this)">BeamNG.Drive</a>, etc. I help them in some overly technical tasks<br>as a need for programming or commands in Minecraft <a onclick="showContent('what_i_use', this)">Minecraft</a>.<br>We make videos together and the positions on <a onclick="showContent('social_networks', this)">YouTube</a>, and <a onclick="showContent('social_networks', this)">TikTok</a>.`,
    "cat-desc-3": `I like to develop small software, or even plugins/addons.<br>Generally, i code with <a onclick="showContent('what_i_use', this)">Visual Studio Code</a>, with which I code<br>in this precise moment. But I use other software, such as<br><a onclick="showContent('what_i_use', this)">Intellij IDEA</a> for <a onclick="showContent('what_i_use', this)">Java</a>, or even the notebook directly.`,
    "cat-desc-4": `I am a student interested in Cybersecurity in pentesting<br>(Mostly the wish of all those interested by it). I am therefore studying<br>programming, cybersecurity etc. IRL I don’t really like going out to<br>go see my friends (I am a discord moderator...), so I spend my<br>days to be filmed, to be played with my friends on the internet.<br>I also have other passions IRL, such as electicity (Electronic circuit<br>or even low/high voltage installations), doing sports,<br>and even look at all that is car racing<br>(Mainly F1/F4).`,
    "cat-title-1-what-i-use": "Games",
    "cat-title-2-what-i-use": "Softwares",
    "cat-title-3-what-i-use": "Programmation languages",
  }
};

const select = document.getElementById("lang");

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) el.innerHTML = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
}

select.addEventListener("change", e => setLang(e.target.value));

const lang = localStorage.getItem("lang") ||
             (navigator.language.startsWith("fr") ? "fr" : "en");
select.value = lang;
setLang(lang);