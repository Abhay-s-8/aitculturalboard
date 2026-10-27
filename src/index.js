import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The Aakriti festival pages are loaded only when visited.
const AakritiPage = lazy(() => import('./aakriti/AakritiPage'));
const EventPage = lazy(() => import('./aakriti/EventPage'));
const NotFound = lazy(() => import('./component/NotFound'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#151515' }} />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/aakriti" element={<AakritiPage />} />
          <Route path="/aakriti/:slug" element={<EventPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
