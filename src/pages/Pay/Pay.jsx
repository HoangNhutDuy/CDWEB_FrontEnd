import React, { useState, useEffect } from "react"
import axios from "axios"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import FlightIcon from "@mui/icons-material/Flight"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import HeadphonesIcon from "@mui/icons-material/Headphones"
import { useNavigate } from "react-router-dom"
import "./cssPay.css"

const Pay = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    shippingAddress: "",
    country: "VN",
    shippingMethod: "storePickup",
    paymentMethod: "cod",
  })
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const token = localStorage.getItem("token")

  useEffect(() => {
    // Fetch cart items from backend
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/cart/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }) // Adjust the URL accordingly
        setCartItems(response.data.cartItems)
      } catch (error) {
        console.error("Error fetching cart items:", error)
      }
    }

    fetchCartItems()
  }, [])

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8080/order/checkout", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(formData)
      setTimeout(() => {
        navigate("/")
      }, 500)
      alert("Order placed successfully!")
    } catch (error) {
      console.error("There was an error placing the order!", error)
      alert("Failed to place order.")
    }
  }

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <>
      <Header />
      <main>
        <section className="section cart__area">
          <div className="container1">
            <div className="responsive__cart-area">
              <form className="cart__form" onSubmit={handleSubmit}>
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
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="dress__input"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="container_input">
                          <label htmlFor="firstName">Họ:</label>
                          <input
                            type="text"
                            className="dress__input"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="container_input">
                          <label htmlFor="lastName">Tên:</label>
                          <input
                            type="text"
                            className="dress__input"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="container_input">
                          <label htmlFor="phone">Số điện thoại:</label>
                          <input
                            type="tel"
                            className="dress__input"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="container_input">
                          <label htmlFor="address">Địa chỉ:</label>
                          <input
                            type="text"
                            className="dress__input"
                            id="shippingAddress"
                            value={formData.shippingAddress}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="container_input">
                          <label htmlFor="country">Quốc Gia</label>
                          <select
                            id="country"
                            className="dress__input"
                            value={formData.country}
                            onChange={handleInputChange}
                          >
                            <option value="VN">Việt Nam</option>
                          </select>
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
                                <input
                                  type="radio"
                                  id="shippingMethod"
                                  name="shippingMethod"
                                  value="storePickup"
                                  checked={
                                    formData.shippingMethod === "storePickup"
                                  }
                                  onChange={handleInputChange}
                                />
                              </td>
                              <td>
                                0<u>đ</u>
                              </td>
                              <td>Nhận hàng tại cửa hàng</td>
                              <td>Nhận hàng tại cửa hàng</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="shippingMethod"
                                  name="shippingMethod"
                                  value="standardShipping"
                                  checked={
                                    formData.shippingMethod ===
                                    "standardShipping"
                                  }
                                  onChange={handleInputChange}
                                />
                              </td>
                              <td>
                                0<u>đ</u>
                              </td>
                              <td>Vận chuyển tiêu chuẩn</td>
                              <td>
                                Miễn phí với đơn hàng phụ kiện trên 500.000đ
                              </td>
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
                                <input
                                  type="radio"
                                  id="paymentMethod"
                                  name="paymentMethod"
                                  value="cod"
                                  checked={formData.paymentMethod === "cod"}
                                  onChange={handleInputChange}
                                />
                              </td>
                              <td>Thanh toán khi nhận hàng</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="section__cart__pay__step4">
                      <div className="header__step2">
                        4   THÔNG TIN THANH TOÁN
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <th style={{ verticalAlign: "top" }}>SẢN PHẨM</th>
                            <th style={{ verticalAlign: "top" }}>SỐ LƯỢNG</th>
                            <th style={{ verticalAlign: "top" }}>TỔNG TIỀN</th>
                          </tr>
                          {cartItems.map((item, index) => (
                            <tr key={index}>
                              <td style={{ textAlign: "start" }}>
                                <img
                                  style={{ width: 80, height: 80 }}
                                  src={item.imageUrl}
                                  alt={item.name}
                                />
                                <span>{item.name}</span>
                                <br />
                                <span>{item.id}</span>
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {item.quantity}
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {item.price * item.quantity} <u>đ</u>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <table style={{ padding: "0px 10px" }}>
                        <tbody>
                          <tr>
                            <th style={{ textAlign: "start" }}>
                              Thành tiền tạm tính
                            </th>
                            <td style={{ textAlign: "right" }}>
                              {totalAmount} <u>đ</u>
                            </td>
                          </tr>
                          <tr>
                            <th style={{ textAlign: "start" }}>
                              Vận chuyển - Nhận hàng tại cửa hàng
                            </th>
                            <td style={{ textAlign: "right" }}>
                              0 <u>đ</u>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: "#f2f2f2" }}>
                            <th style={{ position: "relative", left: 10 }}>
                              THÀNH TIỀN
                            </th>
                            <td
                              style={{
                                textAlign: "right",
                                position: "relative",
                                right: 2,
                              }}
                            >
                              <span id="section__cart__pay__step4__price">
                                {totalAmount} <u>đ</u>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="before__pay">
                    <button
                      className="button__order"
                      type="submit"
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
        <section className="facility__section section" id="facility">
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

export default Pay
