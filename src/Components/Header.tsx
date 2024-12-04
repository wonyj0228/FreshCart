import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';

function Header() {
  return (
    <header id="header">
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
