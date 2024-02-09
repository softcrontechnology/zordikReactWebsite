import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/apiService';
import { API_URLS, PRODUCT_IMG_BASE_URL } from '../../api/apiUrls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick";
import { AddToCart, AddToWishlist } from '../../api/productActions';
import { Link } from 'react-router-dom';

const TopProduct = ({ showQuickView }) => {

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

  //********** Carouel code start *************
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 5,
          autoplay: true,
          autoplaySpeed: 3500,
        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  //********* Carouel code end **************

  //**********  API code start **********
  const [topProducts, setTopProducts] = useState([]);

  const requestBody = {
    tagName: "best_seller",
    limit: 20,
  };
  useEffect(() => {
    const fetchTopProducts = async () => {

      try {
        const response = await fetchData(API_URLS.getProductsByTag, requestBody);
        if (response.responseCode === 1) {
          const responseData = response.responseData;
          const ProductsData = JSON.parse(responseData);
          setTopProducts(ProductsData);
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
    };

    fetchTopProducts();
  }, []);
  //********* / API code end ****************

  const renderProductRows = () => {
    const rows = [];
    for (let i = 0; i < topProducts.length; i += 2) {
      const productInRow = topProducts.slice(i, i + 2);
      rows.push(
        <div key={i}>
          {productInRow && productInRow.map((product) => (
            <div key={product.id}>
              <div className="product-box-4 wow fadeInUp">
                <div className="product-image">
                  <div className="label-flex">
                    <button className="btn p-0 wishlist btn-wishlist notifi-wishlist" onClick={() => AddToWishlist(product.id, product.variation_id)}>
                      <i className="iconly-Heart icli" />
                    </button>
                  </div>
                  <a href={product.slug}>
                    <img
                      src={`${PRODUCT_IMG_BASE_URL}${product.image}`}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <ul className="option">
                    <li data-bs-topgle="tooltip" data-bs-placement="top" title="Quick View">
                      <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view" onClick={() => showQuickView(product.id)}>
                        <i className="iconly-Show icli" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-detail">
                  <Link to={`/product-detail/${product.id}`}>
                    <h5 className="name">{product.name}</h5>
                  </Link>
                  <h5 className="price theme-color">
                    ₹{product.mrp}<del>₹{product.price}</del>
                  </h5>
                  <div className="price-qty">
                    <div className="counter-number">
                      <div className="counter">
                        <div className="qty-left-minus" onClick={() => decreaseQuantity(product.id)}>
                          <i className="fa-solid fa-minus" />
                        </div>
                        <input className="form-control input-number qty-input" type="text" id='qty' name="quantity" value={quantities[product.id] || 1} readOnly />
                        <div className="qty-right-plus" onClick={() => increaseQuantity(product.id)}>
                          <i className="fa-solid fa-plus" />
                        </div>
                      </div>
                    </div>
                    <button className="buy-button buy-button-2 btn btn-cart" onClick={() => AddToCart(product.id, product.variation_id, quantities[product.id])}>
                      <i className="iconly-Buy icli text-white m-0" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }
    return rows;
  }

  return (
    <>
      {/* Product Sction Start */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Top Products</h2>
          </div>
          <div className="slider-6 img-slider slick-slider-1 arrow-slider">
            <Slider {...settings}>
              {renderProductRows()}
            </Slider>
          </div>
        </div>
      </section>
      {/* Product Sction End */}
    </>
  )
}

export default TopProduct