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
                    <option value="1">Rojo</option>
                    <option value="2">Azul</option>
                    <option value="3">Verde</option>
                    <option value="4">Amarillo</option>
                    <option value="5">Morado</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                ¿Cual es tu animal favorito?
                <br />
                <select name="pregunta2" value={answers.pregunta2} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">Perro</option>
                    <option value="2">Gato</option>
                    <option value="3">Rata</option>
                    <option value="4">Pajaro</option>
                    <option value="5">Mono</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                ¿Cuál es tu poder favorito?
                <br />
                <select name="pregunta3" value={answers.pregunta3} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">Lanzar fuego</option>
                    <option value="2">Lanzar Agua</option>
                    <option value="3">Lanzar tierra</option>
                    <option value="4">Lanzar rayos</option>
                    <option value="5">Lanzar aire</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                ¿Cuantas mascotas tienes?
                <br />
                <select name="pregunta4" value={answers.pregunta4} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4+</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                ¿Cuantos años tienes?
                <br />
                <select name="pregunta5" value={answers.pregunta5} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">1-10</option>
                    <option value="2">11-20</option>
                    <option value="3">21-30</option>
                    <option value="4">31-40</option>
                    <option value="5">41 +</option>
                </select>
            </label>
                        <br />
                        <br />


            <button type="submit">Enviar</button>
        </form>
    );
}



export default QuizForm;

