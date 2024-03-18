import React from "react";
import { NavLink } from "react-router-dom";

const Tags = ({ data, setSearchInput }) => {
  const lagn = localStorage.getItem("lang");
  return (
    <div>
      {data?.tags === null ? (
        ""
      ) : (
        <div>
          <h6 className="title deteil_title deteils_title_el">теги:</h6>
          <div>
            <NavLink
              to={`/${lagn}/tabs/${data?.tags}`}
              onClick={() => localStorage.setItem("tags", data?.tags)}
              className="tags"
            >
              <span className="tag">{data?.tags}</span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tags;
