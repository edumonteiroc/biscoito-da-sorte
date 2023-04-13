import { useState } from "react";
import "./estilo.css"



function App(){
    
    const [Frases, setFrases] = useState([]);
    const [Texto, setTexto] = useState([
        'Siga os bons e aprenda com eles.', 
        'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.',
        'Não compense na ira o que lhe falta na razão.',
        'A vida trará coisas boas se tiver paciência.',
        'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
        'O bom-senso vale mais do que muito conhecimento.',
        'Uma bela flor é incompleta sem as suas folhas.',
        'A paciência na adversidade é sinal de um coração sensível.',
        'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.'
    ]);
    
    function AbrirBiscoito(){
        const NumeroAleatorio = Math.floor(Math.random() * Texto.length);
        setFrases('"'+ Texto[NumeroAleatorio] + '"');
    }


    return(
        <div>
            <div className="container">
                <img src={require('./assets/biscoito.png')}/>
                <button onClick={AbrirBiscoito}>Abrir Biscoito</button>
                <h2 className="Frases">{Frases}</h2>
            </div>
        </div>
    );
}

export default App;