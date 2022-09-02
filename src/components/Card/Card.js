import { Button } from "../Button";
import "./card.css";

export const Card = (props) => (
  <div className="serves_item" key={props.text}>
    <Button variant="secondary">
      {props.text}
    </Button>
  </div>
);
