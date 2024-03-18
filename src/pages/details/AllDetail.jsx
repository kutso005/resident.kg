import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { useTranslation } from "react-i18next";
import Acomment from "../Post/Acomment";
import NewsSlider from "./NewsSlider";
import Tags from "./Tags";

const AllDetail = ({ residentList, searchInput, setSearchInput }) => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  const lang = localStorage.getItem("lang");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  useEffect(() => {
    api.get(`/post/${slug}/`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="details-popular">
        <div className="container">
          <div className="row">
            <div className="col-md-9 description_class">
              <div>
                <h1
                  className="title"
                  style={{ margin: "0 0 10px 0", width: "100%" }}
                >
                  {data.title}
                </h1>
                <div className="d-flex align-items-center">
                  <button
                    className="popular_text"
                    style={{ margin: "0 10px 0 0" }}
                  >
                    {data.cat_title}
                  </button>
                  <span className="large" style={{ margin: "0 10px 0 0 " }}>
                    {data?.user}
                  </span>
                  <span
                    className="popular_project"
                    style={{ margin: "0px 10px 0 0" }}
                  >
                    {data.created_at}
                  </span>
                  <span
                    className="popular_project d-flex align-items-center "
                    style={{ margin: "0", fontSize: "16px", color: "" }}
                  >
                    <GoEye size={18} style={{ margin: "0 5px 0 5px" }} />{" "}
                    {data.views}
                  </span>
                </div>
                <img className="img_deteails" src={data.img} alt="baseUrl" />
              </div>
              <div>
                {data?.detail?.map((el) => (
                  <div key={el.slug}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: el.description ? el.description : "",
                      }}
                    />
                  </div>
                ))}
                <NewsSlider data={data} />
                <Tags data={data} setSearchInput={setSearchInput} />
                <Acomment data={data} />
              </div>
            </div>
            <div className="col-md-3">
              <h6 className="title deteil_title deteils_title_el">
                {t("key11")}
              </h6>
              {residentList?.Popularnye?.filter((el) => {
                return el.title
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              }).map((el) => (
                <a
                  className="a"
                  key={el.slug}
                  href={`/${lang}/news/${el.slug}`}
                >
                  <div style={{ marginBottom: "20px" }} className="cntnt_flex">
                    <img
                      style={{ width: "100%", height: "209px" }}
                      className="cntnt_img"
                      src={el.img}
                      alt=""
                    />
                    <div className="cntnt_hldr margin_child">
                      <p className="one_text">{el.cat_title}</p>
                      <h5
                        className="popular_title one_title line-high"
                        style={{ width: "100%" }}
                      >
                        {el.title}
                      </h5>
                      <p className="popular_project one_project">
                        {el.created_at}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDetail;
