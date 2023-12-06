import { createContext, useReducer } from "react";

export const PostStore = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListAction(postList, action) {
  console.log(postList, action);
}

function PostStoreProvider({ children }) {
  function addPost() {}

  function deletePost() {}
  const [postList, dispach] = useReducer(postListAction, []);

  return (
    <PostStore.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostStore.Provider>
  );
}

export default PostStoreProvider;
