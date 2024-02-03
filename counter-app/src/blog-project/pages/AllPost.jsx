// @ts-nocheck
import React, { useEffect, useState } from "react";
import service from "../appwrite/conf";
import { Container, PostCard } from "../componets";

function AllPost() {
  const [posts, setPots] = useState([]);
  useEffect(() => {}, []);
  service.getPosts([]).then((posts) => {
    if (posts) {
      setPots(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        {posts.map((post) => (
          <PostCard key={post.$id} post={post} />
        ))}
      </Container>
    </div>
  );
}

export default AllPost;
