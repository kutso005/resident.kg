import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
const LuxuryРoliday = ({ residentList, searchInput }) => {
  const lang = localStorage.getItem("lang");
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        {residentList?.LuxuryVacation?.slice(0, 1).map((el) => (
          <h1 className="title" style={{ margin: "120px 0 10px 0" }}>
            {el.cat_title}
          </h1>
        ))}
        <GoArrowUpRight size={26} style={{ margin: "120px 0 0 0" }} />
      </div>
      <div className="popular_links" />
      <div className="popular_grid_one">
        <div className="center-column">
          {residentList?.LuxuryVacation?.filter((el) => {
            return el.title.toLowerCase().includes(searchInput.toLowerCase());
          })
            .slice(2, 3)
            .map((el) => (
              <NavLink
                className="a"
                key={el.slug}
                to={`/${lang}/news/${el.slug}`}
              >
                <div className="center_one" style={{ cursor: "pointer" }}>
                  <img
                    className="popular_img_big big_img"
                    src={el.img}
                    alt={el.alt}
                  />
                  <div
                    className="popular_text_block"
                    style={{ padding: "375px 0 15px 0" }}
                  >
                    <button className="popular_text">{el.cat_title}</button>
                    <h5 className="popular_title size_text">{el.title}</h5>
                    <p className="popular_project">{el.created_at}</p>
                  </div>
                </div>
              </NavLink>
            ))}
        </div>
        <div className="git_flex_scroll">
          <div className="git_flex" style={{ margin: "0 0 0 0" }}>
            {residentList?.LuxuryVacation?.filter((el) => {
              return el.title.toLowerCase().includes(searchInput.toLowerCase());
            }).map((el) => (
              <NavLink
                className="a"
                key={el.slug}
                to={`/${lang}/news/${el.slug}`}
              >
                <div
                  className="popular-col left_one"
                  style={{
                    margin: "0 0 0 0",
                    cursor: "pointer",
                    width: "309px",
                  }}
                >
                  <img className="popular_img" src={el.img} alt={el.alt} />
                  <div className="cntnt_hldr">
                    <p className="one_text">{el.cat_title}</p>
                    <h5 className="popular_title one_title">{el.title}</h5>
                    <p className="popular_project one_project">
                      {el.created_at}
                    </p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryРoliday;
