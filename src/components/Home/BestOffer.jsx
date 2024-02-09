import React from 'react'
import Slider from "react-slick";

const BestOffer = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 757,
            settings: {
              slidesToShow: 1,
              fade: true,
            },
          },
        ],
      };

  return (
<>
  <section>
    <div className="container-fluid-lg">
      <div className="title">
        <h2>Best Offer</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="three-slider arrow-slider ratio_65">
          <Slider {...settings}>
            <div>
              <div className="offer-banner hover-effect">
                <img
                  src="../assets/images/veg-3/value/1.png"
                  className="img-fluid bg-img blur-up lazyload"
                  alt=""
                />
                <div className="banner-detail">
                  <h5 className="theme-color">Buy more, Save more</h5>
                  <h6>Fresh Vegetable</h6>
                </div>
                <div className="offer-box">
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn-category btn theme-bg-color text-white"
                  >
                    View Offer
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="offer-banner hover-effect">
                <img
                  src="../assets/images/veg-3/value/2.png"
                  className="img-fluid bg-img blur-up lazyload"
                  alt=""
                />
                <div className="banner-detail">
                  <h5 className="theme-color">Save More!</h5>
                  <h6>Organic Vegetable</h6>
                </div>
                <div className="offer-box">
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn-category btn theme-bg-color text-white"
                  >
                    View Offer
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="offer-banner hover-effect">
                <img
                  src="../assets/images/veg-3/value/3.png"
                  className="img-fluid bg-img blur-up lazyload"
                  alt=""
                />
                <div className="banner-detail">
                  <h5 className="theme-color">Hot Deals!</h5>
                  <h6>Fruita &amp; Vagerables</h6>
                </div>
                <div className="offer-box">
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn-category btn theme-bg-color text-white"
                  >
                    View Offer
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="offer-banner hover-effect">
                <img
                  src="../assets/images/veg-3/value/1.png"
                  className="img-fluid bg-img blur-up lazyload"
                  alt=""
                />
                <div className="banner-detail">
                  <h5 className="theme-color">Buy more, Save more</h5>
                  <h6>Fruita &amp; Vagerables</h6>
                </div>
                <div className="offer-box">
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn-category btn theme-bg-color text-white"
                  >
                    View Offer
                  </button>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default BestOffer