import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfileDiv from "./profilediv";
import Card from "../Home/card";
const User = () => {
  const [postData, setPostData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const profileid = useParams().id;
  // console.log(profileid);
  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/user/${profileid}`, {
      method: "GET",
      headers: {
        "app-id": "63c5a086343a35858775fba6"
      }
    })
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error(err));

    fetch(`https://dummyapi.io/data/v1/user/${profileid}/post`, {
      method: "GET",
      headers: {
        "app-id": "63c5a086343a35858775fba6"
      }
    })
      .then((response) => response.json())
      .then((profiledata) => setPostData(profiledata.data))
      .catch((err) => console.error(err));
  }, [profileid]);

  return (
    <>
      {profileData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ProfileDiv data={profileData} />
          <h1>All Post</h1>
          {postData.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </>
      )}
    </>
  );
};
export default User;
