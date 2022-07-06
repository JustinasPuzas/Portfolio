import "./Card.css";

export interface CardProps {
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
