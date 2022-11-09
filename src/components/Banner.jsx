import '../style/index.css';

function Banner(props) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.backgroundImg})`,
        height: `${props.heightImg}`,
      }}
    >
      {props.children}
    </div>
  );
}

export default Banner;
