import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentCard from "./commentcard";
import MessageBox from "./mssbox";
const Comment = () => {
  const comments = useParams().id;
  const [selectedcard, setselectedcard] = useState([]);
  const [commentData, setcommentData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/post/${comments}`, {
      method: "GET",
      headers: {
        "app-id": "63c5a086343a35858775fba6"
      }
    })
      .then((response) => response.json())
      .then((data) => setselectedcard(data))
      .catch((err) => console.error(err));

    fetch(`https://dummyapi.io/data/v1/post/${comments}/comment`, {
      method: "GET",
      headers: {
        "app-id": "63c5a086343a35858775fba6"
      }
    })
      .then((response) => response.json())
      .then((data) => setcommentData(data.data))
      .catch((err) => console.error(err));
  }, [comments]);
  return (
    <>
      {selectedcard.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <CommentCard
            name={
              selectedcard.owner.firstName + " " + selectedcard.owner.lastName
            }
            text={selectedcard.text}
            selectedImg={selectedcard.image}
          />
          <MessageBox data={commentData} />
        </>
      )}
    </>
  );
};
export default Comment;
