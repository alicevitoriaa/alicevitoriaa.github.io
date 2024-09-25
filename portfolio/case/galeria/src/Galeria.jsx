import React, { useEffect, useState } from 'react';

function Galeria({ query }) {
  const [fotos, setFotos] = useState([]);
  const id = 'iw0pi-zis42agOR0ONImlAlKHPihi9_dYJeS5cImcKc';

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const res = await fetch(`https://api.unsplash.com/search/photos?client_id=${id}&query=${query ? query : 'parque'}&per_page=25`);

        if (!res.ok) throw new Error('Erro ao buscar as fotos');
        const fotosJSN = await res.json();

        let arr = [];
        for (let i = 0; i < fotosJSN.results.length; i += 5) {
          arr.push(fotosJSN.results.slice(i, i + 5));
        }
        setFotos(arr);

      } catch (error) {
        console.error('Erro ao buscar as fotos:', error);
      }
    };
    
    fetchFotos();
  }, [query]);
  
  function curtir(lista){
        
    const novoF = fotos.map((linha) =>
      linha.map((f) =>
        f === lista
          ? {
              ...f,
              liked_by_user: !f.liked_by_user,
              likes: f.liked_by_user ? f.likes - 1 : f.likes + 1,
            }
          : f
      )
    );

    setFotos (novoF)

  }

  return (
    <div id='galeria'>

      {fotos.map((ft, i) => (

        <div key={i} className='linha'>

          {ft.map((f, index) => (

            <div key={index} className='cmp'

              style={{ 
                backgroundImage: `url(${f.urls.small})`, 
                width: `236px`, 
                minHeight: `${(f.height) / 10}px` 
              }}>

              <div className='txt' style={{ height: `${(f.height) / 10}px`}}>

                <div className='foto'><img src={f.user.profile_image.large} alt={f.user.name || 'Perfil'} /></div>

                <p>{f.user.name || 'Autor desconhecido'}</p>
                
                <i style={{fontSize: '5px'}} className="bi bi-record-fill"></i>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>

                    <i onClick={() => curtir(f)} className={`bi ${f.liked_by_user ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                    {f.likes}

                  </div>
                  <div>|</div>
                  
                  <i style={{cursor: 'pointer'}} onClick={() => window.open(f.links.download)} className="bi bi-arrow-90deg-right"></i>

                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Galeria;
