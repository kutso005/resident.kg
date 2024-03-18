import React from "react";
import Mains from "../Section/Mains";
import Popular from "../Section/Popular";
import RealEstate from "../Section/RealEstate";
import LuxuryРoliday from "../Section/LuxuryРoliday";
import Interview from "../Section/Interview";
import Products from "../Section/Products";
import OffersCompany from "../Section/OffersCompany";
import Footer from "../Section/Footer";
const Main = ({ residentList, searchInput }) => {
  return (
    <>
      <div className="withe_bg">
        <div className="container">
          <Mains searchInput={searchInput} />
          <Popular residentList={residentList} searchInput={searchInput} />
          <RealEstate residentList={residentList} searchInput={searchInput} />
          <LuxuryРoliday
            residentList={residentList}
            searchInput={searchInput}
          />
          <Interview residentList={residentList} searchInput={searchInput} />
          <Products residentList={residentList} searchInput={searchInput} />
          <OffersCompany
            residentList={residentList}
            searchInput={searchInput}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
