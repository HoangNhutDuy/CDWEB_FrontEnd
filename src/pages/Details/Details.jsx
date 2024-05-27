import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { products } from "../../data/products"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LoopIcon from "@mui/icons-material/Loop"
import FlightIcon from "@mui/icons-material/Flight"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import HeadphonesIcon from "@mui/icons-material/Headphones"
import { Link } from "react-router-dom"

const Details = () => {
  return (
    <>
      <Header />
      <main>
        <h2 id="section__title__product">
          Pin sạc dự phòng Anker PowerSlim 10000mAh PD A1244 PK.310
        </h2>
        <section id="section-detailsProduct">
          <div className="section__container__product">
            <hr />

            <div className="product-detail__left">
              <div className="container--image">
                <img
                  src="
                  https://cdn2.cellphones.com.vn/358x/media/catalog/product/p/i/pin-sac-du-phong-anker-powercore-iii-sense-slim-a1244-10000mah.jpg"
                  alt="img__product"
                  id="image__detail__product"
                />
              </div>
            </div>

            <div className="product-detail__center">
              <h3 style={{ color: "red" }}>
                900.000đ{" "}
                <p
                  style={{
                    color: "#707070",
                    position: "relative",
                    left: "90px",
                    bottom: "25px",
                  }}
                >
                  <del>1.000.000 </del>
                  <u>đ</u>{" "}
                </p>
              </h3>

              <p>Chọn màu để xem giá và chi nhánh có hàng</p>

              <div
                className="product__item"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn2.cellphones.com.vn/35x/media/catalog/product/p/i/pin-sac-du-phong-anker-powercore-iii-sense-slim-a1244-10000mah-1_1.png"
                  alt=""
                />

                <div className="product__title__item">
                  <strong>Đen</strong>
                  <br />
                  <span>
                    900.000<u>đ</u>
                  </span>
                </div>
              </div>

              <div className="input-counter">
                <span>Số lượng:</span>
                <div>
                  <button className="minus-btn" onclick="minus()">
                    <RemoveIcon />
                  </button>
                  <input
                    type="text"
                    value="1"
                    className="counter-btn"
                    id="amount"
                  />
                  <button className="plus-btn" onclick="plus()">
                    <AddIcon />
                  </button>
                </div>
              </div>

              <div className="title">
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <li>
                    <span>Giá:</span>
                    <span className="new__price">900.000 VNĐ</span>
                  </li>
                  <li>
                    <span>Hãng:</span>
                    <Link to="/">Anker</Link>
                  </li>
                  <li>
                    <span>Loại sản phẩm:</span>
                    <span>Sạc dự phòng</span>
                  </li>
                  <li>
                    <span>Hiện có:</span>
                    <span href="#" className="in-stock">
                      Trong kho (7 sản phẩm)
                    </span>
                  </li>
                </ul>

                <div
                  className="product-info__btn"
                  style={{ display: "flex", fontSize: "12px", color: "#555" }}
                >
                  <span>
                    <span>&nbsp; HƯỚNG DẪN KÍCH THƯỚC</span>
                  </span>
                  <span>
                    <span style={{ marginLeft: "3px" }}>
                      &nbsp; VẬN CHUYỂN{" "}
                    </span>
                  </span>
                  <span>
                    <span style={{ marginLeft: "5px" }}>
                      {" "}
                      HỎI VỀ SẢN PHẨM &nbsp;
                    </span>
                  </span>
                </div>

                <div className="product__bonus">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_Db-7oZT6WVbPR9ouktyhihrr-PCyf0lle3zrMQ_dEpQpp5UfVbwNflLldcQ-H5-fGs&usqp=CAU"
                    alt=""
                    style={{
                      width: "25px",
                      height: "25px",
                      position: "absolute",
                      top: "-15px",
                      left: "35px",
                      zIndex: "9",
                    }}
                  />{" "}
                  <span
                    style={{
                      color: "#be1e2d",
                      textAlign: "center",
                      width: "115px",
                      backgroundColor: "white",
                      position: "absolute",
                      top: "-15px",
                      left: "60px",
                    }}
                  >
                    Khuyến mãi
                  </span>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginTop: "20px",
                    }}
                  >
                    <li>
                      Duy nhất <b>Thứ 5</b>: Giá chỉ{" "}
                      <span style={{ color: "red" }}>940.000đ.</span>
                    </li>
                    <li>Tặng thêm cáp sạc 20cm Bagi</li>
                    <li>
                      Giảm thêm 30% Tối đa{" "}
                      <span style={{ color: "red" }}>600.000đ</span> khi mở thẻ
                      TPBank EVO
                    </li>
                  </ul>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <span>ƯU ĐÃI THÊM</span>
                    <p>
                      Giảm thêm 5% tối đa 1 triệu khi thanh toán qua Kredivo
                    </p>
                    <p>Giảm thêm 30% tối đa 600.000đ khi mở thẻ TPBank</p>
                  </div>
                </div>

                <div className="button">
                  <button className="button__pay" id="button__cart">
                    {" "}
                    THÊM VÀO <strong>GIỎ</strong> HÀNG
                  </button>

                  <button className="button__pay" id="button__buy">
                    MUA NGAY
                  </button>
                </div>
              </div>

              <div className="product-detail__right">
                <strong>Bộ sản phẩm</strong>

                <p style={{ color: "#333333", fontSize: "14px" }}>
                  Bộ sản phẩm bao gồm: Hộp Pin dự phòng, <br />
                  Sách HDSD
                </p>

                <strong>Bảo hành </strong>

                <p style={{ color: "#333333", fontSize: "14px" }}>
                  Bảo hành:<b>24 tháng</b> chính hãng Energiner
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="section__titles category__titles "
          style={{
            backgroundColor: "#ccc",
            padding: "10px 0",
            marginTop: "40px",
          }}
        >
          <div
            className="section__title filter-btn active"
            data-id="All Products"
          >
            <span className="dot"></span>
            <h1 className="primary__title">Các sản phẩm khác</h1>
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
                    <h4>{product.price * 23000} VND</h4>
                  </div>
                  <Link to="/cart">
                    <button type="submit" class="product__btn">
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link data-tip="Quick View" data-place="left" to="/detail">
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
      </main>
      <Footer />
    </>
  )
}

export default Details
