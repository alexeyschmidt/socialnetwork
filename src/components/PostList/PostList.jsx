import React from "react";
import { Container, Stack } from "@mui/material";
import s from "./PostList.module.css";
import RecipeReviewCard from "../Post/Post";


const PostList = ({posts}) => {

  return (
      <Container>

      {/*<PostSkeleton />*/}

      <div className="container__main">
        <Stack spacing={3}>
          <div className={s.list__grid}>
            {posts && posts.map((el) => {
              return <RecipeReviewCard key={el._id} {...el} />;
            })}
          </div>
        </Stack>
      </div>
    </Container>

  );

};



export default PostList;
