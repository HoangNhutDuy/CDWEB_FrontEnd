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
import { useState, useEffect } from "react"
import PersonIcon from "@mui/icons-material/Person"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import SearchIcon from "@mui/icons-material/Search"
import sacDuphong1 from "../../images/sacduphong1.png"
import taiNghe6 from "../../images/tainghe6.png"
import axios from "axios"

import { Link } from "react-router-dom"
const Header = () => {
  const [currentUser, setCurrentUser] = useState(false)
  const [fullName, setFullName] = useState("")

  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : ""
  console.log(token)
  useEffect(() => {
    getInfoUser()
  }, [])
  const getInfoUser = () => {
    axios
      .get("http://localhost:8080/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCurrentUser(true)
        setFullName(res?.data?.fullName)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }
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
                {token ? (
                  <Link
                    to="/profile"
                    className="icon__item"
                    style={{ marginRight: "-10px" }}
                  >
                    {/* <svg className="icon__user" xmlns={user}></svg> */}
                    <PersonIcon sx={{ color: "black" }} />
                  </Link>
                ) : (
                  <PersonIcon sx={{ color: "black" }} />
                )}

                <div className="nav__item_user" id="nav__item_user">
                  {currentUser ? (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "14px" }}>
                        Xin chào {fullName}
                      </span>
                      <Link
                        style={{ color: "white", marginTop: "5px" }}
                        onClick={() => handleLogout()}
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link to="/login" className="nav__link scroll-link">
                        Đăng Nhập /
                      </Link>
                      <Link to="/register" className="nav__link scroll-link">
                        Đăng Ký
                      </Link>
                      <span className="nav__link scroll-link">Thành Viên</span>
                    </>
                  )}

                  <br />
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
    </>
  )
}

export default Header
