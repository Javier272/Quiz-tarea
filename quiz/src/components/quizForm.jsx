import React, { useState } from "react";

function QuizForm() {
    // Definimos el estado 'answers' como un objeto para guardar todas las respuestas en un solo lugar
    const [answers, setAnswers] = useState({
        pregunta1: '',
        pregunta2: '',
        pregunta3: ''
    });

    // Esta función se activa cada vez que el usuario cambia una opción en cualquier <select>
    const handleChange = (e) => {
        // Extraemos el 'name' (qué pregunta es) y el 'value' (qué opción eligió) del elemento
        const { name, value } = e.target;

        // Actualizamos el estado manteniendo lo que ya había (...answers) 
        // y cambiando solo la pregunta que se acaba de responder [name]: value
        setAnswers({
            ...answers,
            [name]: value
        });
    };

    // Esta función se activa al hacer clic en el botón "Enviar"
    const handleSubmit = (e) => {
        // Evitamos que la página se recargue (comportamiento por defecto de los formularios)
        e.preventDefault();
        
        // Mostramos en la consola el objeto final con todas las respuestas
        console.log('Respuestas:', answers);
        
        // Espacio para lógica futura: por ejemplo, decidir qué Pokémon eres según los valores
    };

    return (
        // El evento onSubmit vincula el formulario con nuestra función de envío
        <form onSubmit={handleSubmit}>
            
            <label>
                ¿Cuál es tu color favorito?
                <br />
                <select name="pregunta1" value={answers.pregunta1} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                ¿Cual es tu animal favorito?
                <br />
                <select name="pregunta2" value={answers.pregunta2} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                ¿Cuál es tu poder favorito?
                <br />
                <select name="pregunta3" value={answers.pregunta3} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <br />
            <br />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default QuizForm;