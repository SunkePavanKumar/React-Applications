import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

export const PostStore = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

function postListAction(postList, action) {
  console.log(postList, action);
  if (action.type === "delete") {
    let newPostList = postList.filter((data) => data.id != action.payload.id);
    return newPostList;
  }

  if (action.type === "addPost") {
    return [action.payload.data, ...postList];
  }

  if (action.type === "addData") {
    return action.payload;
  }
}

function PostStoreProvider({ children }) {
  let [postList, dispach] = useReducer(postListAction, []);
  let [fetching, setfetching] = useState(false);
  function addPost(data) {
    dispach({
      type: "addPost",
      payload: { data },
    });
  }

  function deletePost(id) {
    console.log(`the id with the post deleted ${id}`);
    dispach({
      type: "delete",
      payload: {
        id,
      },
    });
    console.log(postList);
  }

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://dummyjson.com/posts",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        dispach({
          type: "addData",
          payload: response.data.posts,
        });
        console.log(JSON.stringify(response.data));
        setfetching(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <PostStore.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostStore.Provider>
  );
}

export default PostStoreProvider;
