import { Box } from "@mui/material"
import Button from "@mui/material/Button"
import { Link, useNavigate } from "react-router-dom"

const Item = ({ name, icon, isLast, to }) => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return isLast ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        mx: "40px",
        marginTop: "200px",
      }}
    >
      <Button
        onClick={() => handleLogOut()}
        sx={{
          color: "#000",
          width: "100%",
          "&:hover": {
            backgroundColor: "#FEAF00",
          },
        }}
      >
        <Link
          to={to}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            textDecoration: "none",
            gap: "20px",
            color: "black",
            textAlign: "center",
            padding: "0 45px",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {name}
          {icon}
        </Link>
      </Button>
    </Box>
  ) : (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        "&:hover": {
          backgroundColor: "#FEAF00",
        },
      }}
    >
      <Button
        sx={{
          color: "#000",
          width: "250px",
        }}
      >
        <Link
          to={to}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            textDecoration: "none",
            gap: "20px",
            color: "black",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {icon}
          {name}
        </Link>
      </Button>
    </Box>
  )
}

export default Item
