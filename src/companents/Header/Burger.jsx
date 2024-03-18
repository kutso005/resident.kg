import React, { useEffect, useState } from "react";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { get } from "../../api/api";
import i18n from "../../i18next/I18next";

const Burger = ({ header, setSearchInput }) => {
  const [search, setSearch] = useState(false);
  const [burger, setBurger] = useState(false);
  const [click, setClick] = useState("");
  const lang = localStorage.getItem("lang");
  const closeMenu = () => {
    setBurger(false);
  };
  const handleLanguage = (translation) => {
    i18n.changeLanguage(translation);
  };
  return (
    <div className="burger_block">
      {search === false ? (
        <div className="d-flex align-items-center justify-content-between">
          <div
            onClick={() => setBurger(!burger)}
            style={{ cursor: "pointer", background: "#fff", zIndex: "99" }}
          >
            <div className="burder" />
            <div className="burder_one" />
            <div className="burder_two" />
          </div>
          <NavLink to="/">
            <img
              style={{
                width: "118px",
                height: "32px",
                position: "relative",
                zIndex: "99",
              }}
              src={logo}
              alt=""
            />
          </NavLink>
          <div>
            <div
              style={{ position: "relative", zIndex: "99", cursor: "pointer" }}
            >
              <CiSearch
                size={35}
                color="#000000"
                onClick={() => setSearch(!search)}
              />
            </div>
            {search && <Search />}
          </div>
        </div>
      ) : (
        <div>
          {search && (
            <Search setSearch={setSearch} setSearchInput={setSearchInput} />
          )}
        </div>
      )}
      <div
        className={
          burger === false ? "burger_block_wight" : "burger_menu_active"
        }
        onClick={() => setBurger(!burger)}
      >
        <div className={burger === true ? "burger_menu_wiate" : "burder_wiate"}>
          <div
            onClick={() => setBurger(!burger)}
            className="d-flex align-items-end justify-content-end"
            style={{ cursor: "pointer", padding: "20px 14px 0 0" }}
          >
            <IoMdClose size={30} />
          </div>
          <div className="mt-3">
            {header?.map((el) => (
              <div
                className="to_hover_one"
                key={el.slug}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="link_to_hover">
                  <div
                    className={
                      click === el.slug
                        ? "d-flex align-items-center justify-content-between between_border"
                        : "d-flex align-items-center justify-content-between between_heaede"
                    }
                  >
                    <NavLink
                      to={
                        (el.title === "Недвижимость" &&
                          `/${lang}/real-estate`) ||
                        (el.title === "Интервью" && `/${lang}/interview`) ||
                        (el.title === "Контакты" && `/${lang}/contacts`) ||
                        (el.title === "Роскошный отдых" &&
                          `/${lang}/luxury-holiday`) ||
                        (el.title === "Продукты" && `/${lang}/products`) ||
                        (el.title === "Популярные" && `/${lang}/popular`) ||
                        (el.title === "Кыймылсыз мүлк" &&
                          `/${lang}/real-estate`) ||
                        (el.title === "Маектешүү" && `/${lang}/interview`) ||
                        (el.title === "Байланыш" && `/${lang}/contacts`) ||
                        (el.title === "Люкс майрам" &&
                          `/${lang}/luxury-holiday`) ||
                        (el.title === "Продукттар" && `/${lang}/products`) ||
                        (el.title === "Популярдуу" && `/${lang}/popular`)
                      }
                      className={
                        click === el.slug ? "active_link_one" : "link_text"
                      }
                      onClick={closeMenu}
                    >
                      <p> {el.title}</p>
                    </NavLink>
                    {el.status === null ? (
                      ""
                    ) : (
                      <div
                        className="icons_color"
                        onClick={() => setClick(el.slug)}
                      >
                        <IoIosArrowDown
                          size={22}
                          color="#000000"
                          className={click === el.slug ? "rotate" : "left"}
                        />
                      </div>
                    )}
                  </div>
                  {el.status === null ? (
                    ""
                  ) : (
                    <div
                      className={click === el.slug ? "click" : "hover_head_one"}
                    >
                      {el?.subcategory?.map((el) => (
                        <NavLink
                          key={el.slug}
                          to={`/header/${el.slug}`}
                          className="link_text"
                        >
                          {el.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="i18n">
            <a
              className="lang-switcher__item"
              href="/kg"
              onClick={() => handleLanguage("kg")}
            >
              <button
                onClick={() =>
                  handleLanguage("kg") || localStorage.setItem("lang", "kg")
                }
                className={lang === "kg" ? "activeKG" : ""}
              >
                kg
              </button>
            </a>
            <a
              className="lang-switcher__item"
              href="/ru"
              onClick={() => handleLanguage("ru")}
            >
              <button
                onClick={() => {
                  handleLanguage("ru");
                  localStorage.setItem("lang", "ru");
                }}
                className={lang === "ru" ? "activeKG" : ""}
              >
                RU
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
