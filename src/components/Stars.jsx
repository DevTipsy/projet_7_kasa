import '../style/index.css';
import { ReactComponent as Star } from '../assets/starry.svg';

function Stars(props) {
  let LogementRating = parseInt(props.children);
  const starArray = [...Array(5).keys()].map((i) => i + 1);

  //On affiche les étoiles en fonction de la note sur 5
  const Rating = ({ rating }) =>
    starArray.map((i) => (
      <Star
        fill="#e3e3e3"
        key={`${i}`}
        className={`${rating >= i ? 'on' : 'off'}`}
      />
    ));

  return (
    <div className="star" data-testid="etoile">
      <Rating rating={LogementRating} />
    </div>
  );
}

export default Stars;
