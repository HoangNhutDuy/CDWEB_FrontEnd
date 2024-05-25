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
                <a href="/login.html" className="nav__link_giohang">
                  Giỏ Hàng
                </a>
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
      <div class="hero">
        <div class="glide" id="glide_1">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <div class="hero__center">
                  <div class="hero__left">
                    <span class="">Nguồn cảm hứng năm 2022</span>
                    <h1 class="">PIN DỰ PHÒNG DÀNH CHO BẠN!</h1>
                    <p>Mẫu Sạc Dự Phòng Bán Chạy nhất của năm</p>
                    <a href="/phone_chuong/product.html">
                      <button class="hero__btn">MUA NGAY</button>
                    </a>
                  </div>
                  <div class="hero__right">
                    <div class="hero__img-container">
                      <img class="banner_01" src={sacDuphong1} alt="banner2" />
                    </div>
                  </div>
                </div>
              </li>
              <li class="glide__slide">
                <div class="hero__center">
                  <div class="hero__left">
                    <span>Nguồn cảm hứng năm 2022</span>
                    <h1>ARIPODS 2 CHÍNH HÃNG APPLE</h1>
                    <p>Giảm Ngay 30% Khi Mua Hàng Trước Ngày 22/12/2022</p>
                    <a href="/phone_chuong/product.html">
                      <button class="hero__btn">MUA NGAY</button>
                    </a>
                  </div>
                  <div class="hero__right">
                    <img class="banner_02" src={taiNghe6} alt="banner2" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
          </div>

          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              {/* <svg>
                <use xlink:href="./images/sprite.svg#icon-arrow-left2"></use>
              </svg> */}
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              {/* <svg>
                <use xlink:href="./images/sprite.svg#icon-arrow-right2"></use>
              </svg> */}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
