import { FaSearch, FaFire, FaCoins } from 'react-icons/fa';
import { BiSolidCategory } from 'react-icons/bi';
import priceImg from '../assets/images/priceImg.png';
import PriceFrugal from '../components/PriceFrugal';

function Price() {
  return (
    <div className="price__wrapper">
      <div className="price__bg">
        <img src={priceImg} className="price__img" />
      </div>

      <div className="price__search">
        <input placeholder="품목을 입력해주세요" />
        <FaSearch />
      </div>

      <div className="price_layout">
        <div className="price__search-hot">
          <span>
            HOT <FaFire />
          </span>
          <span className="price__search-keyword">고구마</span>
          <span className="price__search-keyword">사과</span>
          <span className="price__search-keyword">토마토</span>
          <span className="price__search-keyword">쌀</span>
          <span className="price__search-keyword">고춧가루</span>
        </div>

        <div className="price__frugal">
          <h1>이번 주 알뜰정보</h1>
          <div className="price__frugal-list">
            <PriceFrugal />
            <PriceFrugal />
            <PriceFrugal />
          </div>
        </div>

        <div className="price__category">
          <h1>부류별 가격현황</h1>
          <div className="price__category-list"></div>
        </div>
      </div>
    </div>
  );
}

export default Price;
