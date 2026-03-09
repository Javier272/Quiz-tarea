import React, { useState } from "react";

function QuizForm() {
    const [answers, setAnswers] = useState({
        pregunta1: '',
        pregunta2: '',
        pregunta3: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers({
            ...answers,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(answers); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Pregunta 1
                <select name="pregunta1" value={answers.pregunta1} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
            <br />
            <label>
                Pregunta 2
                <select name="pregunta2" value={answers.pregunta2} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
            <br />
            <label>
                Pregunta 3
                <select name="pregunta3" value={answers.pregunta3} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default QuizForm;