import { useContext } from "react";
import Post from "./Post";
import { PostStore } from "../Contexts/PostStore";

function PostList() {
  const { postList } = useContext(PostStore);
  return (
    <div className="post-list">
      {console.log(postList)}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
