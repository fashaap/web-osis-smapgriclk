import { Route, Routes } from "react-router-dom";
import "./App.css";

//components
import { Navbar } from "./components/utilities/Navbar";
import { Footer } from "./components/utilities/Footer";

import { Article } from "./pages/news/Article";
//element page

import ArticleDetail from "./pages/news/ArticleDetail";

import HomePageLayout from "./layouts/HomePageLayout";
import GalleryPageLayout from "./layouts/GalleryPageLayout";
import NewsPageLayout from "./layouts/NewsPageLayout";
import AboutPageLayout from "./layouts/AboutPageLayout";
import BidangDetail from "./pages/about/BidangDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/gallery" element={<GalleryPageLayout />} />
        <Route path="/news" element={<NewsPageLayout />}>
          <Route path="article" element={<Article />} />
        </Route>
        <Route path="/news/article/:id" element={<ArticleDetail />} />
        <Route path="/aboutUs" element={<AboutPageLayout/>} />
        <Route path="/aboutUs/kepengurusan/:grade" element={<BidangDetail/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
