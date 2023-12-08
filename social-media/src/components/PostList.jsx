import { useContext } from "react";
import Post from "./Post";
import { PostStore } from "../Contexts/PostStore";
import Message from "./Message";
import axios from "axios";
import Loading from "./Loading";

function PostList() {
  const { postList, fetching } = useContext(PostStore);

  return (
    <>
      {!fetching && <Loading />}
      {fetching && postList.length === 0 && <Message />}
      {fetching && (
        <div className="post-list">
          {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

export default PostList;
