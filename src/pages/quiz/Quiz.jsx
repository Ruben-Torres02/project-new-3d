import React, { useCallback } from 'react';
import './Quiz.css';
import useQuizStore from '../../stores/use-quiz-store'; // Asegúrate de que la ruta sea correcta

const Quiz = () => {
    const { quiz, incrementQuizProgress } = useQuizStore(); // Desestructuración del estado y la función del store

    const handleButtonNext = useCallback(() => {
        incrementQuizProgress(); // Llama a la función para incrementar el progreso del quiz
    }, [incrementQuizProgress]);

    return (
        <div className='quiz-container'>
            <h1 className='quiz-header'>Hola</h1>
            <p className='quiz-progress'>Progreso del Quiz: {quiz.percentageQuizCompleted}%</p>
            <button onClick={handleButtonNext}>Siguiente</button>
        </div>
    );
};

export default Quiz;