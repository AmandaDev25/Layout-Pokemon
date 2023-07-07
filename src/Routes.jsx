import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pokemon from './Pokemon.jsx'
import Teste from './Teste.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={< App />}>
          <Route path="/" element={<Pokemon />} />
          <Route path="teste" element={<Teste />} />
          <Route path="pokemon" element={<Pokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
