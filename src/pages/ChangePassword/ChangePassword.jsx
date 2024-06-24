import React, { useState, useEffect } from "react"

import back7 from "../../icon/back7.png"
import jcphone from "../../images/jcphone.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import axios from "axios"
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (!token) {
    navigate("/login")
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !oldPassword || !newPassword) {
      return
    }
    const payload = {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword,
    }
    axios
      .post("http://localhost:8080/auth/change-password", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res)
        alert("Thay đổi mật khẩu thành công ")
        localStorage.removeItem("token")
        navigate("/login")
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEmail(res?.data?.email)
      })
      .catch((err) => console.log(err))
  })
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
                        type="password"
                        name="name"
                        autocomplete="off"
                        placeholder=" "
                        className="form-input"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />

                      <label for="name" className="form-label">
                        {" "}
                        Mật khẩu cũ{" "}
                      </label>
                      {/* {error && (
                    <p
                      style={{
                        textAlign: "left",
                        marginTop: "10px",
                        color: "red",
                      }}
                    >
                      {error}
                    </p>
                  )} */}
                      <i className="error error-icon fas fa-exclamation-circle"></i>
                    </div>
                  </div>
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="password"
                        name="name"
                        autocomplete="off"
                        placeholder=" "
                        className="form-input"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />

                      <label for="name" className="form-label">
                        {" "}
                        Mật khẩu mới
                      </label>
                      {/* {error && (
                    <p
                      style={{
                        textAlign: "left",
                        marginTop: "10px",
                        color: "red",
                      }}
                    >
                      {error}
                    </p>
                  )} */}
                      <i className="error error-icon fas fa-exclamation-circle"></i>
                    </div>
                    <div className="error error-txt">
                      Tên đăng nhập không thể để trống
                    </div>
                  </div>

                  <input className="login1" value="Xác Nhận" type="submit" />

                  <div className="two-a">
                    <Link className="left" to="/profile">
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

export default ChangePassword
