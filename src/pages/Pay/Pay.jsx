import React from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import FlightIcon from "@mui/icons-material/Flight"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import HeadphonesIcon from "@mui/icons-material/Headphones"

import "./cssPay.css"
const Pay = () => {
    // console.log(products.products)
    return (

        <>
         <Header />

  <main >
    <section className="section cart__area">
      <div className="container1"  >
        <div className="responsive__cart-area">
          <form className="cart__form">
            <section className="cart__table table-responsive">
              <h1 style={{ marginTop: 20, marginLeft: 15 }}>
                Thanh toán giỏ hàng
              </h1>
              <p style={{ marginTop: 5, marginLeft: 15 }}>
                Vui lòng nhập các thông tin dưới đây để hoàn tất thanh toán.
              </p>
              <div className="section__cart__pay">
                <div className="section__cart__pay__step1">
                  <div className="header__step1">1   ĐỊA CHỈ NHẬN HÀNG</div>
                  <div className="form">
                 
                 <div className="container_input">
                    <label htmlFor="email" >Email</label>
                    <input
                      type="email"
                      className="dress__input"
                      id="dress__email"
                      oninput="checkEmail()"
                    />
                   </div>
                   <div className="container_input">
                    <p id="result1" />
                    <label htmlFor="firstname">Họ:</label>
                    <input
                      type="text"
                      className="dress__input"
                      id="dress__firstname"
                      oninput="checkFirstName()"
                    />
                    </div>
                    <div className="container_input">
                    <p id="result2" />
                    <label htmlFor="lastname">Tên:</label>
                    <input
                      type="text"
                      className="dress__input"
                      id="dress__lastname"
                      oninput="checkLastName()"
                    />
                     </div>
                     <div className="container_input">
                    <p id="result3" />
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                      type="tel"
                      className="dress__input"
                      id="dress__phone"
                      oninput="checkNumber()"
                    />
                    </div>
                    <div className="container_input">
                    <p id="result4" />
                    <label htmlFor="homedress">Địa chỉ:</label>
                    <input
                      type="text"
                      className="dress__input"
                      id="dress__homedress"
                      oninput="checkHomeDress()"
                    />
                       </div>
                       <div className="container_input">
                    <p id="result5" />
                    <label htmlFor="national">Quốc Gia</label>
                    <select
                      name="national"
                      className="dress__input"
                      id="dress__national"
                    >
                      <option value="VN">Việt Nam</option>
                    </select>
                    </div>
                    <div className="container_input">
                    <label htmlFor="city">Tỉnh/Thành Phố</label>
                    <select
                      name="city"
                      className="dress__input"
                      id="dress__city"
                    >
                      <option value="">An Giang</option>
                      <option value="">Bà Rịa-Vũng Tàu</option>
                      <option value="">Bắc Giang</option>
                      <option value="">Bắc Kạn</option>
                      <option value="">Bạc Liêu</option>
                      <option value="">Bắc Ninh</option>
                      <option value="">Bến Tre</option>
                      <option value="">Bình Định</option>
                      <option value="">Bình Dương</option>
                      <option value="">Bình Phước</option>
                      <option value="">Bình Thuận</option>
                      <option value="">Cà Mau</option>
                      <option value="">Cần Thơ</option>
                      <option value="">Cao Bằng</option>
                      <option value="">Đà Nẵng</option>
                      <option value="">Đắk Lắk</option>
                      <option value="">Đắk Nông</option>
                      <option value="">Điên Biên</option>
                      <option value="">Đồng Nai</option>
                      <option value="">Đồng Tháp</option>
                      <option value="">Gia Lai</option>
                      <option value="">Hà Giang</option>
                      <option value="">Hà Nam/option&gt;</option>
                      <option value="">Hà Nội</option>
                      <option value="">Hà Tĩnh</option>
                      <option value="">Hải Dương</option>
                      <option value="">Hải Phòng</option>
                      <option value="">Hậu Giang</option>
                      <option value="">TP.Hồ Chí Minh</option>
                      <option value="">Hòa Bình</option>
                      <option value="">Hưng Yên</option>
                      <option value="">Khánh Hòa</option>
                      <option value="">Kiên Giang</option>
                      <option value="">Kon Tum</option>
                      <option value="">Lai Châu</option>
                      <option value="">Lâm Đồng</option>
                      <option value="">Lạng Sơn</option>
                      <option value="">Lào Cai</option>
                      <option value="">Long An</option>
                      <option value="">Nam Định</option>
                      <option value="">Nghệ An</option>
                      <option value="">Ninh Bình</option>
                      <option value="">Ninh Thuận</option>
                      <option value="">Phú Thọ</option>
                      <option value="">Phú Yên</option>
                      <option value="">Quảng Bình</option>
                      <option value="">Quảng Nam</option>
                      <option value="">Quảng Ngãi</option>
                      <option value="">Quảng Ninh</option>
                      <option value="">Quảng Trị</option>
                      <option value="">Sóc Trăng</option>
                      <option value="">Sơn La</option>
                      <option value="">Tây Ninh</option>
                      <option value="">Thái Bình</option>
                      <option value="">Thái Nguyên</option>
                      <option value="">Thanh Hóa</option>
                      <option value="">Thừa Thiên-Huế</option>
                      <option value="">Tiền Giang</option>
                      <option value="">Trà Vinh</option>
                      <option value="">Tuyên Quang</option>
                      <option value="">Vĩnh Long</option>
                      <option value="">Vĩnh Phúc</option>
                      <option value="">Yên Bái</option>
                    </select>
                    </div>

                    <div className="container_input">
                    <label htmlFor="direct">Quận/huyện</label>
                    <input
                      type="text"
                      className="dress__input"
                      id="dress__direct"
                      oninput="checkDirect()"
                    />
                    </div>
                  
                    <div className="container_input">
                    <p id="result6" />
                  </div>
                  </div>
                </div>
                <div className="section__cart__pay__container">
                  <div className="section__cart__pay__step2">
                    <div className="header__step2">
                      2   PHƯƠNG THỨC VẬN CHUYỂN
                    </div>
                    <div id="hr" />
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            {" "}
                            <input
                              type="radio"
                              style={{ verticalAlign: "middle" }}
                            />
                              
                          </td>
                          <td>
                            0<u>đ</u>  
                          </td>
                          <td>
                            Nhận
                            <br /> hàng tại
                            <br /> cửa hàng 
                          </td>
                          <td>Nhận hàng tại cửa hàng</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" />
                          </td>
                          <td>
                            0<u>đ</u>
                          </td>
                          <td>
                            Vận
                            <br /> chuyển <br />
                            tiêu
                            <br /> chuẩn
                          </td>
                          <td>Miễn phí với đơn hàng phụ kiện trên 500.000đ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="section__cart__pay__step3">
                    <div className="header__step3">
                      3   PHƯƠNG THỨC THANH TOÁN
                    </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <input type="radio" />  
                          </td>
                          <td>Thanh toán khi nhận hàng</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="section__cart__pay__step4">
                  <div className="header__step2">4   THÔNG TIN THANH TOÁN</div>
                  <div id="hr2" />
                  <table>
                    <tbody>
                      <tr>
                        <th style={{ textAlign: "start" }}>
                          TÊN SẢN PHẨM     
                        </th>
                        <th style={{ verticalAlign: "top" }}>SỐ LƯỢNG     </th>
                        <th style={{ verticalAlign: "top" }}>TỔNG TIỀN </th>
                      </tr>
                      <tr>
                        <td
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: 150
                          }}
                        >
                          <img
                            style={{
                              width: "58.36px",
                              height: 75,
                              verticalAlign: "middle"
                            }}
                            src="
                                    https://cdn2.cellphones.com.vn/358x/media/catalog/product/p/i/pin-sac-du-phong-anker-powercore-iii-sense-slim-a1244-10000mah-1.png"
                            alt=""
                          />
                          <span>
                            Pin sạc dự phòng Anker PowerSlim 10000mAh PD A1244
                          </span>
                        </td>
                        <td>
                          <input
                            type="number"
                            defaultValue={1}
                            style={{
                              width: "23.98px",
                              height: 20,
                              paddingLeft: 15
                            }}
                            disabled=""
                          />
                        </td>
                        <td>
                          900.000 <u>đ</u>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div id="hr3" />
                  <table>
                    <tbody>
                      <tr>
                        <th style={{ verticalAlign: "middle" }}>Tạm tính</th>
                        <td style={{ textAlign: "center" }}>
                          900.000 <u>đ</u>
                        </td>
                      </tr>
                      <tr>
                        <th style={{ textAlign: "start" }}>
                          Vận chuyển Nhận hàng tại cửa hàng - Nhận hàng tại cửa
                          hàng
                        </th>
                        <td style={{ textAlign: "center" }}>
                          0 <u>đ</u>
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th style={{ position: "relative", top: 20, left: 10 }}>
                          THÀNH TIỀN
                        </th>
                        <td
                          style={{
                            textAlign: "start",
                            position: "relative",
                            right: 2
                          }}
                        >
                          <span id="section__cart__pay__step4__price">
                            {" "}
                            900.000 <u>đ</u>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="before__pay">
                <div className="section__cart__pay__step4__voucher">
                  <input
                    type="text"
                    className="input__voucher"
                    placeholder="Vui lòng nhập mã giảm giá"
                  />
                  <button className="button__apply">Áp dụng</button>
                </div>
                <button
                  className="button__order"
                  style={{ backgroundColor: "#BE1E2D" }}
                >
                  Đặt hàng
                </button>
              </div>
            </section>
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
 
       <Footer/>
  
       </>
  )
}



        export default Pay