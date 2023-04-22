import React from "react";
import s from "./App.module.css";

import Header from "../Header/Header";
import LeftSide from "../LeftSide/LeftSide";
import PostList from "../PostList/PostList";
import RightSide from "../RightSide/RightSide";
import Footer from "../Footer/Footer";

import NotFoundPage from "../NotFound/NotFoundPage";

import { Route, Routes } from "react-router-dom";

import PostPage from "../Pages/PostPage/PostPage";


function App() {

  return (
    <>

      <Header />

      <div className={s.main__container} >

          <section className="section__main">
              <LeftSide />
          </section>

        <section className="section__main">
          <PostList />
        </section>

          <section className="section__main">
              <RightSide />
          </section>


      </div>

        <Routes>

                <Route path="/postpage" element={<PostPage/>}/>

        </Routes>

      <Footer />
    </>
  );
}

export default App;
