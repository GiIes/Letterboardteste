var series = [
    { nome: "Série 1", genero: "Drama" },
    { nome: "Série 2", genero: "Comédia" },
    { nome: "Série 3", genero: "Ação" }
];


function exibirSeries() {
    var seriesList = document.querySelector("#series");
    var ul = document.createElement("ul");

    seriesData.forEach(function(serie) {
        var li = document.createElement("li");
        li.textContent = serie.nome + " (" + serie.genero + ")";
        ul.appendChild(li);
    });

    seriesList.appendChild(ul);
}


window.onload = exibirSeries;