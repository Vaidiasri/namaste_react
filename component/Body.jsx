import "../style/body.css"
import Card from "./Card";

const Body = () => {
  return (
    <>
      <div>
        <div className="search">
          <input placeholder=" Search...." />
          <button>Search</button>
        </div>
        <div className="container">
          {
            // make  a seprate card component
          }
          <Card />
        </div>
      </div>
    </>
  );
};
export default Body;
