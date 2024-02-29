import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from "./App.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="mx-auto max-w-6xl px-4">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    </React.StrictMode>,
);