import { useState } from 'react';
import '../style/index.css';
import leftArrow from '../assets/arrowLeft.png';
import rightArrow from '../assets/arrowRight.png';

function Carousel(props) {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length] = useState(children.length);
  const picturesNumber = length - 1;

  //On fait recommencer le défilement à la première image lorsque l'on est sur la dernière image et que l'on clique sur la flèche suivante
  const next = () => {
    if (currentIndex < picturesNumber) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (currentIndex === picturesNumber) {
      setCurrentIndex(0);
    }
    return currentIndex;
  };

//On repart sur la dernière image lorsque l'on est sur la première image et que l'on clique sur la flèche précédent
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(picturesNumber);
    }
    return currentIndex;
  };

  //On enlève les flèches de défilement si il n'y a qu'une image dans le carrousel
  let isOne = false;
  if (length === 1) {
    isOne = true;
  }

  return (
    <div className="carousel">
      <img
        onClick={prev}
        className={isOne ? 'carouselNone' : 'carousel__leftarrow'}
        src={leftArrow}
        alt="Flèche gauche carousel"
      />
      <div className="carousel__content">
        <div
          className="carousel__content--img"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>
        <p className={isOne ? 'carouselNone' : 'carousel__content--count'}>
          {currentIndex + 1}/{picturesNumber + 1}
        </p>
      </div>
      <img
        data-testid="arrowNext"
        onClick={next}
        className={isOne ? 'carouselNone' : 'carousel__rightarrow'}
        src={rightArrow}
        alt="Flèche droite carousel"
      />
    </div>
  );
}

export default Carousel;
