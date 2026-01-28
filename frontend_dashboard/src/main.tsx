import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

// Prevent auto-scroll on page load
if (typeof window !== 'undefined') {
  // Scroll to top on page load
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
  
  // Prevent scroll restoration
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
