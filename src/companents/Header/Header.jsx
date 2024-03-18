import React from "react";
import logo from "../../img/Logo_resident_text.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const lang = localStorage.getItem("lang");
  return (
    <div
      style={{
        width: "100%",
        height: "107px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #D0D0D0",
      }}
      className="header_section"
    >
      <NavLink to={"/" + lang}>
        <img style={{ width: "245px", height: "67px" }} src={logo} alt="" />
      </NavLink>
    </div>
  );
};

export default Header;
