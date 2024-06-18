import React, { useEffect, useRef, useState } from "react"
import back7 from "../../icon/back7.png"
import jcphone from "../../images/jcphone.png"
import { Link } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import TwitterIcon from "@mui/icons-material/Twitter"
import { useNavigate } from "react-router-dom"
import "./cssLogIn.css"
import axios from "axios"
const LogIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const ref = useRef()

  // console.log(products.products)
  // useEffect(() => {

  // },[])
  const handleSubmit = (e) => {
    e.preventDefault()
    let token = ""
    console.log(1)
    const payload = {
      email,
      password,
    }
    try {
      axios
        .post("http://localhost:8080/auth/login", payload)
        .then((res) => {
          token = res.data.token
          localStorage.setItem("token", token)
          navigate("/")
        })
        .catch((err) => {
          setError("Sai tài khoản hoặc mật khẩu, vui lòng đăng nhập lại")
          setEmail("")
          setPassword("")
          ref.current.focus()
          navigate("/login")
          console.log(err)
        })
    } catch (err) {
      setError("Đã xảy ra lỗi không xác định")
      navigate("/login")
      console.log(err)
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
              <h3>Đăng nhập</h3>
              <div className="form">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="text"
                        ref={ref}
                        autoComplete="off"
                        placeholder=" "
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {/* required */}
                      <label htmlFor="name" className="form-label">
                        {" "}
                        Email{" "}
                      </label>
                      <i className="error error-icon fas fa-exclamation-circle" />
                    </div>
                    <div className="error error-txt">
                      Tên đăng nhập không thể để trống
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
                    defaultValue="Đăng nhập"
                  />

                  <div className="two-a">
                    <p className="left" href="">
                      Chưa có Tài Khoản
                    </p>
                    <Link to="/register">Đăng Ký</Link>
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
            {error && <span style={{ color: "red" }}>{error}</span>}
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
