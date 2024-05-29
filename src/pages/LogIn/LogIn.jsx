import React from "react"
import back7 from "../../icon/back7.png"
import jcphone from "../../images/jcphone.png"
import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./cssLogIn.css";
const LogIn = () => {
    // console.log(products.products)
    return (

        <>
  
        <div className="container">
         <Link to={'/'}>
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
                <form action="indexLogin.html">
                  <div className="field email">
                    <div className="form-text">
                      <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder=" "
                        className="form-input"
                      />
                      {/* required */}
                      <label htmlFor="name" className="form-label">
                        {" "}
                        Tên đăng nhập{" "}
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
                      />
                      {/* required */}
                      <label htmlFor="name" className="form-label">
                        {/* <span class="content-name">Mật khẩu</span> */}
                        Mật khẩu
                      </label>
                      <i className="error error-icon fas fa-exclamation-circle" />
                    </div>
                    <div className="error error-txt">Mật khẩu không thể để trống</div>
                  </div>
                
                  <input className="login1" type="submit" defaultValue="Đăng nhập" />
            
                  <div className="two-a">
                    <p className="left" href="">
                       Chưa có Tài Khoản
                    </p>
                    <Link to="/register" >
                      Đăng Ký
                   </Link>
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
               <FacebookIcon  />
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
      </>
      
    )
}



        export default LogIn