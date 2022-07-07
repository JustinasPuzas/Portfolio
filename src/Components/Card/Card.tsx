import "./Card.css";

export interface CardProps {
  children: React.ReactNode;
  id: string;
}

const Card = (props: CardProps) => {
  return (
    <div id={props.id} className="card">
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
