import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { products } from "../../data/products"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LoopIcon from "@mui/icons-material/Loop"
import { Link } from "react-router-dom"

const HomePage = ({id}) => {
  return (
    <>
      <Header />
      <section className="category__section" id="category">
        <div className="tab__list">
          <div
            className="title__container tabs"
            style={{ backgroundColor: "red" }}
          >
            <div className="section__titles category__titles ">
              <div
                className="section__title filter-btn active"
                data-id="All Products"
              >
                <span className="dot"></span>
                <h1 className="primary__title">Tất cả</h1>
              </div>
            </div>
            <div className="section__titles">
              <div
                className="section__title filter-btn"
                data-id="Trending Products"
              >
                <span className="dot"></span>
                <h1 className="primary__title">Xu hướng</h1>
              </div>
            </div>

            <div className="section__titles">
              <div
                className="section__title filter-btn"
                data-id="Special Products"
              >
                <span className="dot"></span>
                <h1 className="primary__title">Đặc biệt</h1>
              </div>
            </div>

            <div className="section__titles">
              <div
                className="section__title filter-btn"
                data-id="Featured Products"
              >
                <span className="dot"></span>
                <h1 className="primary__title">Bán chạy</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="category__container">
          <div className="category__center">
            {products.products.map((product, index) => (
              <div class="product category__products">
                <div class="product__header">
                  <img src={product.image} alt="product" />
                </div>
                <div class="product__footer">
                  <h3>{product.title}</h3>
                  <div class="rating">
                    {/* <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                      </svg>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                      </svg>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                      </svg>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                      </svg>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                      </svg> */}
                  </div>
                  <div class="product__price">
                    <h4>{product.price * 22000} VND</h4>
                  </div>
                  <Link to="/cart">
                    <button type="submit" class="product__btn">
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link data-tip="Quick View" data-place="left" to={`/detail/product/${product.id}`}>
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
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HomePage
