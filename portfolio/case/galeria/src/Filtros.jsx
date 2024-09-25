import { useRef } from 'react';

function Filtros({ pesquisaRe }){

    const scrollRef = useRef(null);

    const lista = [
        'Tudo',
        'Natureza',
        '3D',
        'Paisagens',
        'Animais',
        'Cidade',
        'Tecnologia',
        'Arte',
        'Fotografia',
        'Abstrato',
        'Moderno',
        'Histórico',
        'Aventura',
        'Minimalista',
        'Cultural',
        'Marítimo'
    ];

    function mover(lado){
        scrollRef.current.scrollBy({
            left: (lado == 0 ? '-' : '') + scrollRef.current.clientWidth, 
            behavior: 'smooth'
        })
    };

    return(
        <div id="pesquisa">

            <div id="campP">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5c5c5c" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input 
                onKeyDown={(e) => e.key === 'Enter' && pesquisaRe(e.target.value)} 
                onChange={(e) => e.target.value == '' && pesquisaRe('')}
                type="search" placeholder="O que deseja ver?" />
            </div>

            <div id="filtros">
                <img onClick={() => mover(0)} className="btnChev" src="../public/chevron.svg" alt="seta" />

                <div ref={scrollRef} style={{overflow: 'hidden'}}>
                    {lista.map((l, index) => (
                        <button onClick={() => l == 'Tudo' ? pesquisaRe('') : pesquisaRe(l) } key={index}>{l}</button>
                    ))}
                </div>

                <img onClick={() => mover(1)} className="btnChev" style={{transform: 'rotate(180deg)'}} src="../public/chevron.svg" alt="seta" />
            </div>

        </div>
    )
};

export default Filtros;