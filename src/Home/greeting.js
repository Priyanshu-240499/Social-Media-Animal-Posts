import "./greeting.css";
const Greet = () => {
  return (
    <div className="greet-container">
      <div className="greet">
        <h1>
          Hi
          <span aria-labelledby="greet" role="img">
            👋
          </span>
        </h1>
        <h2>Welcome to My-Connect</h2>
        <p>
          Love Animals <span style={{ color: "red" }}>❣</span>
        </p>
      </div>
    </div>
  );
};
export default Greet;
