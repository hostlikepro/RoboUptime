import { useEffect } from 'react';
import Link from './link';

function Header() {

  useEffect(() => {
    document.title = window.Config.SiteName;
  }, []);

  return (
    <div id='header'>
      <div className='container'>
        <h1 className='logo'>{window.Config.SiteName}</h1>
        <div className='navi'>
          {window.Config.Navi.map((item, index) => (
            <Link key={index} hvr={item.hover} to={item.url} tar={item.target} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
