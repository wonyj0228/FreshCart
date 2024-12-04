import homeImg from '../assets/images/homeImg.jpg';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Home() {
  return (
    <>
      <img src={homeImg} alt="Homepage Background Img" className="home__img" />
      <div className="home__wrapper">
        <div className="home__col1">
          <p>
            신선한 식재료 <br />
            현명하게 구매하는 법
          </p>
          <button>
            <span>장보러가기</span>
            <FaLongArrowAltRight />
          </button>
        </div>
        <div className="home__col2">
          <h1>Fresh</h1>
          <h1>Cart</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
