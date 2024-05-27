import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./assets/reset.css";
import "./assets/layout.css";
import "./assets/style.css";
import "./assets/responsive.css";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { globalState } from './redux/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={globalState}>
      <App />
    </Provider>
  </BrowserRouter>
)
