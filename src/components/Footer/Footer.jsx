import React from "react"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import WifiTetheringIcon from "@mui/icons-material/WifiTethering"
const Footer = () => {
  return (
    <footer id="footer" className="section footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer-top__box">
            <h3>BỔ SUNG</h3>
            <a href="/htmlfooter/nhanhieu.html">Nhãn hiệu</a>
            <a href="/htmlfooter/phieuquatang.html">Phiếu quà tặng</a>
            <a href="/htmlfooter/chinhanh.html">Chi nhánh</a>
            <a href="/">Đặc biệt</a>
            <a href="/htmlfooter/sodoweb.html">Sơ đồ trang Web</a>
          </div>
          <div className="footer-top__box">
            <h3>THÔNG TIN</h3>
            <a href="/htmlfooter/vechungtoi.html">Về chúng tôi</a>
            <a href="/htmlfooter/chinhsachbaomat.html">Chính sách bảo mật</a>
            <a href="/htmlfooter/dieukhoanvadieukien.html">
              Các điều khoản và điều kiện
            </a>
            <a href="/htmlfooter/lienhechungtoi.html">Liên hệ chúng tôi</a>
            <a href="/htmlfooter/sodoweb.html">Sơ đồ trang Web</a>
          </div>
          <div className="footer-top__box">
            <h3>TÀI KHOẢN CỦA TÔI</h3>
            <a href="/login.css">Tài khoản của tôi</a>
            <a href="/login.css">Lịch sử đơn hàng</a>
            <a href="/login.css">Danh sách mong muốn</a>
            <a href="/">Cung cấp thông tin</a>
            <a href="/index.html">Quay lại</a>
          </div>
          <div className="footer-top__box">
            <h3>CONTACT US</h3>
            <div style={{ display: "flex" }}>
              <span>
                <LocationOnIcon />
              </span>
              <a href="https://www.google.com/maps/dir/10.8840587,106.7833045/t%C3%B2a+b5+ktx+khu+b+%C4%91hqg+tphcm/@10.8838766,106.7809145,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3174d890227de92d:0x99150888f275361b!2m2!1d106.7829712!2d10.8839777">
                Tòa B5, KTX_B ĐHQG ,Linh Trung, Thủ Đức, TPHCM
              </a>
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
