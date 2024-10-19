// src/components/Courses.tsx
import React, { useState } from 'react';
import SectionMaterial from './SectionMaterial'; // Импортируем компонент с материалами для разделов

const courseContent = [
  {
    id: 1,
    title: 'Введение в Python',
    description: 'Изучите основы Python: переменные, типы данных, операторы.',
    materials: 'Python — это высокоуровневый язык программирования. Основные типы данных включают int, float, str, bool.',
    completed: false
  },
  {
    id: 2,
    title: 'Условные операторы и циклы',
    description: 'Научитесь управлять потоком выполнения программ с помощью if, else, while и for.',
    materials: 'Условные операторы: if, else, elif. Циклы: while, for. Пример: if x > 0: print("Положительное число").',
    completed: false
  },
  {
    id: 3,
    title: 'Функции',
    description: 'Изучите, как создавать функции и переиспользовать код.',
    materials: 'Функции в Python создаются с помощью ключевого слова def. Пример: def my_function(): pass.',
    completed: false
  },
  {
    id: 4,
    title: 'Модули и библиотеки',
    description: 'Узнайте, как использовать встроенные модули и внешние библиотеки.',
    materials: 'Модули импортируются с помощью оператора import. Пример: import math. Внешние библиотеки можно устанавливать через pip.',
    completed: false
  }
];

function Courses() {
  const [progress, setProgress] = useState(0); // Прогресс курса
  const [tokens, setTokens] = useState(0); // Токены за завершение разделов
  const [selectedSection, setSelectedSection] = useState(null); // Выбранный раздел для просмотра материалов
  const [completedSections, setCompletedSections] = useState(courseContent); // Состояние завершенных разделов

  const handleCompleteSection = (sectionId) => {
    const updatedSections = completedSections.map((section) =>
      section.id === sectionId ? { ...section, completed: true } : section
    );
    setCompletedSections(updatedSections);
    const newProgress = Math.min(progress + 25, 100); // Увеличиваем прогресс на 25% за каждый завершенный раздел
    setProgress(newProgress);
    setTokens(tokens + 10); // Начисляем 10 токенов за каждый завершенный раздел
    setSelectedSection(null); // Сбрасываем выбранный раздел
  };

  return (
    <div>
      <h1>Курс: Python для начинающих</h1>
      <p>Прогресс курса: {progress}%</p>
      <p>Ваши токены: {tokens}</p>

      <ul>
        {completedSections.map((section) => (
          <li key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            {section.completed ? (
              <p>Этот раздел завершен ✅</p>
            ) : (
              <>
                {/* Кнопка для просмотра материалов раздела */}
                <button onClick={() => setSelectedSection(section)}>
                  Просмотреть материалы
                </button>
                {/* Отображаем кнопку завершения только после просмотра материалов */}
                {selectedSection && selectedSection.id === section.id && (
                  <div>
                    <SectionMaterial materials={section.materials} />
                    <button onClick={() => handleCompleteSection(section.id)}>
                      Завершить раздел (получить 10 токенов)
                    </button>
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>

      {progress === 100 && (
        <button>
          <a href="/quiz">Пройти квиз для завершения курса</a>
        </button>
      )}
    </div>
  );
}

export default Courses;
