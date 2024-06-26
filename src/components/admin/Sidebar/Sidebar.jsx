import Avatar from "@mui/material/Avatar"
import { Box } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import SchoolIcon from "@mui/icons-material/School"
import GradeIcon from "@mui/icons-material/Grade"
import LogoutIcon from "@mui/icons-material/Logout"
import Typography from "@mui/material/Typography"
import axios from "axios"
import Item from "../../Item"
import { useEffect, useState } from "react"
const Sidebar = () => {
  const [fullName, setFullName] = useState("")
  const token = localStorage.getItem("token")
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
        setFullName(res?.data?.fullName)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const categories = [
    { icon: <SchoolIcon />, name: "Quản lý người dùng", to: "/admin/users" },
    { icon: <HomeIcon />, name: "Quản lý sản phẩm", to: "/admin" },
    { icon: <GradeIcon />, name: "Quản lý đơn hàng", to: "/admin/orders" },
    { icon: <LogoutIcon />, name: "Logout", isLast: true },
  ]
  return (
    <Box
      sx={{
        width: 300,
        height: "100vh",
        backgroundColor: "#F2EAE1",
      }}
    >
      {/* Profile */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            my: 2,
            fontSize: "20px",
          }}
        >
          CRUD OPERATIONS
        </Typography>
        <Avatar
          sx={{
            width: 128,
            height: 128,
            borderRadius: "50%",
          }}
          alt="Karthi Madesh"
        />
        <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {fullName}
        </Typography>
        <Typography sx={{ color: "#FEAF00", fontSize: "16px" }}>
          Admin
        </Typography>
      </Box>
      {/* Categories */}
      <Box
        sx={{
          my: "80px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        {categories.map((cate, index) => (
          <Item
            key={index}
            name={cate?.name}
            icon={cate?.icon}
            isLast={cate?.isLast}
            to={cate?.to}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Sidebar
