import "./card.css";
import { useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const [isliked, setisliked] = useState(false);
  // console.log(data);
  return (
    <div className="card">
      <Link to={{ pathname: `/user/${data.owner.id}` }} className="profile">
        <div className="avatar">
          <img width="60%" height="60%" src={data.owner.picture} alt="avatar" />
        </div>
        <div className="avatar-name">
          <p className="avatar-name-1">
            {data.owner.firstName} {data.owner.lastName}
          </p>
          <p className="avatar-name-2">{data.publishDate}</p>
        </div>
      </Link>
      <div className="img">
        <img src={data.image} alt="img" />
      </div>
      <div className="name">{data.text}</div>
      <div className="tags">
        {data.tags.map((item) => (
          <Link
            to={{ pathname: `/search/${item}` }}
            style={{ textDecoration: "none", color: "black" }}
            key={item}
            className="tags-btn"
          >
            #{item}
          </Link>
        ))}
      </div>
      <div className="likes">
        <div className="likes-1">
          <span>
            <FavoriteIcon
              onClick={() => setisliked(!isliked)}
              style={{ color: isliked ? "red" : "grey" }}
            />
          </span>
          <span>{isliked ? data.likes + 1 : data.likes} Likes</span>
        </div>
        <div className="likes-2">
          <Link to={{ pathname: `/comment/${data.id}` }}>
            <CommentIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
