let pesquisaData = document.getElementById("pesquisaData");
let botao = document.getElementById("botao");
let img = document.getElementById('img');


$.ajax({
    url: `https://api.nasa.gov/planetary/apod?date=${pesquisaData.value}&api_key=gBWbUhuChAbsf6Twl2Rl5bfWdfgIxDV7k7DkXf66`,
    success(resposta) {
        $(".header").css('background-image', `url(${resposta.url})`);
        $('.desc').text(resposta.explanation)
        $("#img").prop("src", resposta.url);

    },
});

botao.addEventListener("click", function() {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${pesquisaData.value}&api_key=gBWbUhuChAbsf6Twl2Rl5bfWdfgIxDV7k7DkXf66`,
        success(resposta) {
            // $(".header").css('background-image', `url(${resposta.url})`);
            $("#img").prop("src", resposta.url);
            $('.desc').text(resposta.explanation)
            $('#nome').text(resposta.title)
            console.log(resposta);

        },
    });
});