$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) { //target _blank abre em nova aba//
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //no jQuery é val (value)//
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //o appendto add o elemento e insere entre a abertura e fechamento do li//
        $(` 
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); /*exibe a nova imagem em 1000ms*/
        $('#endereco-imagem-nova').val('')
    })
})