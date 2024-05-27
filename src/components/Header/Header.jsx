import React from "react"
import opLungImg from "../../icon/oplung.png"
import sacDuPhongImg from "../../icon/sacduphong.jpg"
import taingheImg from "../../icon/tainghe.png"
import cucsacImg from "../../icon/capsac.png"
import kinhcuonglucImg from "../../icon/kinhcuongluc.jpg"
import phukienAppleImg from "../../icon/apple1.png"
import giadodienthoaiImg from "../../icon/gaydienthoai.png"
import tuichongnuocImg from "../../icon/tuichongnuoc.png"
import phukienkhacImg from "../../icon/khac.jpg"

import PersonIcon from "@mui/icons-material/Person"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import SearchIcon from "@mui/icons-material/Search"
import sacDuphong1 from "../../images/sacduphong1.png"
import taiNghe6 from "../../images/tainghe6.png"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <div className="navigation">
          <div className="container">
            <nav className="nav">
              <div className="nav__hamburger">
                <svg xmlns="./images/sprite.svg#icon-menu"></svg>
              </div>

              <div className="nav__logo">
                <Link to="/" classNameName="scroll-link">
                  JC SHOP
                </Link>
              </div>

              <div className="nav__menu">
                <div className="menu__top">
                  <span className="nav__category">PHONE</span>
                  {/* <a href="#" className="close__toggle">
                        <svg>
                          <use xlink:href="./images/sprite.svg#icon-cross"></use>
                        </svg>
                      </a> */}
                </div>
                <ul className="nav__list">
                  <li className="nav__item">
                    <Link to="/" className="nav__link scroll-link">
                      Trang chủ
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/" className="nav__link scroll-link">
                      Sản phẩm
                    </Link>
                  </li>
                  <li
                    className="nav__item_seach"
                    style={{
                      padding: "4px 10px",
                      fontSize: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "300px",
                    }}
                  >
                    <input
                      className="input_seach"
                      id="input_seach"
                      type="text"
                      placeholder="Tìm kiếm tại đây"
                    />
                    <div className="nav__icons">
                      <Link to="/">
                        <SearchIcon sx={{ fontSize: "20px" }} />
                      </Link>
                    </div>
                  </li>
                  <li className="nav__item">
                    <div className="nav__item_hotro">
                      <Link to="/" className="nav__link scroll-link">
                        HOTLINE HỖ TRỢ
                      </Link>
                      <br />
                      <span className="nav__link scroll-link">
                        0999.999.999
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="nav__icons">
                <Link
                  to="/login"
                  className="icon__item"
                  style={{ marginRight: "-10px" }}
                >
                  {/* <svg className="icon__user" xmlns={user}></svg> */}
                  <PersonIcon sx={{ color: "black" }} />
                </Link>
                <div className="nav__item_user" id="nav__item_user">
                  <Link to="/login" className="nav__link scroll-link">
                    Đăng Nhập /
                  </Link>
                  <Link to="/register" className="nav__link scroll-link">
                    Đăng Ký
                  </Link>
                  <br />
                  <span href="#login" className="nav__link scroll-link">
                    Thành Viên
                  </span>
                </div>
              </div>

              <div className="nav__icons" id="nav__item_giohang">
                <Link to="/cart" className="icon__item">
                  <ShoppingCartCheckoutIcon sx={{ color: "black" }} />
                  <span id="cart__total">4</span>
                </Link>
                <Link to="/cart" className="nav__link_giohang">
                  Giỏ Hàng
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <header id="Header_danhmuc" className="Header_danhmuc">
        <div className="navigation_danhmuc">
          <div className="container">
            <nav className="nav">
              {/* <div className="nav__hamburger">
                    <svg>
                      <use xlink:href="./images/sprite.svg#icon-menu"></use>
                    </svg>
                  </div> */}

              <ul className="nav__list" id="nav__list_DANHMUC">
                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={opLungImg}
                      alt="danh muc"
                    />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      ỐP LƯNG
                    </Link>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={sacDuPhongImg}
                      alt="danhmucs"
                    />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      SẠC DỰ PHÒNG
                    </Link>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={taingheImg}
                      alt=""
                    />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      TAI NGHE
                    </Link>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img className="icon__itemdanhmuc" src={cucsacImg} alt="" />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      CỤC SẠC
                    </Link>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={kinhcuonglucImg}
                      alt=""
                    />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      KÍNH CƯỜNG LỰC
                    </Link>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={phukienAppleImg}
                      alt=""
                    />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      PHỤ KIỆN APPLE
                    </Link>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={giadodienthoaiImg}
                      alt=""
                    />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      GIÁ ĐỠ ĐIỆN THOẠI
                    </Link>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={tuichongnuocImg}
                      alt=""
                    />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      TÚI CHỐNG NƯỚC
                    </Link>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <Link to="/" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={phukienkhacImg}
                      alt=""
                    />
                  </Link>
                  <li className="nav__item">
                    <Link to="/" className="scroll-linkDANHMUC">
                      PHỤ KIỆN KHÁC
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
