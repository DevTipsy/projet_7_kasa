import { Link } from 'react-router-dom';
import data from '../data/data';
import LogementCard from './LogementCard.jsx';
import '../style/index.css';

function LogementList() {
  return (
    <div className="Logementlist">
      {data.map(({ title, cover, id }) => (
        <div className='logementLink' key={`location_${id}`}>
          <Link to={`/Logement/${id}`}>
            <LogementCard cover={cover} title={title} id={id} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LogementList;
