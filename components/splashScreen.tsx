// components/SplashScreen.tsx
import React from 'react';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src="/icons/logo.png" alt="Логотип Кафе Пауза" className="logo" />
      <h1>Кафе Пауза</h1>
      <style jsx>{`
        .splash-screen {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #ffffff;
          transition: opacity 0.5s;
        }
        .logo {
          width: 150px; // или любой другой размер
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
