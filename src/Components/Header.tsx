import { Link, useLocation } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (pathname === '/' || pathname === '/price') {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }, [pathname]);

  return (
    <header
      id="header"
      ref={ref}
      className={`header__theme-${theme ? 'white' : 'default'}`}
    >
      <div className="header__logo">
        <a href="/">
          <span>Fresh Cart</span>
        </a>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/price">식자재 가격현황</Link>
          </li>
          <li>
            <Link to="/history">구매이력</Link>
          </li>
          <li>
            <Link to="/cart">장바구니</Link>
          </li>
          <li>
            <FaCircleUser />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
