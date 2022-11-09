import '../style/index.css';
import Banner from '../components/Banner';
import LogementList from '../components/LogementList.jsx';
import ImgHome from '../assets/rocks.png';
import useTitle from '../index.jsx';

function Home() {
  useTitle('Accueil');
  //si version mobile, bannière plus petite
  let isMobile = window.innerWidth < 600;
  return (
    <div className="home">
      <Banner backgroundImg={ImgHome} heightImg={isMobile ? '125px' : '220px'}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="logements">
        <LogementList />
      </div>
    </div>
  );
}

export default Home;
