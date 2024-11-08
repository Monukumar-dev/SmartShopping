import React, { useEffect, useState } from "react";
import '../../../style/scss/category.scss';

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/productAction";
import { setCategoryFilter, setPriceFilter } from '../../redux/slice/filterSlice';

import Loader from "../../components/Loader";
import Product from "../../components/Product";
import { STATUS } from "../../constants/Status";
import FilterProduct from "./FilterProduct";

export default function Category() {
  const dispatch = useDispatch();
  const { productList, status } = useSelector(selectStoreState);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("Default");



  const filterProducts = () => {
    const filtered = productList.filter((product) => {
      const isCategoryMatch = selectedCategories.length
        ? selectedCategories.includes(product.category)
        : true;
      const isPriceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
      const isRatingMatch = product.rating.rate >= minRating;
      return isCategoryMatch && isPriceMatch && isRatingMatch;
    });
  
    // Apply sorting with added checks for undefined names
    switch (sortOrder) {
      case "ATOZ":
        return filtered.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      case "ZTOA":
        return filtered.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
      case "pricelow":
        return filtered.sort((a, b) => a.price - b.price);
      case "pricehigh":
        return filtered.sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceChange = (e) => {
    setPriceRange((prev) => ({
      ...prev,
      min: e.min,
      max: e.max,
    }));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = filterProducts();

  //const cate = productList.filter().
  const uniqueCategories = [...new Set(productList.map(item => item.category))];

  //console.log(uniqueCategories);

  
  

  const totalProducts = productList.length; // Total count of products
  const displayedProductsCount = filteredProducts.length; // Count of filtered products

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (status === STATUS.LOADING) {
    return <Loader />;
  }

  if (status === STATUS.ERROR) {
    return <h2>Something went wrong. Check API..</h2>;
  }

  function renderRightContent() {
    return (
      <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 right-content">
        <div className="">
          <div className="">
            <div className="breadcrumbs">
              <a href="#">Home</a> / <span className="current">Shop</span>
            </div>
            <div className="align-items-center control d-flex justify-content-center mb-4">
              <p className="border-end d-inline-block mb-0 me-3 pe-3">Showing <strong>{displayedProductsCount}</strong>  of {totalProducts} results</p>
              <div className="filters-content pb-0">
                <div className="form-group short-by">
                  <form className="align-items-center d-flex">
                    <label className="control-label pe-2" htmlFor="input-sort">SortBy:</label>
                    <select
                      defaultValue={'Default'}
                      id="input-sort"
                      name="OrderByGet"
                      className="form-select"
                      onChange={handleSortChange}
                    >
                      <option value="Default">Default</option>
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div className="col-ss-12 col-xs-6 col-sm-6 col-md-3 col-lg-3" key={item.id}>
                  <Product data={item} addToCart={item} />
                </div>
              ))
            ) : (
              <h3 className="text-center p-4">No products found</h3>
            )}
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
            filters={[
              {
                title: "Categories",
                options: uniqueCategories,
                selected: selectedCategories,
                handleChange: handleCategoryChange,
              },
              {
                title: "Brand",
                options: ["Tshirts", "Lounge Tshirts", "Shoes", "Clothing"],
                //selected: selectedBrands,
                //handleChange: handleBrandChange,
              },
              {
                title: "Size",
                options: ["S", "M", "L", "XL"],
                //selected: selectedSizes,
                //handleChange: handleSizeChange,
              },
              // Add other filters as needed
            ]}
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
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
