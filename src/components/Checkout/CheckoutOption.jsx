import React from 'react'

const CheckoutOption = ({ setSelectedAddress, setSelectedPayment, isCodAvailable }) => {

    const handleAddressChange = (event) => {
        setSelectedAddress(event.target.value);
    };

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <>
            <div className="left-sidebar-checkout">
                <div className="checkout-detail-box">
                    <ul>
                        <li>
                            <div className="checkout-icon">
                                <lord-icon target=".nav-item" src="https://cdn.lordicon.com/ggihhudh.json" trigger="loop-on-hover" colors="primary:#121331,secondary:#646e78,tertiary:#0baf9a" className="lord-icon">
                                </lord-icon>
                            </div>
                            <div className="checkout-box">
                                <div className="checkout-title">
                                    <h4>Delivery Address</h4>
                                </div>

                                <div className="checkout-detail">
                                    <div className="row g-4">
                                        <div className="col-xxl-6 col-lg-12 col-md-6">
                                            <div className="delivery-address-box">
                                                <div>
                                                    <div className="custom-form-check">
                                                        <input className="form-check-input" type="radio" name="address" id="address" onChange={handleAddressChange} value="1" />
                                                    </div>

                                                    <ul className="delivery-address-detail">
                                                        <li>
                                                            <h4 className="fw-500">Jack Jennas</h4>
                                                        </li>
                                                        <li>
                                                            <p className="text-content"><span className="text-title">Address
                                                                : </span>8424 James Lane South San
                                                                Francisco, CA 94080</p>
                                                        </li>
                                                        <li>
                                                            <h6 className="text-content"><span className="text-title">Pin Code
                                                                :</span> +380</h6>
                                                        </li>
                                                        <li>
                                                            <h6 className="text-content mb-0"><span className="text-title">Phone
                                                                :</span> + 380 (0564) 53 - 29 - 68</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="checkout-icon">
                                <lord-icon target=".nav-item" src="https://cdn.lordicon.com/qmcsqnle.json" trigger="loop-on-hover" colors="primary:#0baf9a,secondary:#0baf9a" className="lord-icon">
                                </lord-icon>
                            </div>
                            <div className="checkout-box">
                                <div className="checkout-title">
                                    <h4>Payment Option</h4>
                                </div>

                                <div className="checkout-detail">
                                    <div className="row g-4">
                                        {!isCodAvailable &&
                                            <div className="col-lg-6">
                                                <div className="delivery-address-box">
                                                    <div>
                                                        <div className="custom-form-check">
                                                            <input className="form-check-input" type="radio" name="payment" id="cash" onChange={handlePaymentChange} value="cash" />
                                                        </div>

                                                        <ul className="delivery-address-detail">
                                                            <li>
                                                                <h4 className="fw-500">Cash On Delivery</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        <div className="col-lg-6">
                                            <div className="delivery-address-box">
                                                <div>
                                                    <div className="custom-form-check">
                                                        <input class="form-check-input" type="radio" name="payment" id="online" onChange={handlePaymentChange} value="online" />
                                                    </div>
                                                    <ul className="delivery-address-detail">
                                                        <li>
                                                            <h4 className="fw-500">Pay Online</h4>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-6">
                                            <div className="delivery-address-box">
                                                <div>
                                                    <div className="custom-form-check">
                                                        <input class="form-check-input" type="radio" name="payment" id="wallet" onChange={handlePaymentChange} value="wallet" />
                                                    </div>
                                                    <ul className="delivery-address-detail">
                                                        <li>
                                                            <h4 className="fw-500">My Wallet</h4>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CheckoutOption