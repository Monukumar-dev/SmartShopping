import React, { useEffect, useMemo, useState } from "react";
import '../../../style/scss/category.scss';

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getFilter } from "../../redux/action/productAction";
import { setCategoryFilter, setPriceFilter } from '../../redux/slice/filterSlice';

import Loader from "../../components/Loader";
import Product from "../../components/Product";
import { STATUS } from "../../constants/Status";
import FilterProduct from "./FilterProduct";


export default function Category() {

const dispatch = useDispatch();
const { productList, filters, total, status } = useSelector(selectStoreState);

//console.log("productList", productList);
//console.log("filters", filters);

const [selectedCategories, setSelectedCategories] = useState([]);
const [selectedSize, setSelectedSize] = useState([]);
const [selectedBrands, setSelectedBrands] = useState([]);
const [selectedColor, setSelectedColor] = useState("");
const [priceRange, setPriceRange] = useState({ min: null, max: null });
const [sortOrder, setSortOrder] = useState("Default");

const [filteredProducts, setFilteredProducts] = useState([]);


useEffect(()=>{
  let req = {
    "filters": {
        "minPrice": "",
        "maxPrice": "",
        "category": "",
        "size": "",
        "color": "",
        "searchTerm": "",
        "dateRange": {
            "startDate": "",
            "endDate": ""
        }
    },
    "pagination": {
        "page": 0,
        "pageSize": 10
    }
}
  dispatch(getFilter(req));
},[])

useEffect(() => {
  let requestBody = {
    filters: {
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      category: selectedCategories.length > 0 ? selectedCategories : null,
      size: selectedSize.length > 0 ? selectedSize : null,
      brand: selectedBrands.length > 0 ? selectedBrands : null,
      color: selectedColor || null,
      "searchTerm": "",
      "dateRange": {
          "startDate": "",
          "endDate": ""
      }
    },
    pagination: {
      page: 0,
      pageSize: 10,
    },
  };

  dispatch(getAllProducts(requestBody));
}, [selectedCategories, selectedSize, selectedBrands, selectedColor, priceRange, sortOrder]);

useEffect(() => {
  if (Array.isArray(productList)) {
    let filtered = [...productList];

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) => selectedCategories.includes(item.category));
    }

    // Size filter
    if (selectedSize.length > 0) {
      filtered = filtered.filter((item) => selectedSize.includes(item.size));
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
    }

    // Color filter
    if (selectedColor) {
      filtered = filtered.filter((item) => item.color.toLowerCase() === selectedColor.toLowerCase());
    }

    // Price filter
    if (priceRange.min !== null && priceRange.max !== null) {
      filtered = filtered.filter((item) => item.price >= priceRange.min && item.price <= priceRange.max);
    }

    // Sorting
    switch (sortOrder) {
      case "ATOZ":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ZTOA":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "pricelow":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "pricehigh":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }
}, [productList, selectedCategories, selectedSize, selectedBrands, selectedColor, priceRange, sortOrder]);

// Handle Filters
const handleCategoryChange = (category) => {
  setSelectedCategories((prev) =>
    prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
  );
};

const handleSizeChange = (size) => {
  setSelectedSize((prev) =>
    prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
  );
};

const handleBrandChange = (brand) => {
  setSelectedBrands((prev) =>
    prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
  );
};

const handleColorChange = (color) => {
  setSelectedColor(color);
};

const handlePriceChange = (newValue) => {
  setPriceRange({ min: newValue[0], max: newValue[1] });
};

const handleSortChange = (e) => {
  setSortOrder(e.target.value);
};

const totalProducts = total //productList?.length; // Total count of products
const displayedProductsCount = filteredProducts?.length; // Count of filtered products

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
                      id="input-sort"
                      name="OrderByGet"
                      className="form-select"
                      onChange={handleSortChange}
                      value={sortOrder}
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
                <div className="col-ss-12 col-xs-6 col-sm-6 col-md-3 col-lg-3" key={item._id}>
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
              filters.category && {
                title: "Categories",
                options: filters.category ? filters.category : [],
                selected: selectedCategories,
                handleChange: handleCategoryChange,
              },
              // filters.brand && {
              //   title: "Brand",
              //   options: uniqueBrands, // Use all available brands
              //   selected: selectedBrands,
              //   handleChange: handleBrandChange,
              // },
              filters.size && {
                title: "Size",
                options: filters.size, // Use all available sizes
                selected: selectedSize,
                handleChange: handleSizeChange,
              },
              filters.color && {
                title: "Color",
                options: filters.color, // Use all available colors
                selected: selectedColor,
                handleChange: handleColorChange,
              }
            ]}
            priceRange={{min: filters.minPrice, max: filters.maxPrice }}
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
  productList: state.product.data?.products,
  filters: state.product.filters,
  status: state.product.status,
  total: state.product.data.total,
});
