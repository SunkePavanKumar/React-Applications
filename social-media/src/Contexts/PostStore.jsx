import { createContext, useReducer } from "react";

export const PostStore = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
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
}

function PostStoreProvider({ children }) {
  const postListData = [
    {
      title: "This is 'my first post",
      cotent:
        "Hai this is my first post that iam writing how i can post the cotent",
      id: 1,
      name: "Pavan Kumar Sunke",
      badges: ["enjoy", "happy", "peaceful", "joy"],
      reactions: 8,
    },
    {
      title: "This is 'my first2 post",
      cotent:
        "Hai this is my first post that iam writing how i can post the cotent",
      id: 2,
      name: "Pavan Kumar Sunke",
      badges: ["enjoy", "happy", "peaceful", "joy"],
      reactions: 98,
    },
  ];

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
  let [postList, dispach] = useReducer(postListAction, postListData);

  return (
    <PostStore.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostStore.Provider>
  );
}

export default PostStoreProvider;
