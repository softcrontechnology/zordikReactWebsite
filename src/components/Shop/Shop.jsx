import React, {useState} from 'react'
import Breadcrumb from '../shared/Breadcrumb';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import QuickViewModal from '../Home/QuickViewModal'

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategorySelect = (categories) => {
    setSelectedCategories(categories);
  };

  return (
    <>
        <Breadcrumb pageName="Shop" />
        {/* <!-- Shop Section Start --> */}
        <section className="section-b-space shop-section">
            <div className="container-fluid-lg">
                <div className="row">
                    <LeftSidebar/>
                    <RightSidebar/>
                </div>
            </div>
        </section>
        {/* <!-- Shop Section End --> */}

        <QuickViewModal/>
    </>
  )
}

export default Shop