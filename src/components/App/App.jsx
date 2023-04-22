import React, {useEffect, useState} from "react";
import s from "./App.module.css";

import Header from "../Header/Header";
import LeftSide from "../LeftSide/LeftSide";
import PostList from "../PostList/PostList";
import RightSide from "../RightSide/RightSide";
import Footer from "../Footer/Footer";

import NotFoundPage from "../NotFound/NotFoundPage";

import { Route, Routes } from "react-router-dom";

import PostPage from "../Pages/PostPage/PostPage";
import MainPage from "../Pages/MainPage";
import api from "../../utils/api";
import PostListPage from "../Pages/PostListPage/PostListPage";


function App() {
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [page, setPage] = React.useState(1);



    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getPostsList(page)])
            .then(([userData, postData]) => {
                setCurrentUser(userData);
                setPosts(postData.posts);

            })
            .catch((err) => console.log(err));
    }, [page]);
  return (
    <>
      <Header />

      <div className={s.main__container} >
          <section className="section__main">
              <LeftSide />
          </section>

        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/post/:id" element={<PostPage />}/>
            <Route path="/post-list" element={<PostListPage posts={posts} />}/>
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
