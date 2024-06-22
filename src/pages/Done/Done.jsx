import React from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import FlightIcon from "@mui/icons-material/Flight"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import HeadphonesIcon from "@mui/icons-material/Headphones"
import "./cssDone.css"

const Done = () => {
    // console.log(products.products)
    return (

        <>
       <Header />
 
  {/* Phần main của thông báo thành công */}
  <main >
    <section className="section cart__area">
      <div className="container">
        <div className="responsive__cart-area">
          <div className="cart__totals">
            <h3 className="thanhtoan">Thanh Toán Thành Công!</h3>
            <ul>
              <li>
                Tên Khách hàng
                <span>Đỗ Phú Nguyên Chương</span>
              </li>
              <li>
                Địa chỉ
                <span>Dh Nông Lâm HCM, TP Thủ Đức</span>
              </li>
              <li>
                Số điện thoại
                <span>0792.95.25.49</span>
              </li>
              <li>
                Email
                <span>20130212@st.hcmuaf.edu.vn</span>
              </li>
              <li>
                Tổng tiền
                <span className="new__price">900.000VNĐ</span>
              </li>
              <li>
                Vận chuyển
                <span>Freeship</span>
              </li>
              <li>
                Phương thức thanh toán
                <span>chuyển khoản</span>
              </li>
              <li>
                Mã số đơn hàng
                <span>JC0000099</span>
              </li>
              <li>
                Đã thanh toán
                <span className="new__price">-900.000 VNĐ</span>
              </li>
            </ul>
          <Link to={'/'}>Tiếp Tục Mua Hàng</Link>
          </div>
        </div>
      </div>
    </section>
    {/* Facility Section */}
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



        export default Done