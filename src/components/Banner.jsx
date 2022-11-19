import '../style/index.css';

function Banner(props) {
  return (
    <div
      className="introImg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.backgroundImg})`,
        
      }}
    >
      {props.children}
    </div>
  );
}

export default Banner;
