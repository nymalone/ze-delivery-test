import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { GET_CATEGORY_LIST, GET_PRODUCT_LIST } from "../../services/queries";

import "./styles.css";
import {
  FaPlus,
  FaCocktail,
  FaWineGlassAlt,
  FaPizzaSlice,
} from "react-icons/fa";
import { GiGlassShot, GiMeltingIceCube } from "react-icons/gi";
import { IoIosBeer } from "react-icons/io";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import covidinfo from "../../assets/info-covid.png";

const ProductsList = withRouter(
  ({
    match: {
      params: { pocId },
    },
  }) => {
    const categoriesData = useQuery(GET_CATEGORY_LIST);

    const productsData = useQuery(GET_PRODUCT_LIST, {
      variables: {
        id: pocId,
        search: "",
        categoryId: null,
      },
    });

    const findIcon = (id) => {
      switch (id) {
        case "94":
          return <IoIosBeer />;
        case "95":
          return <FaCocktail />;
        case "92":
          return <FaWineGlassAlt />;
        case "96":
          return <GiGlassShot />;
        case "97":
          return <FaPizzaSlice />;
        default:
          return <GiMeltingIceCube />;
      }
    };

    if (categoriesData.loading || productsData.loading)
      return (
        <div className="products__container">
          <div className="products__content">
            <div className="products__categories">
              <div className="products__category">
                <p>Carregando os melhores produtos...</p>
              </div>
            </div>
          </div>
        </div>
      );
    if (categoriesData.error || productsData.error)
      return (
        <div className="products__container">
          <div className="products__content">
            <div className="products__categories">
              <div className="products__category">
                <p>Error</p>
              </div>
            </div>
          </div>
        </div>
      );

    return (
      <>
        <div className="products__container">
          <Header />
          <div className="products__categories">
            {categoriesData.data.allCategory.map((category) => (
              <div className="products__category" key={category.id}>
                <div className="category__content">
                  {findIcon(category.id)}
                  <p>{category.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="covid__container">
            <div className="covid__infocard">
              <figure className="covid__figure">
                <img src={covidinfo} alt="alert" />
              </figure>
              <span>
                <p>
                  <strong>Prevenção ao coronavírus</strong>
                </p>
                <p>Conheça nossas iniciatvas</p>
              </span>
            </div>
          </div>

          <div className="products__maincontainer">
            {productsData.data.poc.products.map((product) => (
              <div className="products__card" key={product.id}>
                <div className="card__image">
                  <img src={product.images[0].url} alt="product" />
                </div>
                <hr />
                <div className="card__title">
                  <p>{product.title}</p>
                </div>
                <div className="card__price">
                  <p>R$ {product.productVariants[0].price}</p>
                </div>
                <div className="add__button">
                  <FaPlus />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
);

export default ProductsList;
