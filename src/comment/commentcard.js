import "./comcard.css";
const CommentCard = ({ selectedImg, text, name }) => {
  return (
    <>
      <div className="card">
        <img width="100%" src={selectedImg} alt="img" />
      </div>
      <div className="comcard-text">
        <h4>
          {text}
          <span style={{ color: "grey" }}>~{name}</span>
        </h4>
      </div>
    </>
  );
};
export default CommentCard;
