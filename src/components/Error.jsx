import '../style/index.css';
import { Link } from 'react-router-dom';
import useTitle from '../index.jsx';

function Error() {
  useTitle("Page d'erreur");
  return (
    <div className="error">
      <div className='error404'>
        <h1>404</h1>
      </div>
      <p className="errorDescription">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorLink">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
