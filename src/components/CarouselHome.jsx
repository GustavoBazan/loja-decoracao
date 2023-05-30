import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css'

function CarouselHome() {
  return (
    <Carousel className="Carousel" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/images/deco1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Decorações</h3>
          <p>As melhores decorações.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/images/deco2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Ambiente</h3>
          <p>Um ambiente mais agradável.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/images/deco3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Arte</h3>
          <p>
            Decorar é arte.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;