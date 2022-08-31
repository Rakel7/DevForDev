import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ArticleByUser from './components/ArticleByUser';
import Creation from './pages/Creation';
import Remerciement from './pages/Remerciement';

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articlebyuser" element={<ArticleByUser />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="/remerciement" element={<Remerciement />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
