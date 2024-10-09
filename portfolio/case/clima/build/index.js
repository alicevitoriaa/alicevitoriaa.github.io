"use strict";
// Selecionando divs e afirmando que o DOM existe usando Type Assertion
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const r2 = document.getElementById('resultadoSec');
const p = document.getElementById('input');
const app = document.getElementById('app');
const val = p.children[0];
const paises = [
    "Afeganistão",
    "Albânia",
    "Argélia",
    "Andorra",
    "Angola",
    "Antígua e Barbuda",
    "Argentina",
    "Armênia",
    "Austrália",
    "Áustria",
    "Azerbaijão",
    "Bahamas",
    "Bahrein",
    "Bangladesh",
    "Barbados",
    "Bielorrússia",
    "Bélgica",
    "Belize",
    "Benin",
    "Butão",
    "Bolívia",
    "Bósnia e Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunei",
    "Bulgária",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Camboja",
    "Camarões",
    "Canadá",
    "República Centro-Africana",
    "Chade",
    "Chile",
    "China",
    "Colômbia",
    "Comores",
    "Congo, República Democrática do",
    "Congo, República do",
    "Costa Rica",
    "Croácia",
    "Cuba",
    "Chipre",
    "República Tcheca",
    "Dinamarca",
    "Djibuti",
    "Dominica",
    "República Dominicana",
    "Equador",
    "Egito",
    "El Salvador",
    "Guiné Equatorial",
    "Eritreia",
    "Estônia",
    "Eswatini",
    "Etiópia",
    "Fiji",
    "Finlândia",
    "França",
    "Gabão",
    "Gâmbia",
    "Geórgia",
    "Alemanha",
    "Gana",
    "Grécia",
    "Granada",
    "Guatemala",
    "Guiné",
    "Guiné-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungria",
    "Islândia",
    "Índia",
    "Indonésia",
    "Irã",
    "Iraque",
    "Irlanda",
    "Israel",
    "Itália",
    "Jamaica",
    "Japão",
    "Jordânia",
    "Cazaquistão",
    "Quênia",
    "Kiribati",
    "Coreia do Norte",
    "Coreia do Sul",
    "Kuwait",
    "Quirguistão",
    "Laos",
    "Letônia",
    "Líbano",
    "Lesoto",
    "Libéria",
    "Líbia",
    "Liechtenstein",
    "Lituânia",
    "Luxemburgo",
    "Madagascar",
    "Malawi",
    "Malásia",
    "Maldivas",
    "Mali",
    "Malta",
    "Ilhas Marshall",
    "Mauritânia",
    "Maurício",
    "México",
    "Micronésia",
    "Moldávia",
    "Mônaco",
    "Mongólia",
    "Montenegro",
    "Marrocos",
    "Moçambique",
    "Mianmar",
    "Namíbia",
    "Nauru",
    "Nepal",
    "Países Baixos",
    "Nova Zelândia",
    "Nicarágua",
    "Níger",
    "Nigéria",
    "Macedônia do Norte",
    "Noruega",
    "Omã",
    "Paquistão",
    "Palau",
    "Palestina",
    "Panamá",
    "Papua Nova Guiné",
    "Paraguai",
    "Peru",
    "Filipinas",
    "Polônia",
    "Portugal",
    "Catar",
    "Romênia",
    "Rússia",
    "Rwanda",
    "São Cristóvão e Nevis",
    "Santa Lúcia",
    "São Vicente e Granadinas",
    "Samoa",
    "San Marino",
    "São Tomé e Príncipe",
    "Arábia Saudita",
    "Senegal",
    "Sérvia",
    "Seicheles",
    "Serra Leoa",
    "Cingapura",
    "Eslováquia",
    "Eslovênia",
    "Ilhas Salomão",
    "Somália",
    "África do Sul",
    "Sudão do Sul",
    "Espanha",
    "Sri Lanka",
    "Sudão",
    "Suriname",
    "Suécia",
    "Suíça",
    "Síria",
    "Taiwan",
    "Tajiquistão",
    "Tanzânia",
    "Tailândia",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad e Tobago",
    "Tunísia",
    "Turquia",
    "Turcomenistão",
    "Tuvalu",
    "Uganda",
    "Ucrânia",
    "Emirados Árabes Unidos",
    "Reino Unido",
    "Estados Unidos",
    "Uruguai",
    "Uzbequistão",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietnã",
    "Iémen",
    "Zâmbia",
    "Zimbábue"
];
val.addEventListener("keypress", (event) => {
    if (event.key === "Enter")
        buscarClima(val.value);
});
function buscarClima(cidade) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (cidade == "")
                throw "Digite o nome da cidade que deseja!";
            if (paises.find(p => p == cidade))
                throw "O valor inserido foi um pais! A busca só pode ser feita por cidades.";
            const cm = yield (yield fetch(`https://api.weatherapi.com/v1/current.json?q=${cidade}&key=bb6036ddbf414034bc1223225243009`)).json();
            if (!cm)
                throw "Busca por clima apresentou erros! Contate o desenvolvedor.";
            r2.innerHTML = `<div>${cm.location.name} - ${cm.location.country}</div>
    <div style='display: flex'><img src='${cm.current.condition.icon}'><div>${cm.current.temp_c.toFixed()} °C</div></div>
    <div>${infos(cm.location.localtime)}</div>`;
            val.value = '';
            r2.style.display = 'grid';
            buscarFoto(cidade);
        }
        catch (e) {
            alert('Erro: ' + e);
        }
    });
}
function buscarFoto(cidade) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (cidade == "")
                throw "Digite o nome da cidade que deseja!";
            const imgR = yield (yield fetch(`https://api.pexels.com/v1/search?query=${cidade}&per_page=1&page=3`, {
                headers: { Authorization: 'LByKciHYei5hybETJzahn2oGUIKMJkQdemYq3mDDvaYfLlBCXwrqO9bd' }
            })).json();
            if (!imgR)
                throw "Busca por imagem obteve erros!";
            app.style.backgroundImage = `url('${imgR.photos[0].src.landscape}')`;
        }
        catch (e) {
            alert('Erro: ' + e);
        }
    });
}
// Função infos é responsável por calcular o dia da semana pelo dia e retornar não só o dia da semana, mas também o horário e o dia atual nessa cidade
function infos(dia) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const d = new Date(dia);
    dia = `${diasSemana[d.getDay()]} (${formatarZero(d.getDate())}) - ${formatarZero(d.getHours())}:${formatarZero(d.getMinutes())}`;
    return dia;
}
function formatarZero(val) { return val <= 9 ? '0' + val : val; }
