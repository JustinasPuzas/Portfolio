import "./Card.css";

export interface CardProps {
  children: React.ReactNode;
  id: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <div id={props.id} className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
