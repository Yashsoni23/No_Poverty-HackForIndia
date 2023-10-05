import Combinenav from "../Nav/Combinednav/Combinenav";
import Post from "../session/Post";
import { useEffect, useState } from "react";

export default function Index() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://no-poverty.adaptable.app/posts/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <Combinenav />
      {posts.length > 0 && posts.map((post) => <Post {...post} />)}
    </>
  );
}
