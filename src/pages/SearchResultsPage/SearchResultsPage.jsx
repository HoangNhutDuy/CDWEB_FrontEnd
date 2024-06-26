import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoopIcon from "@mui/icons-material/Loop";
import FlightIcon from "@mui/icons-material/Flight"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import HeadphonesIcon from "@mui/icons-material/Headphones"
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

  
  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });
  
    return formatter.format(amount);
  }
  return (
    <>
      <Header />

                 <h1 style={{textAlign:"center", fontSize:"40px"}}>Kết quả Tìm kiếm : </h1>
      <section className="category__section" id="category" >
        <div className="category__container" >
          <div className="category__center"  style={{display: 'flex', justifyContent: 'center',fontSize:"20px"}}>
            {products?.length > 0 ? (
              products?.map((product, index) => (
                <div className="product category__products" key={index}>
                  <div className="product__header">
                    <img src={product.img} alt="product" />
                  </div>
                  <div className="product__footer">
                    <h3>{product.name}</h3>
                    <div className="rating"></div>
                    <div className="product__price">
                      <h4>{formatCurrency(product.price)}</h4>
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
              <p>Không tìm thấy sản phẩm !</p>
            )}
          </div>
        </div>
      </section>
      <section
          className="facility__section section"
          id="facility"
          style={{ margin: "30px 0" }}
        >
          <div className="container">
            <div className="facility__contianer">
              <div className="facility__box">
                <div className="facility-img__container">
                  <FlightIcon />
                </div>
                <p>MIỄN PHÍ VẬN CHUYỂN TOÀN CẦU</p>
              </div>

              <div className="facility__box">
                <div className="facility-img__container">
                  <CreditCardIcon />
                </div>
                <p>ĐẢM BẢO HOÀN TIỀN 100%</p>
              </div>

              <div className="facility__box">
                <div className="facility-img__container">
                  <LocalAtmIcon />
                </div>
                <p>THANH TOÁN BẰNG THẺ</p>
              </div>

              <div className="facility__box">
                <div className="facility-img__container">
                  <HeadphonesIcon />
                </div>
                <p>HỖ TRỢ TRỰC TUYẾN 24/7</p>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
};

export default SearchResultsPage;
