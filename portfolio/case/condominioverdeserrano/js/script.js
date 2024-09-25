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
    var email = $('#email').val()
    var telefone = $('#telefone').val()
    var estado = $('#es').val()
    var cidade = $('#cd').val()
    var mensagem = $('#mensagem').val()

    if(nome && email && telefone && estado && cidade && mensagem) {

        aviso('success', 'Dados salvos com sucesso!'); 

        $('#nome').val("") 
        $('#email').val("") 
        $('#telefone').val("") 
        $('#es').val("Estado") 
        $('#cd').val("Cidade") 
        $('#mensagem').val("")
        
    }else{

        aviso('danger', 'Preencha todos os campo!');

    }


}

function comodos() {

    var fotos = {

        "0": ["Bar_e_restaurante.jpg", "Casa_de_chá.jpg", "Salas_de_ioga_e_meditação.jpg", "Spa_e_massagem.jpg", "Fitness_center.jpg"],
        "1": ["Ateliê.jpg", "Sala_de_jogos.jpg", "Brinquedoteca.jpg", "Piscina.jpg", "Coworking.jpg"]

    };

    for (var i = 0; i < 2; i++) {

        for (var j = 0; j < fotos[i].length; j++) {

            $(`.pt${i}`).append(`
                <figure class="figure col-sm-2">
                    <img src="imgs/${fotos[i][j]}" class="figure-img img-fluid rounded" alt="...">
                    <figcaption style="text-align: center; color: var(--verde-escuro);" class="figure-caption">${fotos[i][j].replace(/_/g, ' ').slice(0, -4)}</figcaption>
                </figure>
            `);
        }
        
    }

}


function formatarNum(el) {
  
    el = el.replace(/\D/g, '');
  
    if (el.length >= 2) {
      el = '(' + el.substring(0, 2) + ') ' + el.substring(2);
    }
    
    if (el.length > 10) {
      el = el.substring(0, 10) + '-' + el.substring(10);
    }
  
    $('#telefone').val(el);
    
}

function aviso(tipo, mensagem){

    $('body').append(`<div style="display: flex; width: 100%; justify-content: center"><div style="position: absolute; z-index: 99999999999; top: 0; display: none; margin: 20px" class="alert alert-${tipo} alert-dismissible fade show" role="alert">
        <strong>${mensagem}</strong>
        <button onclick="$('.alert').slideUp()" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div></div>`);

    $('.alert').slideDown();
}