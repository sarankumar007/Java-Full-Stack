import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Image from './Image';
import Desc from './Desc';
import Rate from './Rate';
import Logo from './Logo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="main">
      <div id="logo">
    <Logo />
    </div>
    <div>
    <App /></div>
    </div>
    <div id="down">
      <div>    <Image />
</div>
<div>
    <Desc />
    <Rate /></div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
