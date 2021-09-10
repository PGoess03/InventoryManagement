import "./Item.css";
import Button from "./Button";

const Item = (props) => {
  return (
    <div className="item">
      <div className="data">
        <h1>{props.brand}</h1>
        <p>{props.amount}</p>
      </div>
      <div className="button">
        <Button>+</Button>
        <Button>-</Button>
      </div>
    </div>
  );
};

export default Item;
