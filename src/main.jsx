import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AOS from 'aos';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LangProvider } from './Components/Context/langContext';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
    <App />
    </LangProvider>
  </React.StrictMode>
)
