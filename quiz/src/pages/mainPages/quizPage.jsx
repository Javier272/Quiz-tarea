import React, { useState } from 'react';
import QuizForm from '../../components/QuizForm';
import { enviarRespuestas } from '../../services/quizService'; 

const QuizPage = () => {
    const [mensaje, setMensaje] = useState("");

    const handleFormSubmit = async (respuestasUsuario) => {
        try {
            // Llamamos a la función que envía las respuestas al backend y esperamos su respuesta
            const respuestaBackend = await enviarRespuestas(respuestasUsuario);
            
            // Mostramos lo que respondió el backend
            setMensaje("Servidor dice: " + respuestaBackend);
        } catch (error) {
            setMensaje("Hubo un error: " + error.message);
        }
    };

    return (
        <div>
            <h1>Responder Encuesta</h1>
            <QuizForm onSubmit={handleFormSubmit} />
            
            {mensaje && <div style={{marginTop: '20px', color: 'blue'}}>{mensaje}</div>}
        </div>
    );
};

export default QuizPage;