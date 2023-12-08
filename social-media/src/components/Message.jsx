import React, { useContext } from "react";
import { PostStore } from "../Contexts/PostStore";

function Message() {
  const { getPosts } = useContext(PostStore);
  return (
    <center style={{ margin: "50px" }}>
      <h1>No post Avaliable</h1>
      <button className="btn btn-primary" onClick={getPosts}>
        get posts
      </button>
    </center>
  );
}

export default Message;
