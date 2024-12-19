import { FaSearch, FaFire } from 'react-icons/fa';
import priceImg from '../assets/images/priceImg.png';
import type1 from '../assets/images/price/price01.jpg';
import type2 from '../assets/images/price/price02.jpg';
import type3 from '../assets/images/price/price03.jpg';
import type4 from '../assets/images/price/price04.jpg';
import type5 from '../assets/images/price/price05.jpg';
import type6 from '../assets/images/price/price06.jpg';
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
          <div className="price__category-list">
            <div className="price__category-item">
              <img src={type1} />
              <div>
                <span>식량작물</span>
              </div>
            </div>
            <div className="price__category-item">
              <img src={type2} />
              <div>
                <span>채소류</span>
              </div>
            </div>
            <div className="price__category-item">
              <img src={type3} />
              <div>
                <span>특용작물</span>
              </div>
            </div>
            <div className="price__category-item">
              <img src={type4} />
              <div>
                <span>과일류</span>
              </div>
            </div>
            <div className="price__category-item">
              <img src={type5} />
              <div>
                <span>축산물</span>
              </div>
            </div>
            <div className="price__category-item">
              <img src={type6} />
              <div>
                <span>수산물</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
