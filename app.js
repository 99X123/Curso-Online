function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = ` <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">Nada foi encontrado. Você precisa digitar o nome de um curso se não tiver mande um oi la meu gmail que atualizarei.</a>
        </h2>`
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Curso</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = ` <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">Nada foi encontrado. Você precisa digitar o nome de um curso se não tiver mande um oi la meu gmail que atualizarei.</a>
        </h2>`
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}