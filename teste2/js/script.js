// array de estados

$( document ).ready(function() {
    carregarEstados()
    comodos()
});

function carregarEstados(){

    var estadosBrasileiros = [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins"
    ];

    $('#es').html('<option value="Estado" style="margin: 0;" selected>Estado</option>');

    for(var i = 0; i < estadosBrasileiros.length; i++){

        $('#es').append(`<option value="${estadosBrasileiros[i]}">${estadosBrasileiros[i]}</option>`);

    }

}

function carregarCidades(estadoSelecionado){

    var selEstado = $('.cdd')

    if(estadoSelecionado != "Estado"){

        var cidadesPorEstado = {

            "Acre": ["Acrelândia", "Bujari", "Capixaba", "Cruzeiro do Sul"],
            "Alagoas": ["Maceió", "Arapiraca", "Palmeira dos Índios", "Santana do Ipanema"],
            "Amapá": ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque"],
            "Amazonas": ["Manaus", "Parintins", "Itacoatiara", "Manacapuru"],
            "Bahia": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"],
            "Ceará": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú"],
            "Distrito Federal": ["Brasília", "Taguatinga", "Ceilândia", "Gama"],
            "Espírito Santo": ["Vitória", "Vila Velha", "Cariacica", "Serra"],
            "Goiás": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde"],
            "Maranhão": ["São Luís", "Imperatriz", "Timon", "Caxias"],
            "Mato Grosso": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop"],
            "Mato Grosso do Sul": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá"],
            "Minas Gerais": ["Belo Horizonte", "Contagem", "Uberlândia", "Juiz de Fora"],
            "Pará": ["Belém", "Ananindeua", "Santarém", "Marabá"],
            "Paraíba": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos"],
            "Paraná": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
            "Pernambuco": ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru"],
            "Piauí": ["Teresina", "Parnaíba", "Picos", "Campo Maior"],
            "Rio de Janeiro": ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"],
            "Rio Grande do Norte": ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante"],
            "Rio Grande do Sul": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas"],
            "Rondônia": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena"],
            "Roraima": ["Boa Vista", "Caracaraí", "Rorainópolis", "São João da Baliza"],
            "Santa Catarina": ["Florianópolis", "Joinville", "Blumenau", "São José"],
            "São Paulo": ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo"],
            "Sergipe": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana"],
            "Tocantins": ["Palmas", "Araguaína", "Gurupi", "Porto Nacional"]

        };

        selEstado.children('select').html('<option value="Cidade">Cidade</option>')

        var cidades = cidadesPorEstado[estadoSelecionado]

        for(var i = 0; i < cidades.length; i++){

            selEstado.children('select').append(`<option value="${cidades[i]}">${cidades[i]}</option>`)

        }

        selEstado.css("opacity", "1")

        selEstado.children('select').prop('disabled', false)

        selEstado.children('select').css('cursor', 'pointer')

    }else{

        selEstado.css("opacity", "0.5")

        selEstado.children('select').css('cursor', 'no-drop')

        selEstado.children('select').html('<option value="Cidade">Cidade</option>')

        selEstado.children('select').prop('disabled', true)

    }

}

function criarLead() {

    var nome = $('#nome').val()
    var email = $('email').val()
    var telefone = $('telefone').val()
    var estado = $('es').val()
    var cidade = $('cd').val()
    var mensagem = $('#mensagem').val()

    $.post('api/registrarLead.php', {nome: nome, email: email, telefone: telefone, estado: estado, cidade: cidade, mensagem: mensagem}).done(back => {
        console.log(back)
    })

}

function comodos(){

    $.get('api/comodosFotos.php').done(galeria => {
        console.log(galeria)
        return


        galeria.forEach(function (imagem) {
            $('.pt1').append(`
                <figure class="figure col-sm-2">
                    <img src="imgs/${imagem}" class="figure-img img-fluid rounded" alt="...">
                    <figcaption style="text-align: center;" class="figure-caption">${pathinfo(imagem, PATHINFO_FILENAME)}</figcaption>
                </figure>
            `);
        });

        $('.pt1').append(`<?php foreach ($galeria as $imagem) { ?>
            <figure class="figure col-sm-2">
                <img src="imgs/<?php echo $imagem; ?>" class="figure-img img-fluid rounded" alt="...">
                <figcaption style="text-align: center;" class="figure-caption"><?php echo pathinfo($imagem, PATHINFO_FILENAME); ?></figcaption>
            </figure>
        <?php } ?>`)

        $('.pt2').append(`<?php foreach ($galeria2 as $imagem) { ?>
            <figure class="figure col-sm-2">
                <img src="imgs/<?php echo $imagem; ?>" class="figure-img img-fluid rounded" alt="...">
                <figcaption style="text-align: center;" class="figure-caption"><?php echo pathinfo($imagem, PATHINFO_FILENAME); ?></figcaption>
            </figure>
        <?php } ?>`)

    })


}