"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resultDiv = document.getElementById('result');
function buscarClima(cidade) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cm = yield (yield fetch(`https://api.weatherapi.com/v1/current.json?q=${cidade}&key=bb6036ddbf414034bc1223225243009`)).json();
            buscarMusica(cm ? cm.location.name : cidade);
        }
        catch (error) {
            alert('Erro: ' + error);
        }
    });
}
function buscarMusica(cidade) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = '5b70263a2c0443d1a2751a297e89548e';
            const sId = '29b3adcc9805434fad09395c0c7e2eb1';
            let tkR = yield fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(`${id}:${sId}`)
                },
                body: 'grant_type=client_credentials'
            });
            const tk = yield tkR.json();
            if (!tk.access_token) {
                throw new Error('Erro ao obter token do Spotify');
            }
            const musicaR = yield fetch(`https://api.spotify.com/v1/search?q=${cidade}&type=track&limit=1`, {
                headers: {
                    'Authorization': `${tk.type} ${tk.access_token}`
                }
            });
            const musica = yield musicaR.json();
            if (!musica || !musica.tracks || musica.tracks.total === 0) {
                throw new Error('Nenhuma música encontrada para a cidade fornecida.');
            }
            else {
                let artistas = '';
                if (musica.artists.length > 1) {
                    for (let i = 0; i < musica.artists.length; i++) {
                        artistas += musica.artists[i].name;
                        i < musica.artists.length - 1 ? artistas += ', ' : ''; // vírgula entre os nomes
                    }
                }
                else {
                    artistas = musica.artists[0].name; // Remove um sinal de igual extra
                }
                resultDiv.innerHTML = `<div id="musica">
        <img src="${musica.album.images[2].url}" style="height: ${musica.album.images[2].height}px; width: ${musica.album.images[2].width}px">
        <div>
            <div id="nameM" style="font-weight: 600">${musica.name}</div>
            <div id="artistas">${artistas}</div>
        </div>
        <i class="bi bi-three-dots-vertical"></i>
        </div>`;
            }
        }
        catch (error) {
            alert('Erro: ' + error);
        }
    });
}
