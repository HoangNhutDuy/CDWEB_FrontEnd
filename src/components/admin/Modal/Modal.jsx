import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
// import axios from "axios"
// import { toast } from "react-toastify"
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
  const [phoneNumber, setPhoneNumber] = React.useState("")

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const token = localStorage.getItem("token")
  const [role, setRole] = React.useState("")
  const handleChange = (event) => {
    setRole(event.target.value)
  }

  // const showToastSuccess = (message) => {
  //   if (!message) {
  //     return
  //   }
  //   toast.success(message, {
  //     position: "bottom-right",
  //     autoClose: 500,
  //   })
  // }
  // const handleAddNewStudent = async () => {
  //   if (
  //     fullName.length === 0 ||
  //     email.length === 0 ||
  //     phoneNumber.length === 0 ||
  //     age.length === 0
  //   ) {
  //     return
  //   }
  //   const payload = {
  //     name: fullName,
  //     email: email,
  //     phoneNumber: phoneNumber,
  //     age: age,
  //   }
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/students/add",
  //       payload,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //     if (response.status === 200) {
  //       showToastSuccess("Add student successfully")
  //       setTimeout(() => {
  //         window.location.reload()
  //       }, 1000)
  //     } else {
  //       console.log("Failed")
  //     }
  //   } catch (error) {
  //     console.log("failed", error)
  //   }
  // }
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm mới người dùng
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Họ và tên</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Email</Typography>
            <input
              type="email"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Mật khẩu</Typography>
            <input
              type="password"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              // onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Số điện thoại</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              // onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Địa chỉ</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              // onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Vai trò</Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value="user">USER</MenuItem>
                  <MenuItem value="admin">ADMIN</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          {/* Button container */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{ backgroundColor: "#feaf00", marginTop: "1rem" }}
              // onClick={() => handleAddNewStudent()}
            >
              Confirm
            </Button>
            <Button
              sx={{ backgroundColor: "#feaf00", marginTop: "1rem" }}
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
