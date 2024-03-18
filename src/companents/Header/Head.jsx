import React, { useEffect, useState } from "react";
import "../../style.css/App.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "../../style.css/animation.css";
import Search from "./Search";
import Burger from "./Burger";
import { get } from "../../api/api";
import i18n from "../../i18next/I18next";
const Head = ({ searchInput, setSearchInput }) => {
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [header, setHeader] = useState([]);
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    const fetchData = async () => {
      const residents = await get.getHeader();
      setHeader(residents);
    };
    fetchData();
  }, []);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleLanguage = (translation) => {
    i18n.changeLanguage(translation);
  };
  return (
    <div className={scrolled ? "head_scrolled" : "head"}>
      <div className="container">
        <div className="burger_block_menu">
          <Burger header={header} setSearchInput={setSearchInput} />
        </div>
        <div className="block_flex">
          <div className="i18n">
            <a href="/kg" onClick={() => handleLanguage("kg")}>
              <button
                onClick={() =>
                  handleLanguage("kg") || localStorage.setItem("lang", "kg")
                }
                className={lang === "kg" ? "activeKG" : ""}
              >
                kg
              </button>
            </a>

            <a href="/ru" onClick={() => handleLanguage("ru")}>
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
          {search === false ? (
            <div className="center">
              {header?.map((el) => (
                <div className="to_hover" key={el.slug}>
                  <div className="link_to">
                    <a
                      href={`/${lang}/categories/${el.slug}`}
                      className="link_text"
                    >
                      <p> {el.title}</p>
                    </a>
                    {el.status === null ? (
                      ""
                    ) : (
                      <IoIosArrowDown
                        size={16}
                        color="#000000"
                        className="left"
                      />
                    )}
                    {el.status === null ? (
                      ""
                    ) : (
                      <div
                        className="hover_head"
                        style={{ padding: "20px 20px 20px 20px " }}
                      >
                        {el?.subcategory?.map((el) => (
                          <a
                            key={el.slug}
                            href={`/${lang}/category/${el.slug}`}
                            className="link_text"
                          >
                            {el.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="to_hover">
                <div className="link_to">
                  <NavLink to={`/${lang}/contacts`} className="link_text">
                    <p>Контакты</p>
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div>
            <div
              style={{ position: "relative", zIndex: "99", cursor: "pointer" }}
            >
              <CiSearch
                size={25}
                color="#000000"
                onClick={() => setSearch(!search)}
              />
            </div>
            {search && (
              <Search
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setSearch={setSearch}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
