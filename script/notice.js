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

const params = new URLSearchParams(window.location.search);
const noticiaId = params.get('id');

document.addEventListener("DOMContentLoaded", function() {
    
    if (noticiaId) {
        const noticiaIdentifier = noticias.find(n => n.id == noticiaId);
        if (noticiaIdentifier) {
            document.getElementById("titulo").textContent = noticias[noticiaId-1].titulo;
            document.getElementById("imagen").src = noticias[noticiaId-1].imagen;
            document.getElementById("contenido").textContent = noticias[noticiaId-1].contenido;
        }

        
    }
});