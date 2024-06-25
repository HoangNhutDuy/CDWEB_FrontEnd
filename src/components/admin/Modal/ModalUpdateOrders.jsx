import React from "react"

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
const ModalUpdateOrders = () => {
  const token = localStorage.getItem("token")
  const [open, setOpen] = React.useState(false)
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
            Chỉnh sửa đơn hàng
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "16px" }}>Mã đơn hàng</Typography>
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
              Mã người dùng
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
              Tổng tiền
            </Typography>
            <input
              type="text"
              // value={password}
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Địa chỉ giao hàng
            </Typography>
            <input
              type="text"
              // value={phoneNumber}
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              // onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Box>
          <Box sx={{ minWidth: 120, marginTop: "20px" }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ fontSize: "16px" }}
              >
                Trạng thái
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={role}
                label="Role"
                //   onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value="0">Đang vận chuyển</MenuItem>
                <MenuItem value="1">Đã giao hàng</MenuItem>
              </Select>
            </FormControl>
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
              // onClick={() => handleUpdateUser()}
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

export default ModalUpdateOrders
