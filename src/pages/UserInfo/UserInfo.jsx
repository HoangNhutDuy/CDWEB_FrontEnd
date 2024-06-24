import React, { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Box, Typography } from "@mui/material"
const UserInfo = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [user, setUser] = useState([])

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
    axios
      .get("http://localhost:8080/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res?.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Box
        sx={{
          margin: "30px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* item */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            margin: "10px 0",
          }}
        >
          <Typography variant="p" sx={{ width: "50%", textAlign: "left" }}>
            Họ và tên:
          </Typography>
          <Typography variant="p" sx={{ flex: 1, textAlign: "left" }}>
            {user?.fullName}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <Typography variant="p" sx={{ width: "50%", textAlign: "left" }}>
            Email:
          </Typography>
          <Typography variant="p" sx={{ flex: "1", textAlign: "left" }}>
            {user?.email}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <Typography variant="p" sx={{ width: "50%", textAlign: "left" }}>
            Số điện thoại:
          </Typography>
          <Typography variant="p" sx={{ flex: "1", textAlign: "left" }}>
            {user?.phoneNumber}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <Typography variant="p" sx={{ textAlign: "left", width: "50%" }}>
            Địa chỉ:
          </Typography>
          <Typography variant="p" sx={{ flex: 1, textAlign: "left" }}>
            {user?.address}
          </Typography>
        </Box>
      </Box>
      {/* change password */}
      <Box
        sx={{
          width: "70%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "190px",
        }}
      >
        <Link to="/change-password" style={{ color: "blue" }}>
          Đổi mật khẩu
        </Link>
      </Box>
      <Footer />
    </div>
  )
}

export default UserInfo
