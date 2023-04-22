import React from 'react';
import PostList from "../../PostList/PostList";
import RightSide from "../../RightSide/RightSide";

const PostListPage = ({posts}) => {
  return (
      <>
          <section className="section__main">
              <PostList posts={posts} />
          </section>

          <section className="section__main">
              <RightSide />
          </section>
      </>
  );
};

export default PostListPage;
