import { useState } from 'react';
import '../style/index.css';
import arrowOpen from '../assets/arrowUp.png';
import arrowClose from '../assets/arrowDown.png';

function Collapse(props) {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="collapse">
      <div
        onClick={toggle}
        className="collapseTitle"
        style={{
          width: `${props.widthCollapse}`,
          margin: `${props.marginCollapse}`,
        }}
      >
        {props.label}
        {open ? (
          <img src={arrowOpen} alt="collapse open" />
        ) : (
          <img src={arrowClose} alt="collapse close" />
        )}
      </div>
      {open && (
        <div
          className="collapseContent"
        >
          {props.children}
        </div>
      )}
    </div>
  );
}

export default Collapse;
