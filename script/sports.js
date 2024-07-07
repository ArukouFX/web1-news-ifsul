const noticias = [
    { 
        id: 1,
        titulo: "Nadal gana su décimo Roland Garros", 
        imagen: "https://www.rionegro.gub.uy/wp-content/uploads/2024/02/SUMATE-JUVENTUD-05.jpg", 
        contenido: "El tenista español Rafael Nadal hace historia al ganar su décimo título en el Abierto de Francia." 
    },
    {
        id: 2,
        titulo: "El Real Madrid gana la Liga de Campeones",
        imagen: "https://prod-fullevo-webapp.tudn.com/_next/image?url=https://st1.uvnimg.com/e5/92/2e0669084784a6b0dd2db978172f/007-cuantos-deportes-hay-en-juegos-olimpicos-y-cuales-son.jpg&w=1024&q=75",
        contenido: "El Real Madrid vence al Bayern Múnich en la final de la Liga de Campeones y se corona campeón por decimotercera vez en su historia."
    },
    {
        id: 3,
        titulo: "LeBron James firma contrato millonario con los Lakers",
        imagen: "https://www.gub.uy/secretaria-nacional-deporte/sites/secretaria-nacional-deporte/files/styles/documento/public/imagenes/noticias/Inauguraci%C3%B3n%20CEDC%20-%20Alta%20resoluci%C3%B3n-20.jpg?itok=LirZfDP5",
        contenido: "El jugador estrella de la NBA, LeBron James, firma un contrato multimillonario con los Los Angeles Lakers."
    },
    {
        id: 4,
        titulo: "Simone Biles hace historia en los Juegos Olímpicos",
        imagen: "https://www.dsm.edu.uy/images/varias/Deportes.jpg",
        contenido: "La gimnasta estadounidense Simone Biles logra un récord de medallas en los Juegos Olímpicos de Tokio 2020, destacando por su dominio y destreza en cada aparato."
    },
    {
        id: 5,
        titulo: "Lewis Hamilton se convierte en campeón mundial de Fórmula 1",
        imagen: "https://www.gub.uy/secretaria-nacional-deporte/sites/secretaria-nacional-deporte/files/styles/documento/public/imagenes/noticias/Inauguraci%C3%B3n%20CEDC%20-%20Alta%20resoluci%C3%B3n-20.jpg?itok=LirZfDP5",
        contenido: "El piloto británico Lewis Hamilton gana su séptimo título mundial de Fórmula 1, igualando el récord de Michael Schumacher."
    },
    {
        id: 6,
        titulo: "La selección brasileña gana la Copa América",
        imagen: "https://www.dsm.edu.uy/images/varias/Deportes.jpg",
        contenido: "Brasil se consagra campeón de la Copa América al vencer a Argentina en la final, con un desempeño destacado de Neymar Jr."
    },
    {
        id: 7,
        titulo: "Los Angeles Dodgers ganan la Serie Mundial de Béisbol",
        imagen: "https://www.rionegro.gub.uy/wp-content/uploads/2024/02/SUMATE-JUVENTUD-05.jpg", 
        contenido: "Los Dodgers de Los Angeles se coronan campeones de la Serie Mundial de Béisbol tras una temporada llena de emociones y grandes jugadas."
    },
    {
        id: 8,
        titulo: "Usain Bolt rompe el récord mundial de los 100 metros",
        imagen: "https://prod-fullevo-webapp.tudn.com/_next/image?url=https://st1.uvnimg.com/e5/92/2e0669084784a6b0dd2db978172f/007-cuantos-deportes-hay-en-juegos-olimpicos-y-cuales-son.jpg&w=1024&q=75",
        contenido: "El legendario velocista jamaicano, Usain Bolt, establece un nuevo récord mundial en los 100 metros planos, dejando a todos boquiabiertos con su velocidad."
    },
    {
        id: 9,
        titulo: "Caroline Wozniacki se retira del tenis profesional",
        imagen: "https://www.rionegro.gub.uy/wp-content/uploads/2024/02/SUMATE-JUVENTUD-05.jpg", 
        contenido: "La tenista danesa Caroline Wozniacki anuncia su retiro del tenis profesional, dejando un legado de determinación y talento en el deporte."
    },
    {
        id: 10,
        titulo: "Cristiano Ronaldo ficha por el Manchester United",
        imagen: "https://www.dsm.edu.uy/images/varias/Deportes.jpg",
        contenido: "El delantero portugués Cristiano Ronaldo regresa al Manchester United, generando gran entusiasmo entre los aficionados y reviviendo la emoción en Old Trafford."
    },
    {
        id: 11,
        titulo: "El equipo de rugby de Nueva Zelanda domina el Mundial",
        imagen: "https://www.gub.uy/secretaria-nacional-deporte/sites/secretaria-nacional-deporte/files/styles/documento/public/imagenes/noticias/Inauguraci%C3%B3n%20CEDC%20-%20Alta%20resoluci%C3%B3n-20.jpg?itok=LirZfDP5",
        contenido: "Los All Blacks de Nueva Zelanda se coronan campeones del mundo de rugby, demostrando una vez más su supremacía en este deporte."
    },
    {
        id: 12,
        titulo: "Serena Williams anuncia su regreso a las canchas",
        imagen: "https://prod-fullevo-webapp.tudn.com/_next/image?url=https://st1.uvnimg.com/e5/92/2e0669084784a6b0dd2db978172f/007-cuantos-deportes-hay-en-juegos-olimpicos-y-cuales-son.jpg&w=1024&q=75",
        contenido: "La tenista estadounidense Serena Williams anuncia su regreso a la competición después de una pausa, con la determinación de seguir haciendo historia en el tenis."
    }
];

const noticiasSection = document.getElementById("noticias");

function renderizarNoticias() {
    // Limpiar la sección de noticias antes de renderizar las nuevas noticias si se está agregando una nueva noticia
    noticiasSection.innerHTML = '';

    // Renderizar las noticias nuevamente
    noticias.forEach((noticia, index) => {
        const article = document.createElement("article");
        if (index === 0) {
            article.classList.add("destacada");
        }
        article.innerHTML = `
        <a href="../src/category/notice.html?id=${noticia.id}" class="noticia-link"><img src="${noticia.imagen}" alt="${noticia.titulo}"></a>
        <a href="../src/category/notice.html?id=${noticia.id}" class="noticia-link"><h2>${noticia.titulo}</h2></a>
        <p>${noticia.contenido}</p>
        `;
        noticiasSection.appendChild(article);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Renderizar las noticias
    renderizarNoticias();
});