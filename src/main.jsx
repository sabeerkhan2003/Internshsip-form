import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Globe from "./components/ui/globe";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#2C2C2C]'>
    <App />
    </div>
  </StrictMode>,
)
