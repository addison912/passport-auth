import { FunctionComponent } from "react";
import { IPost } from "../../types";
import { posts } from "../../data";
import { useParams } from "react-router-dom";

const Post: FunctionComponent = () => {
  const params = useParams();
  const id: string | undefined = params.id;
  const postId = id && Number(id) ? Number(id) : -1;
  const post = posts.find((i) => i.id === postId) as IPost;
  return (
    <div className="post">
      <img src={post.img} className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
