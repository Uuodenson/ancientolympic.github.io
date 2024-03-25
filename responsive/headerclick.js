const boxes = document.querySelectorAll('.box');

boxes[0].addEventListener('click', () => {
    window.location.href = 'https://discord.gg/392BgpvtSv'
})

boxes[1].addEventListener('click', () => {
    window.location.href = 'https://twitter.com/AncientOlympic'
})

boxes[2].addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/@ancientolympic'
})

boxes[3].addEventListener('click', () => {
    window.location.href = 'https://mcpedl.com/user/olympic-studios-1/'
})

const logo = document.querySelector('.logo-box');


logo.addEventListener('click', () => {
    window.location.href = '../responsive/index.html'
})

const links = [
    { name: "olympic-games.html", mcpedl: 'https://mcpedl.com/olympic-games/', mediafire: "https://www.mediafire.com/file/l5fkhwwdm9oya57/Olympic+Games.mcworld/file" },
    { name: "parkour-map.html", mcpedl: 'https://mcpedl.com/birthday-parkour-map/', mediafire: "https://www.mediafire.com/file/3c92v2xs7cavipm/Birthday_Parkour.mcworld/file" },
    { name: "dawn-of-atlantis.html", mcpedl: 'https://mcpedl.com/olympic-story-dawn-of-atlantis/', mediafire: "https://www.mediafire.com/file/dmiewwy9o28kyml/Dawn_of_Atlantis.mcworld/file" }
];

const path = window.location.pathname;
const page = path.split('/').pop();
console.log(page)
for (const link of links) {
    if (link.name === page.toString()) {
        let index = links.indexOf(link)
        console.log(links[index].mcpedl)


        const mediafire_button = document.querySelector('.mediafire_button');
        const mcpedl_button = document.querySelector('.mcpedl_button');

        mediafire_button.addEventListener("click", () => {
            window.location.href = link.mediafire
        })

        mcpedl_button.addEventListener("click", () => {
            window.location.href = link.mcpedl
        })
    }
}