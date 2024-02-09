import React from 'react';

const Dashboard = () => {

    const SessionUsername = localStorage.getItem('username');

  return (
    <>
        <div className="dashboard-home">
            <div className="title">
                <h2>My Dashboard</h2>
                <span className="title-leaf">
                    <svg className="icon-width bg-gray">
                        <use xlinkHref="/assets/svg/leaf.svg" />
                    </svg>
                </span>
            </div>
            <div className="dashboard-user-name">
                <h6 className="text-content">Hello, <b className="text-title">{SessionUsername}</b></h6>
                <p className="text-content">From your My Account Dashboard you have the ability to
                    view a snapshot of your recent account activity and update your account
                    information. Select a link below to view or edit information.</p>
            </div>
            
            <div className="total-box">
                <div className="row g-sm-4 g-3">
                        <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg"
                                    className="img-1 blur-up lazyload" alt=""/>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg" className="blur-up lazyload"
                                    alt=""/>
                                <div className="totle-detail">
                                    <h5>Total Order</h5>
                                    <h3>3658</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg"
                                    className="img-1 blur-up lazyload" alt=""/>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg" className="blur-up lazyload"
                                    alt=""/>
                                <div className="totle-detail">
                                    <h5>Total Pending Order</h5>
                                    <h3>254</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg"
                                    className="img-1 blur-up lazyload" alt=""/>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg"
                                    className="blur-up lazyload" alt=""/>
                                <div className="totle-detail">
                                    <h5>Total Wishlist</h5>
                                    <h3>32158</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="dashboard-title">
                    <h3>Account Information</h3>
                </div>


                <div className="row g-4">
                    <div className="col-xxl-6">
                        <div className="dashboard-contant-title">
                            <h4>Contact Information <a href="javascript:void(0)"
                                    data-bs-toggle="modal" data-bs-target="#editProfile">Edit</a>
                            </h4>
                        </div>
                        <div className="dashboard-detail">
                            <h6 className="text-content">MARK JECNO</h6>
                            <h6 className="text-content">vicki.pope@gmail.com</h6>
                            <a href="javascript:void(0)">Change Password</a>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Dashboard