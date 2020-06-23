import React, { Component } from "react" 

import "./styles.css";
import { GoLocation } from "react-icons/go"

const SearchBar = ({ handleButtonClick }) => (
  <div className="search-container">
    <div className="search-container__text"><span>Bebidas geladas</span> a <span>preço</span> de mercado na sua casa <span>agora</span></div>
    <div className="search-container__actions">
      <input
        className="search-container__input"
        placeholder="Inserir endereço para ver preço"
      />
      <button className="search-container__button" onClick={handleButtonClick}>
        <GoLocation />
      </button>
    </div>
  </div>
);

export default SearchBar;