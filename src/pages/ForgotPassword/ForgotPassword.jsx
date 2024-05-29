import React from "react"
import back7 from "../../icon/back7.png"
import jcphone from "../../images/jcphone.png"
import "./quenmatkhau.css"
import { Link } from "react-router-dom"
const ForgotPassword = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(90deg, #dd5e89, #f7bb97)",
          position: "relative",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div className="container">
          <Link to="/login">
            <img class="homelogin" src={back7} alt="" />
          </Link>
        </div>
        <div className="total">
          <div className="image-text">
            <div className="image">
              <img src={jcphone} alt="JC Team" />
            </div>
            <div className="text">
              <p className="text-two-line">
                <br />
                <br />
                Sự hài lòng là phương châm của chúng tôi
              </p>
            </div>
          </div>
          <div className="login">
            <div className="login-contains">
              <h3>Quên Mật Khẩu</h3>
              <div className="form">
                <form action="quenmatkhau1.html">
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="text"
                        name="name"
                        autocomplete="off"
                        placeholder=" "
                        className="form-input"
                      />

                      <label for="name" className="form-label">
                        {" "}
                        Tên đăng nhập{" "}
                      </label>
                      <i className="error error-icon fas fa-exclamation-circle"></i>
                    </div>
                    <div className="error error-txt">
                      Tên đăng nhập không thể để trống
                    </div>
                  </div>
                  <div className="field maxacnhan">
                    <div className="form-text">
                      <input
                        type="text"
                        name="name"
                        autocomplete="off"
                        placeholder=" "
                        className="form-input"
                      />

                      <label for="name" className="form-label">
                        Nhập mã xác nhận
                      </label>
                      <i className="error error-icon fas fa-exclamation-circle"></i>
                    </div>
                    <div className="error error-txt">
                      Sai mã xác nhận vui lòng nhập lại
                    </div>
                  </div>

                  <input className="login1" value="Xác Nhận" type="submit" />

                  <div className="two-a">
                    <p className="left" href="">
                      Chưa có mã xác nhận
                    </p>
                    <Link className="right" to="/">
                      Gửi mã
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
