// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!); // createRoot로 루트 설정
root.render(<App />);
