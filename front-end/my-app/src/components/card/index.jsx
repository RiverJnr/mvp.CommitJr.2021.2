import './style.css'
import ImgCard from '../../assets/photo_size_select_actual_24px_outlined.svg';

function Card() {
    return (
        <div className="card-container">
          <img className="imgCard" src={ ImgCard } alt="Card img"></img>
        </div>
    )
}

export default Card;