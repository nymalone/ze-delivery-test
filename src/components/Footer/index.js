import React from "react";

import "./styles.css";

const Footer = () => {
  return (
    <section className="footer">
    <div className="footer__terms">
            <p>Termos de Uso</p>
            <p>Política de privacidade</p>
     </div>
     <div className="footer__content">
            <p>© 2020 Zé Delivery - Todos os direitos reservados.</p>
     </div>
     <div className="footer__content">
            <p>BEBA COM MODERAÇÃO.</p>
     </div>
    </section>
  );
};

export default Footer;
