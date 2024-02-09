import React, {useState, useRef, useEffect} from 'react'
import Slider from "react-slick";
import { fetchData } from '../../api/apiService';
import { API_URLS } from '../../api/apiUrls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropagateLoader } from 'react-spinners';

const ProductLeftSidebar = ({productId}) => {
  
  //*********** API code start ************
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
 
      try {
        const requestBody = {
          productId: productId,
        };

        const response = await fetchData(API_URLS.getProductById, requestBody );
        if (response.responseCode === 1) {
          const responseData = response.responseData;
          const productDetailsData = JSON.parse(responseData);
          setProductDetails(productDetailsData);
          setSelectedColor(productDetailsData[0].color);
          setSelectedSize(productDetailsData[0].size);
        } else {
          toast.error(`Error: ${response.responseMessage}`, {
            toastId: "unique-error-toast",
          });
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`, {
          toastId: "unique-error-toast",
        });
      }
      finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);
//************** / API code end *****************

//********** Slider Image (Big) Carousel start **********
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const mainSliderRef = useRef();

  const mainSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.left-slider-image',
    ref: (slider) => (mainSliderRef.current = slider),
    initialSlide: selectedImageIndex,
  };
  //********** Slider Image (Big) Carousel End ************

    //********** Sidebar Image (Small) Carousel start *********
    const sidebarSlider = {
      slidesToShow: 4,
     slidesToScroll: 1,
     asNavFor: '.product-main',
     dots: false,
     focusOnSelect: true,
     vertical: true,
     responsive: [{
             breakpoint: 1400,
             settings: {
                 vertical: false,
             }
         },
         {
             breakpoint: 992,
             settings: {
                 vertical: true,
             }
         },
         {
             breakpoint: 768,
             settings: {
                 vertical: true,
             }
         }, {
             breakpoint: 430,
             settings: {
                 slidesToShow: 3,
                 vertical: false,
             }
         },
     ]
    };
  //********* Sidebar Image (Small) Carousel End *******

  //********** Inc/Dec code start *************
  const [quantities, setQuantities] = useState({});

  const increaseQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.min((prevQuantities[productId] || 1) + 1, 10)
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 0)
    }));
  };
  //********** Inc/Dec code End *************

  //***********Sidebar Image Index code Start **************
    const handleSidebarImageClick = (index) => {
      mainSliderRef.current.slickGoTo(index);
      setSelectedImageIndex(index);
      };
   //***********Sidebar Image Index code End **************

   //********** Percentage code Start *************
   const mrp = productDetails[0]?.mrp;
   const price = productDetails[0]?.price;
   const percentageOff = mrp && price ? ((mrp - price) / mrp) * 100 : 0;
  //********** Percentage code End *************

  //********** Color and Size code Start *************
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const [selectedSize, setSelectedSize] = useState('');
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  
  const colorOptions = [...new Set(productDetails && productDetails.map(item => item.color))];  // Get unique color options

  const sizeOptions = [...new Set(productDetails && productDetails.map(item => item.size))];  // Get unique size options
  //********** Color and Size code End *************

  //********* COD code Start *************
  const isCODAvailable = productDetails.length > 0 && productDetails[0]?.cod === 1;
  //********* COD code End *************

  //********* Loading code Start *************
  const [loading, setLoading] = useState(true);
  if (loading) return <PropagateLoader color="#36d7b7" />;
  if (!productDetails || !productDetails) {
    return <p>No product details available.</p>;
  }
  //********* Loading code End *************

  return (
    <>
    {/* <!-- Product Left Sidebar Start --> */}
    <div className="row g-4">
          <div className="col-xl-4 wow fadeInUp">
            <div className="product-left-box">
              <div className="row g-sm-4 g-2">
                <div className="col-xxl-10 col-lg-12 col-md-10 order-xxl-2 order-lg-1 order-md-2">
                  <div className="product-main no-arrow">
                  <Slider {...mainSlider}>
                    <div>
                      <div className="slider-image">
                        <img
                          src="../assets/images/product/category/1.jpg"
                          id="img-1"
                          data-zoom-image="../assets/images/product/category/1.jpg"
                          className="img-fluid image_zoom_cls-0 blur-up lazyload"
                          alt=""/>
                      </div>
                    </div>
                    <div>
                      <div className="slider-image">
                        <img
                          src="../assets/images/product/category/2.jpg"
                          data-zoom-image="../assets/images/product/category/2.jpg"
                          className="img-fluid image_zoom_cls-1 blur-up lazyload"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="slider-image">
                        <img
                          src="../assets/images/product/category/3.jpg"
                          data-zoom-image="../assets/images/product/category/3.jpg"
                          className="img-fluid image_zoom_cls-2 blur-up lazyload"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="slider-image">
                        <img
                          src="../assets/images/product/category/4.jpg"
                          data-zoom-image="../assets/images/product/category/4.jpg"
                          className="img-fluid image_zoom_cls-3 blur-up lazyload"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="slider-image">
                        <img
                          src="../assets/images/product/category/5.jpg"
                          data-zoom-image="../assets/images/product/category/5.jpg"
                          className="img-fluid image_zoom_cls-4 blur-up lazyload"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="slider-image">
                        <img
                          src="../assets/images/product/category/6.jpg"
                          data-zoom-image="../assets/images/product/category/6.jpg"
                          className="img-fluid image_zoom_cls-5 blur-up lazyload"
                          alt=""
                        />
                      </div>
                    </div>
                    </Slider>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-12 col-md-2 order-xxl-1 order-lg-2 order-md-1">
                  <div className="left-slider-image left-slider no-arrow slick-top">
                  <Slider {...sidebarSlider}>
                    {/* Your existing sidebar images */}
                    {Array.from({ length: 6 }, (_, index) => (
                      <div key={index} onClick={() => handleSidebarImageClick(index)}>
                        <div className="sidebar-image">
                          <img src={`../assets/images/product/category/${index + 1}.jpg`} className="img-fluid blur-up lazyload"
                          alt=""/>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 wow fadeInUp">
            <div className="right-box-contain">
              <h2 className="name">{productDetails.length > 0 && productDetails[0].product_name}</h2>
              <div className="price-rating">
                <h3 className="theme-color price">
                ₹{productDetails.length > 0 && productDetails[0].price} <del className="text-content">₹{productDetails.length > 0 && productDetails[0].mrp}</del>{" "}
                  <span className="offer theme-color">({percentageOff.toFixed(2)}% off)</span>
                </h3>
              </div>
              <div className="procuct-contain">
                <p>{productDetails[0].short_description}</p>
              </div>
              <div className="product-packege">
                <div className="product-title">
                  <h4>Color</h4>
                </div>
                <ul className="select-packege">
                {colorOptions && colorOptions.map((color, index) => (
                  <li key={index}>
                   <a href="javascript:void(0)" className={color === selectedColor ? 'selected-option' : ''} onClick={() => handleColorClick(color)}>
                      {color}
                    </a>
                  </li>
                ))}
                </ul>
              </div>
              <div className="product-packege">
                <div className="product-title">
                  <h4>Size</h4>
                </div>
                <ul className="select-packege">
                {sizeOptions && sizeOptions.map((size, index) => (
                  <li key={index}>
                    <a href="javascript:void(0)" className={size === selectedSize ? 'selected-option' : ''} onClick={() => handleSizeClick(size)}>
                      {size}
                    </a>
                  </li>
                ))}
                </ul>
              </div>
              <div className="note-box product-packege">
                <div className="cart_qty qty-box product-qty">
                  <div className="input-group">
                  <button
                      type="button"
                      className="qty-left-minus"
                      data-type="minus"
                      data-field=""
                      onClick={() => decreaseQuantity(productDetails.id)}
                    >
                      <i className="fa fa-minus" aria-hidden="true" />
                    </button>
                    <input
                      className="form-control input-number qty-input"
                      type="text"
                      name="quantity"
                      defaultValue={0}decreaseQuantity
                      value={quantities[productDetails.id] || 1}/>
                    <button
                      type="button"
                      className="qty-right-plus"
                      data-type="plus"
                      data-field=""
                      onClick={() => increaseQuantity(productDetails.id)}
                    >
                      <i className="fa fa-plus" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <button
                  onclick="location.href = 'cart.html';"
                  className="btn btn-md cart-button w-30"
                >
                  Add To Cart
                </button>
                <button
                  onclick="location.href = 'cart.html';"
                  className="btn btn-md cart-button w-30"
                >
                  Add To Wishlist
                </button>
              </div>

              <div className="pickup-box">
                <div className="product-info">
                  <ul className="product-info-list product-info-list-2">
                    <li>
                      SKU : <a href="javascript:void(0)">{productDetails.length > 0 && productDetails[0].sku_code}</a>
                    </li>
                    <li>
                      COD : <a href="javascript:void(0)">{isCODAvailable ? 'Available' : 'Not Available'}</a>
                    </li>
                    <li>
                      Product Weight : <a href="javascript:void(0)">{productDetails.length > 0 && productDetails[0].product_weight}</a>
                    </li>
                    <li>
                      Shipping Weight : <a href="javascript:void(0)">{productDetails.length > 0 && productDetails[0].shipping_weight}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="paymnet-option">
                <div className="product-title">
                  <h4>Guaranteed Safe Checkout</h4>
                </div>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/1.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/2.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/3.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/4.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/5.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product Left Sidebar End --> */}
    </>
  )
}

export default ProductLeftSidebar