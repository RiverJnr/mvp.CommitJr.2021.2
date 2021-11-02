import './style.css';

function Card(props) {
    return (
        <div className="card-container">
          <img src={ props.img } alt="props.alt"></img>
        </div>
    )
}

export default Card;