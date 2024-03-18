import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../../api/api";
import img from "../../img/no.png";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Acomment = ({ data }) => {
  const value = data.propertyName;
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState("");
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const post = data?.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post(`/comment/`, { post, user, comment })
      .then((response) => {
        console.log(response.data.post);
        if (response.data.post === post) {
          setModal(true);
          setTimeout(() => {
            setTime(true);
          }, 1000);
        } else {
          setModal(false);
        }
      })
      .catch((error) => {});
  };
  const activeIS = data?.comment?.map((el) => el.is_active);
 
  return (
    <div>
      <h6 className="title deteil_title deteils_title_el">{t("key12")}</h6>
      <form className="rewiev" onSubmit={handleSubmit}>
        <input
          className="rewiev_input"
          type="text"
          placeholder="Имя и фамилия"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <textarea
          className="rewiev_textarea"
          name="Напишите отзыв о статье"
          id=""
          cols="30"
          rows="10"
          placeholder="Напишите отзыв о статье"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn_rewiev">
          {t("key13")}
        </button>
      </form>
      <div>
        {activeIS === false ? (
          <div className="notice">
            <span className="rewiev_p">{t("key14")}</span>
          </div>
        ) : (
          <div style={{ margin: "0 0 40px 0" }}>
            {data?.comment?.map((el) => (
              <div key={el.post}>
                {el.is_active === false ? (
                  ""
                ) : (
                  <div
                    className="d-flex"
                    style={{ margin: "40px 0 0 0" }}
                    key={el.id}
                  >
                    <img src={img} className="rewiev_img" alt="" />
                    <div style={{ margin: "0 0 0 10px" }}>
                      <h6 style={{ margin: "0 " }} className="rewiev_h6">
                        {el.user}
                      </h6>
                      <span className="rewiev_span_one">{el.comment}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <div
          className={modal ? "modal_comment_one" : "modal_comment"}
          onClick={() => setModal(!modal)}
        >
          {time ? (
            <div className="modal_comment_text d-flex align-items-center justify-content-between">
              <span style={{ margin: "0 20px 0 0" }}>{t("key15")}</span>
              <IoIosCloseCircleOutline
                size={30}
                style={{ cursor: "pointer" }}
                onClick={() => setModal(!modal)}
              />
            </div>
          ) : (
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Acomment;
