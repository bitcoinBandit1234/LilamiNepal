import "./card.scss";

function Card(props){
    return (
        <div className="card">
          <div className="card__body">
            <img src={props.img} className="card__image" />
            <h4 className="card__title">{props.title}</h4>
            <p className="card__description">{props.description}</p>
          </div>
          <button className="card__timer">22: 33: 40</button>
        </div>
      );
}

export default Card;