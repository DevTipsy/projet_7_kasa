import { useEffect } from 'react';

function PageTitle(props) {
  useEffect(() => {
    document.title = `Kasa | ${props.children}`;
  },
  );
}

export default PageTitle;
