import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">
              <img src="/logo192.png" alt="Logo" className="App-logo" />
              <span className="App-title">Книжный червь</span>
            </Link>
            <ul className="App-nav">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/catalog">Каталог</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
              <li><button className="App-button">Авторизация</button></li>
              <li><button className="App-button">Регистрация</button></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
