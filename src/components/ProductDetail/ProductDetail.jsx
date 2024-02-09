import React from 'react'
import Breadcrumb from "../shared/Breadcrumb";
import NavTabs from './NavTabs';
import ProductLeftSidebar from './ProductLeftSidebar';
import RelatedProduct from './RelatedProduct';
import { useParams } from 'react-router-dom';
import QuickViewModel from '../Home/QuickViewModal';

const ProductDetail = () => {
    const { productId } = useParams();
  return (
    <>
        <Breadcrumb pageName="Product Detail" />
        {/* <!-- Product Left Sidebar Start --> */}
        <section className="product-section">
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 wow fadeInUp">
                        <ProductLeftSidebar productId={productId} />
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Product Left Sidebar End --> */}

        {/* <!-- Nav Tab Section Start --> */}
        <NavTabs productId={productId}/>
        {/* <!-- Nav Tab Section End --> */}

        {/* <!-- Related Product Section Start --> */}
        <RelatedProduct/>
        {/* <!-- Related Product Section End --> */}

        <QuickViewModel/>

    </>
  )
}

export default ProductDetail