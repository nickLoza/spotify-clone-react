import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SongProvider } from './context/SongContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SongProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SongProvider>
  </React.StrictMode>,
)
