import '../style/index.css';
import { useParams, Navigate } from 'react-router-dom';
import data from '../data/data';
import Carousel from '../components/Carousel.jsx';
import Tag from '../components/Tag.jsx';
import Stars from '../components/Stars.jsx';
import Collapse from '../components/Collapse.jsx';
import useTitle from '../index.jsx';


function Logement() {
  const params = useParams();
  //On récupère toutes les infos du logement en fonction de l'id et on créé le titre dans l'onglet
  const selectedLogement = data.find((Logement) => Logement.id === params.id);
  useTitle(`${selectedLogement.title}`);
  
  //On redirige vers la page d'erreur 404 si l'id de logement est inconnu
  if (!selectedLogement) {
    return <Navigate replace to="/error" />;
  }

  //On récupère les tags, equipements & images propres à chaque logements
  const tags = selectedLogement.tags;
  const equipments = selectedLogement.equipments;
  const pictures = selectedLogement.pictures;
  
  //On affiche tous les éléments du logement en fonction de l'id
  return (
    <div className="Logement">
      <Carousel>
        {pictures.map((picture, index) => (
          <img key={`carouselPicture_${index}`} src={picture} alt={`la location ${selectedLogement.title}`} style={{ objectFit: 'cover' }} />
        ))}
      </Carousel>

      <div className="Logement__head">
        <div className="Logement__head--info">
          <h1>{selectedLogement.title}</h1>
          <h2>{selectedLogement.location}</h2>
          {tags.map((tag, index) => (
            <Tag key={`tag_${index}`}>{tag}</Tag>
          ))}
        </div>
        
        <div className="Logement__head--host">
          <div className="host">
            <p className="host__name">{selectedLogement.host.name}</p>
            <img src={selectedLogement.host.picture} alt={`L'hôte ${selectedLogement.host.name}`} className="host__picture" />
          </div>
          <Stars>{selectedLogement.rating}</Stars>
        </div>
      </div>

      <div className="logementBody">
        <Collapse label="Description">
          <p>{selectedLogement.description}</p>
        </Collapse>

        <Collapse label="Équipements">
          {equipments.map((equipment, index) => (
            <ul key={`equipment_${index}`}>
              <li>{equipment}</li>
            </ul>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
