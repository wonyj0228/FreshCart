import { FaSearch, FaFire } from 'react-icons/fa';
import priceImg from '../assets/images/priceImg.png';

function Price() {
  return (
    <div className="price__wrapper">
      <div className="price__bg">
        <img src={priceImg} className="price__img" />
      </div>

      <div className="price__search">
        <input placeholder="품목을 입력해주세요" />
        <FaSearch />
        <div className="price__search-hot">
          <span>HOT</span>
          <FaFire />
          <span>고구마</span>
          <span>사과</span>
          <span>토마토</span>
          <span>쌀</span>
          <span>고춧가루</span>
        </div>
      </div>
      <div className="price_layout"></div>
    </div>
  );
}

export default Price;
