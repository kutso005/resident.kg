import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
const RealEstate = ({ residentList, searchInput }) => {
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        {residentList?.Nedvizhimost?.slice(0, 1).map((el) => (
          <h1 className="title" style={{ margin: "120px 0 10px 0" }}>
            {el.cat_title}
          </h1>
        ))}
        <GoArrowUpRight size={26} style={{ margin: "115px 0 0 0" }} />
      </div>
      <div className="popular_links" />
      <div className="git_flex">
        {residentList?.Nedvizhimost?.filter((el) => {
          return el.title.toLowerCase().includes(searchInput.toLowerCase());
        })
          .slice(0, 5)
          .map((el) => (
            <NavLink
              className="a"
              key={el.slug}
              to={`/${lang}/news/${el.slug}`}
            >
              <div className="git_img wihte_pop">
                <img className="git_img_two" src={el.img} alt="" />
                <div className="cntnt_hldr">
                  <p className="one_text">{el.cat_title}</p>
                  <h5 className="popular_title one_title">{el.title}</h5>
                  <p className="popular_project one_project">{el.created_at}</p>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default RealEstate;
