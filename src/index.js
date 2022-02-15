import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{display: 'flex'}}>
    <App />
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
