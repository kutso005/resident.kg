import React from "react";
import { NavLink } from "react-router-dom";
import PopularAdap from "./PopularAdap";
import axios from "axios";

const Popular = ({ residentList, searchInput }) => {
  const lang = localStorage.getItem("lang");
  return (
    <div>
      <div className="adap_none">
        {residentList?.Popularnye?.slice(0, 1).map((el) => (
          <h1 className="title" style={{ margin: "120px 0 10px 0" }}>
            {el.cat_title}
          </h1>
        ))}
        <div className="popular_links" />
        <div className="all_populator_flex">
          <div className="left-column">
            {residentList?.Popularnye?.filter((el) => {
              return el.title.toLowerCase().includes(searchInput.toLowerCase());
            })
              .slice(0, 2)
              .map((el) => (
                <div>
                  {el.is_save === true ? (
                    <NavLink key={el.slug} to={`/${lang}/news/${el.slug}`}>
                      <div className="popular-col left_one">
                        <img
                          className="popular_img"
                          src={el.img}
                          alt={el.alt}
                        />
                        <div
                          className="popular_text_block"
                          style={{ padding: "0 0 15px 0" }}
                        >
                          <button className="popular_text">
                            {el.cat_title}
                          </button>
                          <h5 className="popular_title">{el.title}</h5>
                          <p className="popular_project">{el.created_at}</p>
                        </div>
                      </div>
                    </NavLink>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
          <div>
            {residentList?.Popularnye?.filter((el) => {
              return el.title.toLowerCase().includes(searchInput.toLowerCase());
            }).map((el) => (
              <>
                {el.is_main === true ? (
                  <NavLink key={el.slug} to={`/${lang}/news/${el.slug}`}>
                    <div className="popular-col">
                      <img
                        className="popular_img_center"
                        src={el.img}
                        alt={el.alt}
                      />
                      <div
                        className="popular_text_block"
                        style={{ padding: "0 0 15px 0" }}
                      >
                        <button className="popular_text">{el.cat_title}</button>
                        <h5 className="popular_title">{el.title}</h5>
                        <p className="popular_project">{el.created_at}</p>
                      </div>
                    </div>
                  </NavLink>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
          <div className="right-column">
            {residentList?.Popularnye?.filter((el) => {
              return el.title.toLowerCase().includes(searchInput.toLowerCase());
            })
              .slice(3, 5)
              .map((el) => (
                <>
                  {el.is_save === true ? (
                    <NavLink key={el.slug} to={`/${lang}/news/${el.slug}`}>
                      <div className="popular-col right_one">
                        <img
                          className="popular_img"
                          src={el.img}
                          alt={el.alt}
                        />
                        <div
                          className="popular_text_block"
                          style={{ padding: "0 0 15px 0" }}
                        >
                          <button className="popular_text">
                            {el.cat_title}
                          </button>
                          <h5 className="popular_title">{el.title}</h5>
                          <p className="popular_project">{el.created_at}</p>
                        </div>
                      </div>
                    </NavLink>
                  ) : (
                    ""
                  )}
                </>
              ))}
          </div>
        </div>
      </div>
      <div className="media_block">
        <PopularAdap residentList={residentList} />
      </div>
    </div>
  );
};

export default Popular;
