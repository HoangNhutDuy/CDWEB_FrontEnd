import React from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
// import axios from "axios"
// import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const ModalProduct = () => {
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
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div>
      <Button
        sx={{
          backgroundColor: "#FEAF00",
          padding: "10px 28px",
          "&:hover": {
            backgroundColor: "#b37c04",
          },
          color: "white",
          fontSize: "14px",
        }}
        onClick={handleOpen}
      >
        Thêm mới sản phẩm
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm mới sản phẩm
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Tên sản phẩm</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Hình ảnh</Typography>
            <input
              type="file"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Brand</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Giá</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Mô tả</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Số lượng</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px" }}>Model</Typography>
            <input
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
            />
          </Box>
          {/* Button container */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button sx={{ backgroundColor: "#feaf00", marginTop: "1rem" }}>
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

export default ModalProduct
