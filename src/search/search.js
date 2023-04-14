import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../Home/card";
const Search = () => {
  const [tagData, setTagData] = useState([]);
  const tag = useParams().tag;

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/tag/${tag}/post`, {
      method: "GET",
      headers: {
        "app-id": "63c5a086343a35858775fba6"
      }
    })
      .then((response) => response.json())
      .then((data) => setTagData(data.data))
      .catch((err) => console.error(err));
  }, [tag]);

  return (
    <>
      {tagData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {tagData.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </>
      )}
    </>
  );
};
export default Search;
