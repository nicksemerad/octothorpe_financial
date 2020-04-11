import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import IncomeProvider from "./providers/IncomeProvider";



initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <IncomeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </IncomeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

