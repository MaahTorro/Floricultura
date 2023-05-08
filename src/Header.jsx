import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="floricultura-header">
        <nav>
          <div>
            
            <div className="logo-container">
              <img
                src="/floricultura.png"
                alt="Logo da Floricultura"
                className="logo"/>
                <div className="h">
                <h1>Floricultura Pimentel</h1>
                </div>
            </div>
          </div>

          <ul className="lista-navbar">
            <li>
              <a href="/">Página Inicial</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
