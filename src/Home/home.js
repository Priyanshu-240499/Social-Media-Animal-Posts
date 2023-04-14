import { useState, useEffect } from "react";
import Card from "./card";
import Greet from "./greeting";
import "./home.css";
let pagenum = 0;
const Home = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/tag/pet/post", {
      method: "GET",
      headers: {
        "app-id": "63c5a086343a35858775fba6"
      }
    })
      .then((response) => response.json())
      .then((data) => setmydata(data.data))
      .catch((err) => console.error(err));
  }, []);

  const loadmore = () => {
    fetch(`https://dummyapi.io/data/v1/post?page=${pagenum}`, {
      method: "GET",
      headers: {
        "app-id": "63c5a086343a35858775fba6"
      }
    })
      .then((response) => response.json())
      .then((data) => setmydata([...mydata, ...data.data]))
      .catch((err) => console.error(err));
    pagenum++;
  };

  return (
    <>
      <Greet />
      {mydata.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        mydata.map((item, ind) => {
          return <Card key={item.id + ind} data={item} />;
        })
      )}
      {/* {console.log(mydata)} */}
      <button onClick={() => loadmore()} className="loading">
        Load More...
      </button>
    </>
  );
};
export default Home;
