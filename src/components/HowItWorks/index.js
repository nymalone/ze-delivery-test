import React from "react" 

import "./styles.css";

import ondeImg from '../../assets/1.svg';
import favoritasImg from '../../assets/2.svg';
import facilitaImg from '../../assets/3.svg';

const HowItWorks = () => {
    return (
        <div className="how-it-works">
        <h2>Como funciona o Zé Delivery?</h2>
        <div className="info__icons">
            <div className="info__text1">
                <img className="info__img" src={ondeImg}></img>
                <p>Onde você estiver</p>
                <p className="info__description">Achamos as bebidas geladinhas na sua área e levamos até você!</p>
            </div>
            <div className="info__text2">
                <img className="info__img" src={favoritasImg}></img>
                <p>Só as favoritas</p>
                <p className="info__description">Você pode escolher entre cervejas, vinhos, água, energéticos, refrigerantes, salgadinhos e até gelo!</p>
            </div>
            <div className="info__text3">
                <img className="info__img" src={facilitaImg}></img>
                <p>Facilita seu brinde</p>
                <p className="info__description">Suas bebidas chegam geladinhas e super rápidas, prontas para brindar!</p>
            </div>

        </div>
        </div>
    )
}

export default HowItWorks;