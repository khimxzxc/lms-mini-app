// src/components/Quiz.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: 'Что такое переменная в Python?',
    answers: ['Контейнер для хранения данных', 'Тип данных', 'Оператор', 'Функция'],
    correct: 0
  },
  {
    question: 'Какой оператор используется для создания условных выражений?',
    answers: ['if', 'for', 'while', 'def'],
    correct: 0
  },
  {
    question: 'Как объявить функцию в Python?',
    answers: ['function myFunc()', 'def myFunc()', 'fn myFunc()', 'declare myFunc()'],
    correct: 1
  },
  {
    question: 'Как импортировать модуль в Python?',
    answers: ['import module', 'include module', 'require module', 'using module'],
    correct: 0
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [tokens, setTokens] = useState(0); // Дополнительные токены за прохождение квиза
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
      setTokens(50); // Награда за прохождение квиза
    }
  };

  const handleCompleteQuiz = () => {
    navigate('/courses'); // Возвращаемся на страницу курсов после завершения квиза
  };

  return (
    <div>
      {completed ? (
        <div>
          <h2>Вы завершили квиз! Ваш результат: {score} из {questions.length}</h2>
          <p>Вы заработали {tokens} токенов за успешное завершение квиза!</p>
          <button onClick={handleCompleteQuiz}>Вернуться к курсам</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index} onClick={() => handleAnswer(index)}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
