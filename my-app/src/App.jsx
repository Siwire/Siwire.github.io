import { useState } from "react";
import "./App.scss";
import Logo from "./assets/logo.svg";
import Cart from "./assets/cart.svg";
import Earth from "./assets/earth.png";
import Rocket from "./assets/rocket.svg";
import Rectangle_5 from "./assets/rectangle_5.png";
import Rectangle_4 from "./assets/rectangle_4.png";
import Rectangle_3 from "./assets/rectangle_3.png";
import Rectangle_2 from "./assets/rectangle_2.png";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container wrapper">
          <a className="navbar__logo">
            <img alt="logo" src={Logo} />
          </a>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">
                <img alt="logo" src={Cart} />
              </a>
            </li>
          </ul>
          <input type="checkbox" className="menu__checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu__button">
            <div className="menu__burger">&nbsp;</div>
          </label>
          <div className="menu__modal">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">
              <img alt="logo" src={Cart} />
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div className="banner">
          <div className="banner__container wrapper">
            <div className="banner__info">
              <h1 className="banner__title">
                Discover the vast expanses of{" "}
                <span className="pink-text">space</span>
              </h1>
              <h4>
                Where the possibilities are{" "}
                <span className="yellow-text">endless!</span>
              </h4>
              <div>
                <button className="btn btn--primary">Learn more</button>
              </div>
            </div>
            <div className="banner__img">
              <img alt="earth" src={Earth} />
            </div>
          </div>
        </div>
        <section className="content">
          <h4 className="wrapper">Offers</h4>
          <div className="content__container wrapper">
            <div className="content__item content__item--first">
              <div className="content__item__bg">
                <img alt="Rectangle_4" src={Rectangle_4} />
              </div>
              <div className="content__item__info">
                <h3>Move the borders of reality!</h3>
                <h5>{"Go on a space adventure - it's possible with us!"}</h5>
                <div>
                  <button className="btn btn--outline">Learn more</button>
                </div>
              </div>
            </div>
            <div className="content__item">
              <div className="content__item__bg">
                <img alt="Rectangle_5" src={Rectangle_5} />
              </div>
              <div className="content__item__info">
                <h3>Space is not just stars and planets</h3>
                <h5>Go on a space adventure </h5>
                <div>
                  <button className="btn btn--outline">Learn more</button>
                </div>
              </div>
            </div>
            <div className="content__item">
              <div className="content__item__bg">
                <img alt="Rectangle_2" src={Rectangle_2} />
              </div>
              <div className="content__item__info">
                <h3>For those who dream of stars</h3>
                <h5>Our offer: make your dream come true</h5>
                <div>
                  <button className="btn btn--outline">Learn more</button>
                </div>
              </div>
            </div>
            <div className="content__item content__item--last">
              <div className="content__item__bg">
                <img alt="Rectangle_3" src={Rectangle_3} />
              </div>
              <div className="content__item__info">
                <h3>Fulfill your fantastic dreams</h3>
                <h5>Space has never been so close</h5>
                <div>
                  <button className="btn btn--outline">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info">
          <div className="info wrapper">
            <h4>Embark on a space journey</h4>
            <p
              className={`info__text ${
                isExpanded ? "info__text--expanded" : ""
              }`}
            >
              Travelling into space is one of the most exciting and
              unforgettable adventures that can change your life forever. And if
              you have ever dreamed of exploring stars, planets and galaxies,
              then our company is ready to help you realize this dream. We offer
              a unique experience that will allow you to go on a space journey
              and see all the secrets of the universe. We guarantee that every
              moment in space will be filled with incredible impressions,
              excitement and new discoveries. Our team of professionals takes
              care of your safety and comfort so that you can fully enjoy your
              adventure in space. We offer various options for space excursions.
            </p>
            <div>
              <button className="btn btn--read-more" onClick={toggleReadMore}>
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container wrapper">
          <div className="footer_img">
            <img alt="rocket" src={Rocket} />
          </div>
          <p className="yellow-text">Exciting space adventure!</p>
        </div>
      </footer>
    </>
  );
}

export default App;
