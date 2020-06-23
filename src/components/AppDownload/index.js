import React from "react";

import "./styles.css";

import play from "../../assets/play_store_badge.png";
import apple from "../../assets/apple_store_badge.png";
import footer from "../../assets/footer-img.png";

const AppDownload = () => {
  return (
    <section className="section">
      <div className="section__text">
        <h2>Já baixou o app?</h2>
        <br />
        <span>
          Entregamos onde estiver, através de nosso parceiro mais próximo de
          você.
        </span>
      <div className="section__badge">
        <figure>
          <img src={play} alt="play store logo" />
        </figure>
        <figure>
          <img src={apple} alt="apple store logo" />
        </figure>
      </div>
      </div>
      <div className="section__bottom">
        <img src={footer} alt="app on mobile" />
      </div>
    </section>
  );
};

export default AppDownload;
