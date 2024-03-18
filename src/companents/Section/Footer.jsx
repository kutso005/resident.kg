import React, { useEffect } from "react";
import "../../style.css/main.css";
import logo from "../../img/Logo_resident_text.svg";
import fec from "../../img/Black.svg";
import twit from "../../img/соцсети.svg";
import insta from "../../img/соцсети (1).svg";
import tiktiok from "../../img/соцсети (2).svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("lang");
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);
  return (
    <div className="footer">
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ padding: "80px 0 20px 0 " }}
        >
          <img
            className="footer_logo"
            style={{ width: "245px", height: "67" }}
            src={logo}
            alt=""
          />
          <div>
            <img src={fec} alt="" />
            <img src={twit} alt="" />
            <img src={insta} alt="" />
            <img src={tiktiok} alt="" />
          </div>
        </div>
        <div className="popular_links" />
        <div className="all_footet row" style={{ padding: "20px 0 20px 0 " }}>
          <div className="with_prosent col-lg-3 col-md-6 col-sm-6 col-12">
            <p className="project">{t("key0")}</p>
          </div>
          <div className="with_prosent end_one  columns col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="d-flex flex-column ">
              <h6 className="popular_title " style={{ margin: "0 0 10px 0" }}>
                {t("key1")}
              </h6>
              <NavLink to={`/${lang}/real-estate`} className="footer_a">
                {t("key2")}
              </NavLink>
              <NavLink to={`/${lang}/luxury-holiday`} className="footer_a">
                {t("key3")}
              </NavLink>
              <NavLink to={`/${lang}/interview`} className="footer_a">
                {t("key4")}
              </NavLink>
              <NavLink to="#" className="footer_a">
                {t("key5")}
              </NavLink>
              <NavLink to={`/${lang}/products`} className="footer_a">
                {t("key6")}
              </NavLink>
            </div>
          </div>
          <div className="with_prosent end columns col-lg-3 col-md-6 col-sm-6 col-12">
            <div className=" d-flex flex-column">
              <h6 className="popular_title " style={{ margin: "0 0 10px 0" }}>
                {t("key7")}
              </h6>
              <NavLink to={`/${lang}/about-us`} className="footer_a">
                {t("key8")}
              </NavLink>
              <NavLink to={`/${lang}/contacts`} className="footer_a">
                {t("key9")}
              </NavLink>
            </div>
          </div>
          <div className="with_prosent end column col-lg-3 col-md-6 col-sm-6 col-12  ">
            <div className="d-flex flex-column ">
              <h6 className="popular_title " style={{ margin: "0 0 10px 0" }}>
                г. Бишкек, ул. <br /> Нуркамала 29
              </h6>
              <NavLink to="#" className="footer_a">
                {t("key10")}
              </NavLink>
              <a
                href="mailto:journal.resident.kg@gmail.com"
                className="footer_a as_bas"
              >
                journal.resident.kg@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <p
            className="project"
            style={{ color: " rgba(151, 151, 151, 1)", fontSize: "12px" }}
          >
            Все права защищены
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
