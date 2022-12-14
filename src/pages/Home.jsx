import '../style/index.css';
import Banner from '../components/Banner';
import LogementList from '../components/LogementList.jsx';
import ImgHome from '../assets/rocks.png';
import useTitle from '../index.jsx';

function Home() {
  //On créé le titre dans l'onglet et on insère les composants Banner et LogementList
  useTitle('Accueil');
  return (
    <div className="home">
      <Banner backgroundImg={ImgHome}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      
      <div className="logements">
        <LogementList />
      </div>
    </div>
  );
}

export default Home;
