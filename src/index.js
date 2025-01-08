import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from "./app";
const rootElement = document.getElementById('rickmorty-app');
const root = createRoot(rootElement)

root.render(<App />);
