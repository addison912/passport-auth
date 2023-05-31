import { FunctionComponent } from "react";
import { IPost } from "../../types";
import { Link } from "react-router-dom";

interface CardProps {
  post: IPost;
}

const Card: FunctionComponent<CardProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="card link">
      <span className="title">{post.title}</span>
      <img className="img" src={post.img} />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read More</button>
    </Link>
  );
};

export default Card;
