import { useContext } from "react";
import Post from "./Post";
import { PostStore } from "../Contexts/PostStore";
import Message from "./Message";
import axios from "axios";

function PostList() {
  const { postList } = useContext(PostStore);
  return postList.length === 0 ? (
    <Message />
  ) : (
    <div className="post-list">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
