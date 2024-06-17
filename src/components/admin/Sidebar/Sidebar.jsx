import Avatar from "@mui/material/Avatar"
import { Box } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import SchoolIcon from "@mui/icons-material/School"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import AssessmentIcon from "@mui/icons-material/Assessment"
import SettingsIcon from "@mui/icons-material/Settings"
import LogoutIcon from "@mui/icons-material/Logout"
import Typography from "@mui/material/Typography"
import Item from "../../Item"
const Sidebar = () => {
  const categories = [
    { icon: <SchoolIcon />, name: "Quản lý người dùng", to: "/admin/users" },
    { icon: <HomeIcon />, name: "Quản lý sản phẩm", to: "/admin" },
    {
      icon: <BookmarkBorderIcon />,
      name: "Quản lý danh mục",
      to: "/admin/categories",
    },
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
          Karthi Madesh
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
