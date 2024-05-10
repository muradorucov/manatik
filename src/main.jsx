import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./assets/reset.css";
import "./assets/layout.css";
import "./assets/style.css";
import "./assets/responsive.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
