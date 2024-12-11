import { FaLongArrowAltDown } from 'react-icons/fa';

function PriceFrugal() {
  return (
    <div className="price__frugal-item">
      <div className="price__frugal-info">
        <h2>
          생강 (국산) <span>1kg</span>
        </h2>
        <div className="price__frugal-week">
          <span className="price__last">지난주</span>
          <span>11,559원</span>
        </div>
        <div className="price__frugal-week">
          <span className="price__this">이번주</span>
          <span>9,233원</span>
        </div>
      </div>
      <div className="price__frugal-arrow price__down">
        <FaLongArrowAltDown />
        <span>-20.1%</span>
      </div>
    </div>
  );
}

export default PriceFrugal;
