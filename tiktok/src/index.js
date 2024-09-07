import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Nội dung comment của lession ${id}`
            })
        );
    }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
