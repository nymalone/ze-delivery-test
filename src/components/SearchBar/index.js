import React from "react" 

import "./styles.css";

import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng
} from "react-google-places-autocomplete";
import { PropTypes } from "prop-types";

import "react-google-places-autocomplete/dist/assets/index.css";

const SearchBar = ({ setLatLng }) => {
  const getLatLong = async res => {
    await geocodeByPlaceId(res.place_id)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        setLatLng(latLng);
      });
  };

  const inputStyle = {
    minWidth: "350px",
    height: "48px",
    fontWeight: "lighter",
    boxSizing: "border-box",
    color: "rgb(51, 51, 51)",
    backgroundColor: "rgb(255, 255, 255)",
    fontSize: "16px",
    paddingRight: "20px",
    paddingLeft: "48px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(204, 204, 204)",
    borderImage: "initial",
    margin: "auto",
    textDecoration: "none",
    outline: "none",
    lineHeight: "20px",
  };

  return (
 

<div className="search-container">
    <div className="search-container__text"><span>Bebidas geladas</span> a <span>preço</span> de mercado na sua casa <span>agora</span></div>
    <div className="search-container__actions">
      <GooglePlacesAutocomplete
        onSelect={getLatLong}
        inputStyle={inputStyle}
        placeholder="Inserir endereço para ver preço"
      />
    </div>
  </div>

  );
};

SearchBar.propTypes = {
  setLatLng: PropTypes.func
};

export default SearchBar;