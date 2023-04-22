import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";
import s from "./PostList.module.css";
import RecipeReviewCard from "../Post/Post";
import api from "../../utils/api";
import PostSkeleton from "../PostSkeleton/PostSkeleton";


const PostList = () => {
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

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (



      <Container>

      {/*<PostSkeleton />*/}

      <div className="container__main">
        <Stack spacing={3}>
          <div className={s.list__grid}>
            {posts.map((el) => {
              return <RecipeReviewCard key={el._id} {...el} />;
            })}
          </div>


        </Stack>
      </div>
    </Container>

  );

};



export default PostList;
