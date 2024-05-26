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
                <a href="/index.html" classNameName="scroll-link">
                  JC SHOP
                </a>
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
                    <a href="#header" className="nav__link scroll-link">
                      Trang chủ
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#category" className="nav__link scroll-link">
                      Sản phẩm
                    </a>
                  </li>
                  <li className="nav__item_seach">
                    <input
                      className="input_seach"
                      id="input_seach"
                      type="text"
                      placeholder="seach..."
                    />
                    <div className="nav__icons">
                      {/* <a href="#" className="icon__item" id="icon__item_seach">
                            <svg className="icon__search">
                              <use xlink:href="./images/sprite.svg#icon-search"></use>
                            </svg>
                          </a> */}
                    </div>
                  </li>
                  <li className="nav__item">
                    <div className="nav__item_hotro">
                      <a href="#hotro" className="nav__link scroll-link">
                        HOTLINE HỖ TRỢ
                      </a>{" "}
                      <br />
                      <a href="#hotro" className="nav__link scroll-link">
                        0999.999.999
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="nav__icons">
                <a href="/login.html" className="icon__item">
                  {/* <svg className="icon__user" xmlns={user}></svg> */}
                  <PersonIcon sx={{ color: "black" }} />
                </a>
                <div className="nav__item_user" id="nav__item_user">
                  <a href="#login" className="nav__link scroll-link">
                    Đăng Nhập /
                  </a>
                  <a href="#register" className="nav__link scroll-link">
                    Đăng Ký
                  </a>
                  <br />
                  <a href="#login" className="nav__link scroll-link">
                    Thành Viên
                  </a>
                </div>
              </div>

              <div className="nav__icons" id="nav__item_giohang">
                <a href="/login.html" className="icon__item">
                  <ShoppingCartCheckoutIcon sx={{ color: "black" }} />
                  <span id="cart__total">4</span>
                </a>
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
                  <a href="/indexseach.html" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={opLungImg}
                      alt="danh muc"
                    />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      ỐP LƯNG
                    </a>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <a href="/indexseach.html" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={sacDuPhongImg}
                      alt="danhmucs"
                    />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      SẠC DỰ PHÒNG
                    </a>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <a href="/indexseach.html" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={taingheImg}
                      alt=""
                    />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      TAI NGHE
                    </a>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <a href="/indexseach.html" className="icon__item">
                    <img className="icon__itemdanhmuc" src={cucsacImg} alt="" />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      CỤC SẠC
                    </a>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <a href="/indexseach.html" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={kinhcuonglucImg}
                      alt=""
                    />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      KÍNH CƯỜNG LỰC
                    </a>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <a href="/indexseach.html" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={phukienAppleImg}
                      alt=""
                    />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      PHỤ KIỆN APPLE
                    </a>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <a href="/indexseach.html" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={giadodienthoaiImg}
                      alt=""
                    />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      GIÁ ĐỠ ĐIỆN THOẠI
                    </a>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <a href="/indexseach.html" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={tuichongnuocImg}
                      alt=""
                    />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      TÚI CHỐNG NƯỚC
                    </a>
                  </li>
                </div>

                <div className="nav__icons_danhmuc">
                  <a href="/indexseach.html" className="icon__item">
                    <img
                      className="icon__itemdanhmuc"
                      src={phukienkhacImg}
                      alt=""
                    />
                  </a>
                  <li className="nav__item">
                    <a href="/indexseach.html" className="scroll-linkDANHMUC">
                      PHỤ KIỆN KHÁC
                    </a>
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
