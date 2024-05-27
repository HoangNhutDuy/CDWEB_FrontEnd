import React from "react"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import WifiTetheringIcon from "@mui/icons-material/WifiTethering"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer id="footer" className="section footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer-top__box">
            <h3>BỔ SUNG</h3>
            <Link to="/">Nhãn hiệu</Link>
            <Link to="/">Phiếu quà tặng</Link>
            <Link to="/">Chi nhánh</Link>
            <Link to="/">Đặc biệt</Link>
            <Link to="/">Sơ đồ trang Web</Link>
          </div>
          <div className="footer-top__box">
            <h3>THÔNG TIN</h3>
            <Link to="/">Về chúng tôi</Link>
            <Link to="/">Chính sách bảo mật</Link>
            <Link to="/">Các điều khoản và điều kiện</Link>
            <Link to="/">Liên hệ chúng tôi</Link>
            <Link to="/">Sơ đồ trang Web</Link>
          </div>
          <div className="footer-top__box">
            <h3>TÀI KHOẢN CỦA TÔI</h3>
            <Link to="/">Tài khoản của tôi</Link>
            <Link to="/">Lịch sử đơn hàng</Link>
            <Link to="/">Danh sách mong muốn</Link>
            <Link href="/">Cung cấp thông tin</Link>
            <Link to="/">Quay lại</Link>
          </div>
          <div className="footer-top__box">
            <h3>CONTACT US</h3>
            <div style={{ display: "flex" }}>
              <span>
                <LocationOnIcon />
              </span>
              <span href="https://www.google.com/maps/dir/10.8840587,106.7833045/t%C3%B2a+b5+ktx+khu+b+%C4%91hqg+tphcm/@10.8838766,106.7809145,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3174d890227de92d:0x99150888f275361b!2m2!1d106.7829712!2d10.8839777">
                Tòa B5, KTX_B ĐHQG ,Linh Trung, Thủ Đức, TPHCM
              </span>
            </div>
            <div>
              <span>
                {/* <svg>
                  <use xlink:href="./images/sprite.svg#icon-envelop"></use>
                </svg> */}
                <EmailIcon />
              </span>
              JC-PHONEcompany@gmail.com
            </div>
            <div>
              <span>
                {/* <svg>
                  <use xlink:href="./images/sprite.svg#icon-phone"></use>
                </svg> */}
                <PhoneIcon />
              </span>
              08.999.999.99
            </div>
            <div>
              <span>
                {/* <svg>
                  <use xlink:href="./images/sprite.svg#icon-paperplane"></use>
                </svg> */}
                <WifiTetheringIcon />
              </span>
              TOÀN VIỆT NAM
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer-bottom__box"></div>
        <div className="footer-bottom__box"></div>
      </div>
    </footer>
  )
}

export default Footer
