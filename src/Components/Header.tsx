import { Link, useLocation } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

function Header() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (pathname === '/' || pathname == '/price') {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [pathname]);

  useMotionValueEvent(scrollY, 'change', () => {
    if (theme) {
      if (ref.current) {
        if (scrollY.get() >= 75) {
          ref.current.className = 'header__theme-default';
        } else {
          ref.current.className = 'header__theme-inherit';
        }
      }
    }
  });

  return (
    <header
      id="header"
      ref={ref}
      className={theme ? 'header__theme-inherit' : 'header__theme-default'}
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
