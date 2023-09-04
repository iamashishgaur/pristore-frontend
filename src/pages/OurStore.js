import React, { useEffect, useState } from "react";
import { OurStoreContainer } from "../styles/ourstorestyle";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Colors from "../components/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
const OurStore = () => {
  const dispatch = useDispatch();
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state.product.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [sort, setSort] = useState([]);

  // filter State
  const [tag, SetTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let newCategory = [];
    let newTags = [];
    let newColors = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      newCategory.push(element.category);
      newTags.push(element.tags);
      newColors.push(element.color);
    }
    setBrands(newBrands);
    setCategories(newCategory);
    setTags(newTags);
  }, [productState]);

  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);
  const getProducts = () => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
    );
  };
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <OurStoreContainer>
        <div className="store-wrapper py-3 ">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop Buy Categories</h3>
                  <div>
                    <ul className="ps-0">
                      {categories &&
                        [...new Set(categories)].map((item, index) => {
                          return (
                            <li key={index} onClick={() => setCategory(item)}>
                              {item}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By </h3>
                  <div>
                    <h5 className="subtitle">Availablity</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          In Stock (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                        <label className="form-check-label " htmlFor="">
                          {" "}
                          Out Of Stock (0)
                        </label>
                      </div>
                    </div>
                    <h5 className="subtitle">Price</h5>
                    <div className="d-flex gap-10 align-items-center">
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="From"
                          onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <label htmlFor="floatingInput">From</label>
                      </div>
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="To"
                          onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <label htmlFor="floatingInput">TO</label>
                      </div>
                    </div>
                    <h5 className="subtitle">Colors</h5>
                    <div>
                      <Colors />
                    </div>
                    <h5 className="subtitle">Size</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                          S (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-2"
                        />
                        <label className="form-check-label" htmlFor="color-2">
                          M (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-3"
                        />
                        <label className="form-check-label" htmlFor="color-3">
                          L (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="color-4"
                        />
                        <label className="form-check-label" htmlFor="color-4">
                          XL (1)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product By Tags</h3>
                  <div>
                    <div className="product-tag d-flex align-item-center gap-10 flex-wrap">
                      {tags &&
                        [...new Set(tags)].map((item, index) => {
                          return (
                            <span
                              key={index}
                              onClick={() => SetTag(item)}
                              style={{ cursor: "pointer" }}
                              className="text-capitalize badge cursor-pointer bg-light text-secondary py-2 px-3 rounded-3"
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product By Brands</h3>
                  <div>
                    <div className="product-tag d-flex align-item-center gap-10 flex-wrap">
                      {brands &&
                        [...new Set(brands)].map((item, index) => {
                          return (
                            <span
                              key={index}
                              onClick={() => setBrand(item)}
                              className="text-capitalize badge bg-light text-secondary py-2 px-3 rounded-3"
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
                {/* <div className="filter-card mb-3">
                  <h3 className="filter-title">Random Product</h3>
                  <div>
                    <div className="random-product mb-3 d-flex">
                      <div className="w-50">
                        <img
                          className="img-fluid"
                          src="images/watch.jpg"
                          alt="watch"
                        />
                      </div>
                      <div className="w-50">
                        <h5 className="product-title">
                          Kids headephones bulk 10 pack multi colored for
                          students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">$100.00</p>
                      </div>
                    </div>
                    <div className="random-product d-flex">
                      <div className="w-50">
                        <img
                          className="img-fluid"
                          src="images/watch.jpg"
                          alt="watch"
                        />
                      </div>
                      <div className="w-50">
                        <h5 className="product-title">
                          Kids headephones bulk 10 pack multi colored for
                          students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">$100.00</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-9">
                <div className="filter-sort-grid mb-4">
                  <div className="d-flex  justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0 " style={{ width: "100px" }}>
                        Sort By:
                      </p>
                      <select
                        name=""
                        className="form-control form-select"
                        id=""
                        onChange={(e) => setSort(e.target.value)}
                      >
                        <option value="title">Alphabetically - (A-Z)</option>
                        <option value="-title">Alphabetically - (Z-A)</option>
                        <option value="price">Price - (low to high)</option>
                        <option value="-price">Price - (high to low)</option>
                        <option value="createdAt">Date - (old to new)</option>
                        <option value="-createdAt">Date - (new to old)</option>
                      </select>
                    </div>
                    <div className="d-flex align-items-center gap-10">
                      <p className="totalproduct mb-0">21 Product</p>
                      <div className="d-flex gap-10 align-items-center grid">
                        <img
                          onClick={() => {
                            setGrid(3);
                          }}
                          src="images/gr4.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img
                          onClick={() => {
                            setGrid(4);
                          }}
                          src="images/gr3.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img
                          onClick={() => {
                            setGrid(6);
                          }}
                          src="images/gr2.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img
                          onClick={() => {
                            setGrid(12);
                          }}
                          src="images/gr.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-list pb-5">
                  <div className="d-flex gap-10 flex-wrap">
                    <ProductCard
                      data={productState ? productState : []}
                      grid={grid}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OurStoreContainer>
    </>
  );
};

export default OurStore;
