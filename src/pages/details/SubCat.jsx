import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../api/api";

const SubCat = () => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    api.get(`/${lang}/${slug}`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="interview_one_higth">
      <div className="container">
        {data?.slice(0, 1).map((el) => (
          <h1 className="title" style={{ margin: "120px 0 10px 0" }}>
            {el.cat_title}
          </h1>
        ))}
        <div className="popular_links" />
        <div className="git_flex_gt mt-3">
          {data?.map((el) => (
            <div>
              <NavLink
                className="a"
                key={el.slug}
                to={`/${lang}/news/${el.slug}`}
              >
                <div className="git_img " style={{ margin: "0 20px 20px 0" }}>
                  <img className="git_img_two" src={el.img} alt="" />
                  <div className="cntnt_hldr">
                    <p className="one_text">{el.cat_title}</p>
                    <h5
                      className="popular_title one_title"
                      style={{ margin: "0" }}
                    >
                      {el.title}
                    </h5>
                    <p className="popular_project one_project">
                      {el.updated_at}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCat;
