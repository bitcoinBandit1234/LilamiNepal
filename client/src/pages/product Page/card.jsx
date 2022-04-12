import "./card.scss";

function Card(props){
    return (
        <div className="card">
          <div className="card__body">
            <img src={props.img} className="card__image" />
            <h4 className="card__title">{props.title}</h4>
            <p className="card__timer">Time left: {props.timer}</p>
          </div>
        </div>
      );
}

export default Card;