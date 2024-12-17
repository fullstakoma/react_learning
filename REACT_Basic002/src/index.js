import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // スタイルを適用

// Reactアプリケーションのルートを指定
const root = ReactDOM.createRoot(document.getElementById('root'));

// Appコンポーネントをマウント
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);