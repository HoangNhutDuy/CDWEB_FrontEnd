import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

// import * as httpRequest from "../../../utils/httpRequest"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [role, setRole] = React.useState("")
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const token = localStorage.getItem("token")

  const showToastSuccess = (message) => {
    if (!message) {
      return
    }
    toast.success(message, {
      position: "bottom-right",
      autoClose: 500,
    })
  }
  const showToastFail = (message) => {
    if (!message) {
      return
    }
    toast?.error(message, {
      position: "bottom-right",
    })
  }
  const handleAddNewUser = () => {
    if (
      fullName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      phoneNumber.length === 0 ||
      address.length === 0 ||
      role.length === 0
    ) {
      return
    }
    const payload = {
      fullName: fullName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      role: role,
    }
    try {
      axios
        .post("http://localhost:8080/user/add", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            setOpen(false)
            showToastSuccess("Thêm user thành công")
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }
        })
        .catch((err) => {
          showToastFail("Thêm user thất bại")
        })
    } catch (error) {
      console.log("failed", error)
    }
  }
  return (
    <div>
      <Button
        sx={{
          backgroundColor: "#FEAF00",
          padding: "10px 28px",
          "&:hover": {
            backgroundColor: "#b37c04",
          },
          fontSize: "14px",
          color: "white",
        }}
        onClick={handleOpen}
      >
        Thêm mới người dùng
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: "20px" }}
          >
            Thêm mới người dùng
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "16px" }}>Họ và tên</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Email
            </Typography>
            <input
              type="email"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Mật khẩu
            </Typography>
            <input
              type="password"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Số điện thoại
            </Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Địa chỉ
            </Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Vai trò
            </Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontSize: "16px" }}
                >
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <MenuItem value="USER">USER</MenuItem>
                  <MenuItem value="ADMIN">ADMIN</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          {/* Button container */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{
                backgroundColor: "#feaf00",
                marginTop: "1rem",
                fontSize: "16px",
                color: "white",
              }}
              onClick={() => handleAddNewUser()}
            >
              Confirm
            </Button>
            <Button
              sx={{
                backgroundColor: "#feaf00",
                marginTop: "1rem",
                fontSize: "16px",
                color: "white",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
        {/* <ToastContainer /> */}
      </Modal>
    </div>
  )
}
