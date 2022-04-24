import "./card.scss";
import toSecond from "../../helpers/timeCalculator";
import Countdown from "react-countdown";

function Card(props){

  const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
      <></>
    } else { 
      return <span>{(days*24)+hours}hr:{minutes}min:{seconds}sec</span>;
    }
  };

    return (
        <div className="card">
          <div className="card__body">
            <img src={props.img} className="card__image" />
            <h4 className="card__title">{props.title}</h4>
            <Countdown date={Date.now()+(toSecond(props.endDate+ " ", props.endTime+":12"))} renderer={renderer}/>
          </div>
        </div>
      );
}

export default Card;