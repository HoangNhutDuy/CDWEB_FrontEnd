import React, { useState } from "react"
import back7 from "../../icon/back7.png"
import jcphone from "../../images/jcphone.png"
import "./quenmatkhau.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      try {
        axios
          .post(`http://localhost:8080/api/reset-password?email=${email}`)
          .then((res) => {
            const result = res?.data
            if (result.status === 200) {
              alert("Gửi mã OTP thành công")
              setTimeout(() => {
                navigate("/reset")
              }, 1000)
            }
          })
          .catch((err) => {
            setError("Email không tồn tại trong hệ thống")
          })
      } catch (error) {}
    }
  }
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
                <form
                  action="quenmatkhau1.html"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="text"
                        name="name"
                        autocomplete="off"
                        placeholder=" "
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <label for="name" className="form-label">
                        {" "}
                        Email{" "}
                      </label>
                      {error && (
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: "10px",
                            color: "red",
                          }}
                        >
                          {error}
                        </p>
                      )}
                      <i className="error error-icon fas fa-exclamation-circle"></i>
                    </div>
                    <div className="error error-txt">
                      Tên đăng nhập không thể để trống
                    </div>
                  </div>

                  <input className="login1" value="Xác Nhận" type="submit" />

                  <div className="two-a">
                    <Link className="left" to="/login">
                      Quay lại
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
