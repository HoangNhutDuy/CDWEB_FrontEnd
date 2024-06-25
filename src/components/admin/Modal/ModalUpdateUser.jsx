import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import ModeEditIcon from "@mui/icons-material/ModeEdit"

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

export default function ModalUpdateUser({ id }) {
  const token = localStorage.getItem("token")
  const [open, setOpen] = React.useState(false)
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")

  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [address, setAddress] = React.useState()
  const [role, setRole] = React.useState("")
  const [password, setPassword] = React.useState("")
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
  const getUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const user = response?.data
      console.log(user)
      setFullName(user?.fullName)
      setEmail(user?.email)
      setPhoneNumber(user?.phoneNumber)
      setAddress(user?.address)
      setRole(user?.role)
    } catch (error) {
      console.log("Error fetching user details", error)
    }
  }

  const handleUpdateUser = async () => {
    const payload = {
      fullName,
      email,
      phoneNumber,
      password,
      address,
      role,
    }
    try {
      const response = await axios.put(
        `http://localhost:8080/user/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.status === 200) {
        setOpen(false)
        showToastSuccess("Cập nhật user thành công")

        setTimeout(() => {
          window.location.reload()
        }, 1000)
      } else {
        showToastFail("Cập nhật user thất bại")
      }
    } catch (error) {
      console.log("Error updating user", error)
      // Show error toast here
    }
  }
  React.useEffect(() => {
    getUserDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Button
        sx={{
          padding: "10px 28px",
          fontSize: "14px",
          color: "#FEAF00",
        }}
        onClick={handleOpen}
      >
        <ModeEditIcon sx={{ fontSize: "20px" }} />
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
            Chỉnh sửa người dùng
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "16px" }}>Họ và tên</Typography>
            <input
              type="text"
              value={fullName}
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Email
            </Typography>
            <input
              type="email"
              value={email}
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Mật khẩu
            </Typography>
            <input
              type="password"
              value={password}
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Số điện thoại
            </Typography>
            <input
              type="text"
              value={phoneNumber}
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
              value={address}
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              onChange={(e) => setAddress(e.target.value)}
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
              onClick={() => handleUpdateUser()}
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
      </Modal>
    </div>
  )
}
