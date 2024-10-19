// src/components/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebaseConfig';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle(); // Вход через Google
      console.log('Пользователь вошел:', user);
      navigate('/courses'); // Перенаправление на страницу курсов после успешного входа
    } catch (error) {
      setError('Ошибка входа через Google. Попробуйте еще раз.');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <button onClick={handleGoogleLogin} style={{ padding: '1rem', fontSize: '1.2rem' }}>
        Войти через Google
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
