import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostStore } from "../Contexts/PostStore";

function Post({ post }) {
  const { deletePost } = useContext(PostStore);
  return (
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-post"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>

        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.cotent}</p>
        {post.badges.map((badge) => (
          <span className="badge text-bg-secondary" key={badge}>
            {badge}
          </span>
        ))}

        <div className="alert alert-primary reactions" role="alert">
          This post has {post.reactions} reactions currently.
        </div>
      </div>
    </div>
  );
}

export default Post;
