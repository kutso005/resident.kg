import React from "react";
import { NavLink } from "react-router-dom";

const Interview = ({ residentList }) => {
  const lang = localStorage.getItem("lang");
  return (
    <div className="interview_one_higth">
      <div className="container">
        {residentList?.Interviews?.slice(0, 1).map((el) => (
          <h1 className="title" style={{ margin: "120px 0 10px 0" }}>
            {el.cat_title}
          </h1>
        ))}
        <div className="popular_links" />
        <div className="git_flex_git">
          {residentList?.Interviews?.map((el) => (
            <NavLink
              className="a"
              key={el.slug}
              to={`/${lang}/news/${el.slug}`}
            >
              <div className="git_img">
                <img className="git_img_two" src={el.img} alt="" />
                <div className="cntnt_hldr">
                  <p className="one_text">{el.cat_title}</p>
                  <h5 className="popular_title one_title">{el.title}</h5>
                  <p className="popular_project one_project">{el.updated_at}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interview;
