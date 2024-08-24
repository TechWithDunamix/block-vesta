import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/lato'; // Defaults to weight 400
import '@fontsource/poppins/300.css'; // Light weight
import '@fontsource/inter'; // Defaults to weight 400

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
