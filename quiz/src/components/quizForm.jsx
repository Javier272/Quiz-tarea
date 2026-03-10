import React, { useState } from "react";

function QuizForm({ onSubmit }) {
    // Definimos el estado 'answers' como un objeto para guardar todas las respuestas en un solo lugar
    const [answers, setAnswers] = useState({
        pregunta1: '',
        pregunta2: '',
        pregunta3: '',
        pregunta4: '',
        pregunta5: ''
    });

    // Esta función se activa cada vez que el usuario cambia una opción en cualquier <select>
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers({
            ...answers,
            [name]: parseInt(value, 10) // Convertimos el valor a número entero
        });
    };

    // Esta función se activa al hacer clic en el botón "Enviar"
    const handleSubmit = (e) => {
        // Evitamos que la página se recargue al enviar el formulario
        e.preventDefault();
        
        console.log('Respuestas:', answers);
        
        if (onSubmit) {
            onSubmit(answers); // Enviamos el objeto completo de respuestas al componente padre
        }
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
                    <option value="5">5 c</option>
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
            <label>
                ¿Cuál es tu poder favorito?
                <br />
                <select name="pregunta4" value={answers.pregunta4} onChange={handleChange}>
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
                <select name="pregunta5" value={answers.pregunta5} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>

            <button type="submit">Enviar</button>
        </form>
    );
}

export default QuizForm;