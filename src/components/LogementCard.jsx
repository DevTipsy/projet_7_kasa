import '../style/index.css';

function LogementCard({ cover, title, id }) {
  return (
    <ul>
      <li
        key={id}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${cover})`,
        }}
        className="Logementcard"
      >
        <h2>{title}</h2>
      </li>
    </ul>
  );
}

export default LogementCard;
