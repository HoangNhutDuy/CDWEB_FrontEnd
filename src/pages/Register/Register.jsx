import React, { useState } from "react"
import back7 from "../../icon/back7.png"
import jcphone from "../../images/jcphone.png"
import { Link } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import TwitterIcon from "@mui/icons-material/Twitter"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { colors } from "@mui/material"
const Register = () => {
  // console.log(products.products)
  const [username, setUsername] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [fullNameError, setFullNameError] = useState("")
  const [addressError, setAddressError] = useState("")
  const regexPhoneNumber = /^0\d{9}$/
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!fullName) {
      setUsernameError("")
      setFullNameError("Không được để trống trường này")
      return
    } else if (!email) {
      setFullNameError("")
      setErrorEmail("Không được để trống trường này")
      return
    } else if (!regexEmail.test(email)) {
      setErrorEmail("Email không hợp lệ")
      return
    } else if (!regexPhoneNumber.test(phoneNumber)) {
      setErrorEmail("")
      setError("Số điện thoại không hợp lệ")
      return
    } else if (!address) {
      setError("")
      setAddressError("Không được để trống trường này")
      return
    }

    const payload = {
      username: username,
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      password: password,
    }
    axios
      .post("http://localhost:8080/auth/register", payload)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login")
        }
      })
      .catch((err) => {
        console.log(err)
      })
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
          <Link to={"/"}>
            <img className="homelogin" src={back7} alt="" />
          </Link>
        </div>
        {/* content */}
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
              <h3>Đăng kí</h3>
              <div className="form">
                <form
                  action="indexLogin.html"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder=" "
                        className="form-input"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      {/* required */}
                      <label htmlFor="name" className="form-label">
                        {" "}
                        Họ và tên{" "}
                      </label>
                      {fullNameError && (
                        <p
                          style={{
                            color: "red",
                            textAlign: "left",
                            marginTop: "10px",
                          }}
                        >
                          {fullNameError}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder=" "
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {/* required */}
                      <label htmlFor="name" className="form-label">
                        {" "}
                        Email
                      </label>
                      {errorEmail && (
                        <p
                          style={{
                            textAlign: "left",
                            color: "red",
                            marginTop: " 10px",
                          }}
                        >
                          {errorEmail}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder=" "
                        className="form-input"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      {/* required */}
                      <label htmlFor="name" className="form-label">
                        {" "}
                        Số điện thoại
                      </label>
                      {error && (
                        <p
                          style={{
                            color: " red",
                            textAlign: "left",
                            marginTop: "10px",
                          }}
                        >
                          {error}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder=" "
                        className="form-input"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      {/* required */}
                      <label htmlFor="name" className="form-label">
                        {" "}
                        Địa chỉ
                      </label>
                      {addressError && (
                        <p
                          style={{
                            color: " red",
                            textAlign: "left",
                            marginTop: "10px",
                          }}
                        >
                          {addressError}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field password">
                    <div className="form-text">
                      <input
                        type="password"
                        name="name"
                        autoComplete="off"
                        placeholder=" "
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* required */}
                      <label htmlFor="name" className="form-label">
                        {/* <span class="content-name">Mật khẩu</span> */}
                        Mật khẩu
                      </label>
                      <i className="error error-icon fas fa-exclamation-circle" />
                    </div>
                    <div className="error error-txt">
                      Mật khẩu không thể để trống
                    </div>
                  </div>
                  <input
                    className="login1"
                    type="submit"
                    defaultValue="Đăng kí"
                  />
                  <div className="two-a">
                    <p className="left" href="">
                      Đã Có Tài Khoản
                    </p>
                    <Link to="/logIn">Đăng Nhập</Link>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div className="or">
                <div className="cross-bar" />
                <span>Hoặc</span>
                <div className="cross-bar" />
              </div>
              <div className="icon">
                <div className="item-icon">
                  <FacebookIcon />
                </div>
                <div className="item-icon">
                  <GoogleIcon />
                </div>
                <div className="item-icon">
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
