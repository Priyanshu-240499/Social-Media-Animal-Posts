import "./mssbox.css";
const date = new Date();
let year = date.getFullYear();
const MessageBox = ({ data }) => {
  return (
    <>
      {data.length === 0
        ? ""
        : data.map((item) => {
            const str = item.publishDate.split("-");
            return (
              <div key={item.id} className="comment-box">
                <div className="comment-box-sub">
                  <div className="comment-user">
                    <img
                      width="40px"
                      height="40x"
                      src={item.owner.picture}
                      alt="comment-avatar"
                    />
                    <div className="comment-user-desc">
                      <p>
                        {item.owner.firstName} {item.owner.lastName}
                      </p>
                      <span>{year - str[0]} years ago</span>
                    </div>
                  </div>
                  <div className="message">
                    <h3>{item.message}</h3>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};
export default MessageBox;
