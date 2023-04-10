import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Footer.css";

const Footer = () => {
  const { state } = useContext(GlobalContext);

  const iconClassName = () =>
    `redes-sociales ${
      state.isDark ? "redes-sociales-dark" : "redes-sociales-light"
    }`;

  return (
    <div>
      <Outlet />
      <div
        className={`container-footer ${
          state.isDark ? "container-footer-dark" : "container-footer-light"
        }`}
      >
        <div>
          <img
            className={`container-img ${
              state.isDark ? "container-img-dark" : ""
            }`}
            src="/public/images/DH.png"
            alt="Logo DH"
          />
        </div>
        <div className="container-redes">
          <img
            className={iconClassName()}
            src="/public/images/ico-facebook.png"
            alt="Logo Facebook"
          />
          <img
            className={iconClassName()}
            src="/public/images/ico-instagram.png"
            alt="Logo Instagram"
          />
          <img
            className={iconClassName()}
            src="/public/images/ico-whatsapp.png"
            alt="Logo Whatsapp"
          />
          <img
            className={iconClassName()}
            src="/public/images/ico-tiktok.png"
            alt="Logo TikTok"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
