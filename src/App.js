import React, { useEffect, useState } from "react";
import Main from "./companents/main/Main";
import Head from "./companents/Header/Head";
import Header from "./companents/Header/Header";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Luxury from "./pages/Luxury/Luxury";
import Interview from "./pages/RouterApp/Interview";
import AboutEstate from "./pages/RouterApp/AboutEstate";
import Contacts from "./pages/RouterApp/Contacts";
import AllDetail from "./pages/details/AllDetail";
import { api } from "./api/api";
import Product from "./pages/RouterApp/Product";
import Design from "./pages/RouterApp/Design";
import HeaderDerail from "./pages/details/HeaderDerail";
import SubCat from "./pages/details/SubCat";
import Us from "./pages/RouterApp/Us";
import TabsSeach from "./pages/Post/TabsSeach";

const App = () => {
  const [residentList, setResidentList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  let lang = localStorage.getItem("lang");
  if (!lang) {
    localStorage.setItem("lang", "ru");
    lang = "ru";
  }
  const location = useLocation();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
  }, [location]);

  useEffect(() => {
    if (lang) {
      api.get(`/${lang}/list?search=${searchInput}`).then((response) => {
        setResidentList(response.data);
      });
    }
  }, [lang]);

  return (
    <div>
      <Header />
      <Head searchInput={searchInput} setSearchInput={setSearchInput} />
      <Routes>
        <Route path="/" element={<Navigate to={`/${lang}`} />} />
        <Route
          path={`/${lang}`}
          element={
            <Main residentList={residentList} searchInput={searchInput} />
          }
        />
        <Route
          path="/:lang/real-estate"
          element={<AboutEstate residentList={residentList} />}
        />
        <Route
          path="/:lang/luxury-holiday"
          element={<Luxury residentList={residentList} />}
        />
        <Route
          path="/:lang/interview"
          element={<Interview residentList={residentList} />}
        />
        <Route
          path="/:lang/news/:slug"
          element={
            <AllDetail
              searchInput={searchInput}
              residentList={residentList}
              setSearchInput={setSearchInput}
            />
          }
        />
        <Route path="/:lang/contacts" element={<Contacts />} />
        <Route
          path="/:lang/products"
          element={<Product residentList={residentList} />}
        />
        <Route
          path="/:lang/popular"
          element={<Design residentList={residentList} />}
        />
        <Route
          path="/:lang/category/:slug"
          element={<HeaderDerail residentList={residentList} />}
        />
        <Route path="/:lang/categories/:slug" element={<SubCat />} />
        <Route path="/:lang/about-us" element={<Us />} />
        <Route
          path="/:lang/tabs/:name"
          element={
            <TabsSeach residentList={residentList} searchInput={searchInput} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
