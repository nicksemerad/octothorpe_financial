import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import BudgetProvider from './providers/BudgetProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BudgetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BudgetProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

