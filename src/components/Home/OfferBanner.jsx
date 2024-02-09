import React from 'react'

const OfferBanner = () => {
  return (
    // Banner2 Section Start
    <section className="banner-section">
  <div className="container-fluid-lg">
    <div className="row gy-lg-0 gy-3">
      <div className="col-lg-6">
        <div
          className="banner-contain-3 hover-effect bg-size main-banner-img" style={{backgroundImage: 'url("../assets/images/veg-3/banner/1.png")',}} >
          <img src="../assets/images/veg-3/banner/1.png" className="bg-img img-fluid d-none" alt=""/>
          <div className="banner-detail text-white p-center-left w-50 position-relative mend-auto">
            <div>
              <h6 className="ls-expanded text-uppercase">Premium</h6>
              <h3 className="mb-sm-3 mb-1">
                Fresh Vegetable &amp; Daily Eating
              </h3>
              <h4>Get Extra 50% Off</h4>
              <button
                className="btn theme-color bg-white btn-md fw-bold mt-sm-3 mt-1 mend-auto"
                onclick="location.href = 'shop-left-sidebar.html';"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="banner-contain-3 hover-effect bg-size main-banner-img" style={{backgroundImage: 'url("../assets/images/veg-3/banner/2.png")',}}>
          <img
            src="../assets/images/veg-3/banner/2.png"
            className="bg-img img-fluid d-none"
            alt=""/>
          <div className="banner-detail text-dark p-center-left w-50 position-relative mend-auto">
            <div>
              <h6 className=" ls-expanded text-uppercase">available</h6>
              <h3 className="mb-sm-3 mb-1">
                100% Natural &amp; Healthy Fruits
              </h3>
              <h4 className="text-content">Weekend Special</h4>
              <button
                className="btn theme-bg-color text-white btn-md fw-bold mt-sm-3 mt-1 mend-auto"
                onclick="location.href = 'shop-left-sidebar.html';"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
// Banner2 Section End
  )
}

export default OfferBanner