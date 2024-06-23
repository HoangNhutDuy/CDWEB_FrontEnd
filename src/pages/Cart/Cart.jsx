import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import {
  Flight as FlightIcon,
  CreditCard as CreditCardIcon,
  LocalAtm as LocalAtmIcon,
  Headphones as HeadphonesIcon,
  Delete as DeleteIcon,
  Remove as RemoveIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios"; // Thêm axios để gọi API

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState(0);
  const token = localStorage.getItem("token");

  // Gọi API để lấy dữ liệu giỏ hàng khi component được render lần đầu tiên
  useEffect(() => {
    axios.get("http://localhost:8080/cart/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setCartItems(response.data.cartItems);
      })
      .catch(error => {
        console.error("Error fetching cart data:", error);
      });
      
  }, [token]);

  const handleQuantityChange = (productId, amount) => {
    const updatedCartItems = cartItems.map((item) =>
      item.productId === productId ? { ...item, quantity: Math.min(100, Math.max(1, item.quantity + amount)) } : item
    );
    setCartItems(updatedCartItems);

    // Gọi API để cập nhật số lượng sản phẩm
    axios.put(`http://localhost:8080/cart/update`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        productId: productId,
        quantity: updatedCartItems.find(item => item.productId === productId).quantity,
      }
    })
      .catch(error => {
        console.error("Error updating cart item quantity:", error);
      });
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));

    // Gọi API để xóa sản phẩm khỏi giỏ hàng
    axios.delete(`http://localhost:8080/cart/remove`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        productId: productId,
      }
    })
      .catch(error => {
        console.error("Error removing cart item:", error);
      });
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.checked ? 10000 : 0);
  };

  let totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <main>
        <section className="section cart__area">
          <div className="container">
            <div className="responsive__cart-area">
              <form className="cart__form">
                <div className="cart__table table-responsive">
                  <table width="100%" className="table">
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
                      {cartItems.map((item) => (
                        <tr key={item.productId}>
                          <td className="product__thumbnail">
                            <Link to={`http://localhost:3000/detail/product/${item.productId}`}>
                              <img src={item.img} alt={item.name} />
                            </Link>
                          </td>
                          <td className="product__name">
                            <Link to={`http://localhost:3000/detail/product/${item.productId}`}>{item.name}</Link>
                            <br />
                            <small>{item.color}</small>
                          </td>
                          <td className="product__price">
                            <div className="price">
                              <span className="new__price">
                                {item.price.toLocaleString()} VNĐ
                              </span>
                            </div>
                          </td>
                          <td className="product__quantity">
                            <div className="input-counter" style={{ marginTop: "0" }}>
                              <IconButton
                                onClick={() => handleQuantityChange(item.productId, -1)}
                                disabled={item.quantity === 1}
                              >
                                <RemoveIcon />
                              </IconButton>
                              <input
                                type="text"
                                min="1"
                                value={item.quantity}
                                readOnly
                                className="counter-btn"
                              />
                              <IconButton
                                onClick={() => handleQuantityChange(item.productId, 1)}
                                disabled={item.quantity === 100}
                              >
                                <AddIcon />
                              </IconButton>
                            </div>
                          </td>
                          <td className="product__subtotal">
                            <div className="price">
                              <span className="new__price">
                                {(item.price * item.quantity).toLocaleString()} VNĐ
                              </span>
                            </div>
                            <IconButton
                              onClick={() => handleRemoveItem(item.productId)}
                              className="remove__cart-item"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="cart-btns">
                  <div className="continue__shopping">
                    <Link to="/">Tiếp tục mua sắm</Link>
                  </div>
                  <div className="check__shipping">
                    <input
                      type="checkbox"
                      onChange={handleShippingChange}
                    />
                    <span>Vận chuyển (+10.000 VNĐ)</span>
                  </div>
                </div>

                <div className="cart__totals">
                  <h3>Tổng sản phẩm</h3>
                  <ul>
                    <li>
                      Tổng tiền
                      <span className="new__price">
                        {totalAmount.toLocaleString()} VNĐ
                      </span>
                    </li>
                    <li>
                      Vận chuyển
                      <span className="shipPrice">
                        {shipping.toLocaleString()} VNĐ
                      </span>
                    </li>
                    <li>
                      Tổng tiền
                      <span className="new__price untilPrice">
                        {(totalAmount + shipping).toLocaleString()} VNĐ
                      </span>
                    </li>
                  </ul>
                  <Link to="/pay">Tiến hành thanh toán</Link>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="facility__section section" id="facility">
          <div className="container">
            <div className="facility__container">
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
  );
};

export default Cart;
