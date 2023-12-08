import { useContext, useRef } from "react";
import { PostStore } from "../Contexts/PostStore";

function Form() {
  const userId = useRef(null);
  const content = useRef(null);
  const title = useRef(null);
  const reactions = useRef(null);
  const hashtags = useRef(null);
  let { addPost } = useContext(PostStore);

  function createPost(event) {
    event.preventDefault();

    const postObj = {
      title: title.current.value,
      body: content.current.value,
      id: userId.current.value,
      tags: hashtags.current.value.split(" "),
      reactions: reactions.current.value,
    };

    addPost(postObj);
    title.current.value = "";
    content.current.value = "";
    userId.current.value = "";
    hashtags.current.value = "";
    reactions.current.value = "";
  }

  return (
    <form onSubmit={createPost}>
      <div className="mb-3 ml-10">
        <label htmlFor="userID" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="UserID"
          ref={userId}
          placeholder="enter the user id"
        />
      </div>
      <div className="mb-3 ml-10">
        <label htmlFor="title" className="form-label">
          Please enter the title
        </label>
        <input
          type="text"
          ref={title}
          className="form-control"
          id="title"
          placeholder="How are you today..."
        />
      </div>
      <div className="mb-3 ml-10">
        <label htmlFor="Content" className="form-label">
          Please enter the post content
        </label>
        <textarea
          type="text"
          ref={content}
          rows={4}
          className="form-control"
          id="Content"
          placeholder="Tell me more about your day"
        />
      </div>

      <div className="mb-3 ml-10">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactions}
          className="form-control"
          id="reactions"
          placeholder="Enter how many have reacted to the post"
        />
      </div>

      <div className="mb-3 ml-10">
        <label htmlFor="hashtags" className="form-label">
          Hash tags
        </label>
        <input
          type="text"
          ref={hashtags}
          className="form-control"
          id="hashtags"
          placeholder="Enter the hash tags with space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default Form;
