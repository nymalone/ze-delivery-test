import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

import { GET_POC_LIST } from "../../services/queries";

import "./styles.css";
import { FaMapMarkerAlt } from "react-icons/fa";

import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import GetPoc from "./GetPoc";
import HowItWorks from "../../components/HowItWorks";
import AppDownload from "../../components/AppDownload";
import Footer from "../../components/Footer";

const dateNow = new Date();

const Home = withRouter(({ history }) => {
  const [latLng, setLatLng] = useState({ lat: null, lng: null });

  const { data, error, loading } = useQuery(GET_POC_LIST, {
    variables: {
      algorithm: "NEAREST",
      lat: latLng.lat,
      long: latLng.lng,
      now: dateNow,
    },
  });

  useEffect(() => {
    if (data && data.pocSearch[0])
      history.push(`/products/${data.pocSearch[0].id}`);
  }, [data]);

  return (
    <div className="home">
      <Header />
      <div className="main-container">
        <div className="main-container__input">
          <div className="main-container__icon">
            <FaMapMarkerAlt />
          </div>
          <SearchBar latLng={latLng} setLatLng={setLatLng} history={history} />
        </div>
      {data && !data.pocSearch[0] ? (
        <>
          <p className="main-container__error">
            Não foi possível encontrar o endereço.
          </p>
          </>
      ) : null}
      </div>
      <HowItWorks />
      <AppDownload />
      <Footer />
    </div>
  );
});

export default Home;
