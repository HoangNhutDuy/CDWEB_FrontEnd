import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoopIcon from "@mui/icons-material/Loop";
import { Link, useLocation } from "react-router-dom";
import AddToCartButton from "../Cart/AddToCartButton";

const SearchResultsPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (location.state && location.state.searchResults) {
      setProducts(location.state.searchResults.content);
    }
  }, [location.state]);

  return (
    <>
      <Header />
      <section className="category__section" id="category">
        <div className="category__container">
          <div className="category__center">
            {products?.length > 0 ? (
              products?.map((product, index) => (
                <div className="product category__products" key={index}>
                  <div className="product__header">
                    <img src={product.image} alt="product" />
                  </div>
                  <div className="product__footer">
                    <h3>{product.title}</h3>
                    <div className="rating"></div>
                    <div className="product__price">
                      <h4>{product.price * 22000} VND</h4>
                    </div>
                    <Link to="/cart">
                      <AddToCartButton
                        productId={product.productId}
                        quantity="1"
                        class="product__btn"
                        isHomePage="true"
                      />
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link
                        data-tip="Quick View"
                        data-place="left"
                        to={`/detail/product/${product.productId}`}
                      >
                        <RemoveRedEyeIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FavoriteIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <LoopIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchResultsPage;
