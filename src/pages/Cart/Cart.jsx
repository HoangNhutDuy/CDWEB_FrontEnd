import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import FlightIcon from "@mui/icons-material/Flight"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import HeadphonesIcon from "@mui/icons-material/Headphones"
import DeleteIcon from "@mui/icons-material/Delete"
const Cart = () => {
  return (
    <>
      <Header />
      <main>
        <section class="section cart__area">
          <div class="container">
            <div class="responsive__cart-area">
              <form class="cart__form">
                <div class="cart__table table-responsive">
                  <table width="100%" class="table">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Tên</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="product__thumbnail">
                          <a href="/">
                            <img
                              src="https://cdn-v2.didongviet.vn/files/media/catalog/product/p/i/pin-sac-du-phong-mazer-infinite-boost-super-mini-v2-0-20000mah-didongviet.jpg"
                              alt=""
                            />
                          </a>
                        </td>
                        <td class="product__name">
                          <a href="/">
                            Pin sạc dự phòng Mazer Infinite.Boost SuperMINI
                            Pocket 8.0 V2 8000mAh
                          </a>
                          <br />
                          <small>Xanh</small>
                        </td>
                        <td class="product__price">
                          <div class="price">
                            <span class="new__price">550.000 VNĐ</span>
                          </div>
                        </td>
                        <td class="product__quantity">
                          <div class="input-counter">
                            <div>
                              <span class="minus-btn">
                                <DeleteIcon />
                              </span>
                              <input
                                type="text"
                                min="1"
                                value="1"
                                max="10"
                                class="counter-btn"
                              />
                              <span class="plus-btn">
                                <DeleteIcon />
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="product__subtotal">
                          <div class="price">
                            <span class="new__price">550.000 VNĐ</span>
                          </div>
                          <a href="/" class="remove__cart-item">
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="product__thumbnail">
                          <a href="/">
                            <img
                              src="https://cdn2.cellphones.com.vn/x/media/catalog/product/p/i/pin-sac-du-phong-magsafe-mophie-snap-plus-10000mah-1.jpg"
                              alt=""
                            />
                          </a>
                        </td>
                        <td class="product__name">
                          <a href="/">
                            Pin sạc dự phòng Mophie Snap+ Powerstation Stand
                            10.000mAh
                          </a>
                          <br />
                          <small>Đen</small>
                        </td>
                        <td class="product__price">
                          <div class="price">
                            <span class="new__price">1.320.000 VNĐ</span>
                          </div>
                        </td>
                        <td class="product__quantity">
                          <div class="input-counter">
                            <div>
                              <span class="minus-btn">
                                <DeleteIcon />
                              </span>
                              <input
                                type="text"
                                min="1"
                                value="1"
                                max="10"
                                class="counter-btn"
                              />
                              <span class="plus-btn">
                                <DeleteIcon />
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="product__subtotal">
                          <div class="price">
                            <span class="new__price">1.320.000 VNĐ</span>
                          </div>
                          <a href="/" class="remove__cart-item">
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="product__thumbnail">
                          <a href="/">
                            <img
                              src="https://image.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2022/09/Pin-sac-du-phong-Aukey-Basix-Slim-PB-N99-10000mAh.png"
                              alt=""
                            />
                          </a>
                        </td>
                        <td class="product__name">
                          <a href="/">
                            Pin sạc dự phòng Aukey Basix Slim PB-N99 10.000mAh
                          </a>
                          <br />
                          <small>Đen</small>
                        </td>
                        <td class="product__price">
                          <div class="price">
                            <span class="new__price">250.000 VNĐ</span>
                          </div>
                        </td>
                        <td class="product__quantity">
                          <div class="input-counter">
                            <div>
                              <span class="minus-btn">
                                <DeleteIcon />
                              </span>
                              <input
                                type="text"
                                min="1"
                                value="1"
                                max="10"
                                class="counter-btn"
                              />
                              <span class="plus-btn">
                                <DeleteIcon />
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="product__subtotal">
                          <div class="price">
                            <span class="new__price">250.000 VNĐ</span>
                          </div>
                          <a href="/" class="remove__cart-item">
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="product__thumbnail">
                          <a href="/">
                            <img
                              src="https://cdn-v2.didongviet.vn/files/products/2023/5/27/1/1687859330150_pin_sac_du_phong_aukey_10000mah_pb_n83s_mau_den_didongviet.jpg"
                              alt=""
                            />
                          </a>
                        </td>
                        <td class="product__name">
                          <a href="/">
                            Pin sạc dự phòng Aukey 10.000mAh PB-N83S
                          </a>
                          <br />
                          <small>Trắng/6.25</small>
                        </td>
                        <td class="product__price">
                          <div class="price">
                            <span class="new__price">550.000 VNĐ</span>
                          </div>
                        </td>
                        <td class="product__quantity">
                          <div class="input-counter">
                            <div>
                              <span class="minus-btn">
                                <DeleteIcon />
                              </span>
                              <input
                                type="text"
                                min="1"
                                value="1"
                                max="10"
                                class="counter-btn"
                              />
                              <span class="plus-btn">
                                <DeleteIcon />
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="product__subtotal">
                          <div class="price">
                            <span class="new__price">550.000 VNĐ</span>
                          </div>
                          <a href="/" class="remove__cart-item">
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="cart-btns">
                  <div class="continue__shopping">
                    <a href="/indexLogin.html">Tiếp tục mua sắm</a>
                  </div>
                  <div class="check__shipping">
                    <input type="checkbox" />
                    <span>Vận chuyển(+10000 VNĐ)</span>
                  </div>
                </div>

                <div class="cart__totals">
                  <h3>Tổng sản phẩm</h3>
                  <ul>
                    <li>
                      Tổng tiền
                      <span class="new__price">23.430.768 VNĐ</span>
                    </li>
                    <li>
                      Vận chuyển
                      <span class="shipPrice">$0</span>
                    </li>
                    <li>
                      Tổng tiền
                      <span class="new__price untilPrice">23.430.768 VNĐ</span>
                    </li>
                  </ul>
                  <a href="/pay.html">Tiến hành thanh toán</a>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section class="facility__section section" id="facility">
          <div class="container">
            <div class="facility__contianer">
              <div class="facility__box">
                <div class="facility-img__container">
                  <FlightIcon />
                </div>
                <p>MIỄN PHÍ VẬN CHUYỂN TOÀN CẦU</p>
              </div>

              <div class="facility__box">
                <div class="facility-img__container">
                  <CreditCardIcon />
                </div>
                <p>ĐẢM BẢO HOÀN TIỀN 100%</p>
              </div>

              <div class="facility__box">
                <div class="facility-img__container">
                  <LocalAtmIcon />
                </div>
                <p>THANH TOÁN BẰNG THẺ</p>
              </div>

              <div class="facility__box">
                <div class="facility-img__container">
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

export default Cart
