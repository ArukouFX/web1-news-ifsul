// Simular noticias (puedes reemplazar esto con datos reales)
const noticias = [
    { 
        id: 1,
        titulo: "IFSul divulga resultado preliminar de selecionados para Auxílio Enchente", 
        imagen: "https://tecnicosdistrito3.com/wp-content/uploads/2020/03/BANNER_ATENCION_WEB.jpg", 
        contenido: "Estudantes que tiveram suas inscrições indeferidas têm até amanhã (16) para apresentarem recursos" },
    {
        id: 2,
        titulo: "IFSul divulga resultado preliminar de selecionados para Auxílio Enchente",
        imagen: "https://s.france24.com/media/display/a901be9e-f5ad-11ee-abe5-005056a90284/w:1024/p:16x9/news_es_1920x1080.jpg",
        contenido: "Estudantes que tiveram suas inscrições indeferidas têm até amanhã (16) para apresentarem recursos"
    },
    {
        id: 3,
        titulo: "IFSul promove workshop sobre Tecnologia de Alimentos",
        imagen: "https://s.france24.com/media/display/a901be9e-f5ad-11ee-abe5-005056a90284/w:1024/p:16x9/news_es_1920x1080.jpg",
        contenido: "Evento acontecerá no próximo sábado e contará com a participação de especialistas da área."
    },
    {
        id: 4,
        titulo: "Estudantes do IFSul conquistam prêmio em competição de robótica",
        imagen: "https://s.france24.com/media/display/a901be9e-f5ad-11ee-abe5-005056a90284/w:1024/p:16x9/news_es_1920x1080.jpg",
        contenido: "Equipe do campus X ficou em primeiro lugar na categoria de robôs autônomos."
    },
    {
        id: 5,
        titulo: "Docente do IFSul é premiado por pesquisa inovadora em engenharia",
        imagen: "https://s.france24.com/media/display/a901be9e-f5ad-11ee-abe5-005056a90284/w:1024/p:16x9/news_es_1920x1080.jpg",
        contenido: "Professor recebeu o prêmio de melhor trabalho científico apresentado em congresso internacional."
    },
    {
        id: 6,
        titulo: "IFSul abre inscrições para curso de extensão em Programação Web",
        imagen: "https://s.france24.com/media/display/a901be9e-f5ad-11ee-abe5-005056a90284/w:1024/p:16x9/news_es_1920x1080.jpg",
        contenido: "Curso terá duração de 3 meses e abordará HTML, CSS, JavaScript e frameworks populares."
    },
    {
        id: 7,
        titulo: "Estudantes do IFSul participam de evento nacional de empreendedorismo",
        imagen: "https://s.france24.com/media/display/a901be9e-f5ad-11ee-abe5-005056a90284/w:1024/p:16x9/news_es_1920x1080.jpg",
        contenido: "Alunos apresentaram seus projetos inovadores e foram reconhecidos por suas iniciativas."
    },
    {
        id: 8,
        titulo: "IFSul lança edital para seleção de novos professores",
        imagen: "https://s.france24.com/media/display/a901be9e-f5ad-11ee-abe5-005056a90284/w:1024/p:16x9/news_es_1920x1080.jpg",
        contenido: "Oportunidades são para diversas áreas e exigem formação mínima em nível de mestrado."
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

    // Mostrar el mensaje de días restantes para el próximo Proceso de Selección del IFSul
    const fechaProcesoSeleccion = new Date("2024-11-30");
    const hoy = new Date();
    const diasRestantes = Math.ceil((fechaProcesoSeleccion - hoy) / (1000 * 60 * 60 * 24));
    const mensaje = `Faltan ${diasRestantes} días para el próximo Proceso de Selección del IFSul.`;

    // Crear un elemento para mostrar el mensaje
    const mensajeElemento = document.createElement("p");
    mensajeElemento.textContent = mensaje;

    // Obtener el contenedor donde se mostrará el mensaje y agregar el elemento al final
    const contenedorMensaje = document.getElementById("mensaje-proceso-seleccion");
    contenedorMensaje.appendChild(mensajeElemento);
});


//Enviar noticia

// Obtener el enlace "Envíe una noticia"
const enviarNoticia = document.getElementById('enviar-noticia');
// Obtener el contenedor de la ventana modal
const modal = document.getElementById('modal');

// Función para mostrar la ventana modal
enviarNoticia.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace siga el enlace predeterminado
    modal.style.display = 'block'; // Mostrar la ventana modal
});

// Función para cerrar la ventana modal al hacer clic en la "x"
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Ocultar la ventana modal
});

// Función para enviar el formulario de la noticia
const formularioNoticia = document.getElementById('formulario-noticia');
formularioNoticia.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario
    // Aquí puedes procesar los datos del formulario y agregar la nueva noticia al arreglo
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;

    // procesamos la imagen:
    const file = document.getElementById('imagen').files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        const imagen = reader.result;
        // Agregar la nueva noticia al arreglo
        noticias.push({id: noticias.length + 1, titulo: titulo, imagen: imagen, contenido: contenido});
        renderizarNoticias();
        // Cerrar la ventana modal
        modal.style.display = 'none';
    };
});


//Carrusel

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Auto-slide (optional)
let autoSlide = setInterval(() => moveSlide(1), 5000);

document.querySelector('.carousel-container').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

document.querySelector('.carousel-container').addEventListener('mouseout', () => {
    autoSlide = setInterval(() => moveSlide(1), 5000);
});
