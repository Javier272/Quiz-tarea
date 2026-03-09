import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Formulario para descubrir tu pokémon</h1>
            <h3>Para comezar quiz da click en el botón</h3>

            <button onClick={() => navigate('/quiz')}>Empezar</button>
        </div>
    )
}

export default Home;