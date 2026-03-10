import React, { useState } from 'react';
import QuizForm from '../../components/QuizForm';
import { enviarRespuestas } from '../../services/quizService'; 

const QuizPage = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState("");

    const handleFormSubmit = async (respuestasUsuario) => {
        try {
            setError("");
            // Llamamos a la función que envía las respuestas al backend y esperamos su respuesta
            const respuestaBackend = await enviarRespuestas(respuestasUsuario);


            setPokemonData(respuestaBackend); // Guardamos la respuesta del backend en el estado

        } catch (error) {
            setError("Hubo un error: " + error.message);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Cual es tu Pokemon?</h1>
            
            <QuizForm onSubmit={handleFormSubmit} />
            
            {/* Si recibimos datos del backend, mostramos la imagen y el nombre */}
            {pokemonData && (
                <div style={{marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px'}}>
                    <h2>¡Eres {pokemonData.nombre}!</h2>
                    <img src={pokemonData.imagen} alt={pokemonData.nombre} style={{ width: '150px' }} />
                </div>
            )}

            {/* Si hubo un error, lo mostramos */}
            {error && <div style={{color: 'red', marginTop: '20px'}}>{error}</div>}
        </div>
    );
};

export default QuizPage;