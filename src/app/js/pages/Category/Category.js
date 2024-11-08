import React, { useEffect, useState } from "react";
import '../../../style/scss/category.scss';

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/productAction";
import { setCategoryFilter, setPriceFilter } from '../../redux/slice/filterSlice';

import Loader from "../../components/Loader";
import Product from "../../components/Product";
import { STATUS } from "../../constants/Status";
import FilterProduct from "./FilterProduct";

export default function Category () {
   const dispatch = useDispatch();
   const {productList, status} = useSelector(selectStoreState);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [minRating, setMinRating] = useState(0);


   //console.log("all Product", JSON.stringify(productList));

  const filterProducts = () => {
    return productList.filter((product) => {
      const isCategoryMatch = selectedCategories.length
        ? selectedCategories.includes(product.category)
        : true;
      const isPriceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
      const isRatingMatch = product.rating.rate >= minRating;
      return isCategoryMatch && isPriceMatch && isRatingMatch;
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceChange = (e) => {
    if (!e.target) return; // Ensure e.target is defined
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: Number(value),
    }));
  };

  const filteredProducts = filterProducts();


  useEffect(()=> {
    dispatch(getAllProducts());
  }, [])

  if (status === STATUS.LOADING) {
    return <Loader />;
 }

 if (status === STATUS.ERROR) {
   return <h2>Somethings went wrong Check API..</h2>
}

  function renderRightContent() {
    return (
      <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 right-content">
      <div className="auto-clear">
        <div className="top-control box-has-content">
          <div className="breadcrumbs">
            <a href="#">Home</a> / <span className="current">Shop</span>
          </div>
          <div className="control">
            <span className="title">Showing 1–9 of 100 results</span>
            <div className="filters-content">
              <div className="form-group short-by">
                     <form className="align-items-center d-flex">
                        <label className="control-label pe-2" htmlFor="input-sort">SortBy:</label>
                        <select defaultValue={'pop'} id="input-sort" name="OrderByGet" className="form-select">
                              <option value="pop">Default</option>
                              <option value="ATOZ">Name (A - Z)</option>
                              <option value="ZTOA">Name (Z - A)</option>
                              <option value="pricelow">Price (Low &gt; High)</option>
                              <option value="pricehigh">Price (High &gt; Low)</option>
                        </select>
                     </form>
                </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="row product-grid">
          {
           filteredProducts.length>0 ? filteredProducts.map((item) => (
              <div className="col-ss-12 col-xs-6 col-sm-6 col-md-3 col-lg-3" key={item.id}>
                <Product data={item} addToCart={item}/>
              </div>

            )) : <h3 className="text-center p-4">Not found any Product</h3>
          }
          

        </div>


        <div className="pagination justify-content-center">
          <ul className="list-page">
            <li><a href="#" className="page-number prev">Previous</a></li>
            <li><a href="#" className="page-number">1</a></li>
            <li><a href="#" className="page-number">2</a></li>
            <li><a href="#" className="page-number current">3</a></li>
            <li><a href="#" className="page-number">4</a></li>
            <li><a href="#" className="page-number">5</a></li>
            <li><a href="#" className="page-number">6</a></li>
            <li><a href="#" className="page-number next">Next</a></li>
          </ul>
        </div>
      </div>
    </div>
    );
  }


  return (
    <div className="main-content grid-category-page inner-page">
		<div className="container">
			<div className="row">
        <FilterProduct
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            minRating={minRating}
            setMinRating={setMinRating}
          />
				{renderRightContent()}
			</div>
		</div>
	</div>
  ); 
}


  // storeSelectors.js
  const selectStoreState = (state) => ({
    productList: state.product.data,
    status: state.product.status,
  });