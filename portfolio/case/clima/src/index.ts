
const resultDiv = document.getElementById('result') as HTMLDivElement;

async function buscarClima(cidade: string) {
  try{

    const cm = await (await fetch(`https://api.weatherapi.com/v1/current.json?q=${cidade}&key=bb6036ddbf414034bc1223225243009`)).json();

    buscarMusica(cm ? cm.location.name : cidade)

  } catch(error){

    alert('Erro: ' + error);

  }
}

async function buscarMusica(cidade: string) {
  try {
    const id = '5b70263a2c0443d1a2751a297e89548e';
    const sId = '29b3adcc9805434fad09395c0c7e2eb1';

    let tkR = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + btoa(`${id}:${sId}`) },
      body: 'grant_type=client_credentials'
    });

    const tk = await tkR.json();

    if (!tk.access_token) {
      throw new Error('Erro ao obter token do Spotify');
    }

    const musicaR = await fetch(`https://api.spotify.com/v1/users/search?q=${cidade}&type=track&limit=1`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tk.access_token}`
      }
    });

    const musica = await musicaR.json();

    if (!musica || !musica.tracks || musica.tracks.total === 0) {
      throw new Error('Nenhuma música encontrada para a cidade fornecida.');
    }else{
      
      let artistas: string = '';

      if (musica.artists.length > 1) {
          for (let i = 0; i < musica.artists.length; i++) {
              artistas += musica.artists[i].name;
              i < musica.artists.length - 1 ? artistas += ', ' : '' // vírgula entre os nomes
          }
      } else {
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

  } catch (error) {
    alert('Erro: ' + error);
  }
}