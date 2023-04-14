import "./profilediv.css";
const ProfileDiv = ({ data }) => {
  const regidtration_year = data.registerDate.split("-");
  return (
    <div className="prdiv">
      <div className="profile-photo">
        <img src={data.picture} width="100%" alt="profile-pic" />
      </div>
      <div className="profile-detail">
        <h1>
          {data.firstName} {data.lastName}
        </h1>
        <h2>
          {data.location.city}, {data.location.country}
        </h2>
        <h4>Member Since {regidtration_year[0]}</h4>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>
    </div>
  );
};
export default ProfileDiv;
