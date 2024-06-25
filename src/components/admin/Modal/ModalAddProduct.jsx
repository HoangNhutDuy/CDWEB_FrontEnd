
import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ModalAddProduct = () => {
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
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [img, setImg] = useState(null)
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [stockQuantity, setStockQuantity] = useState("")
  const [model, setModel] = useState("")
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)



  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };
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


    const handleAddNewProduct = () => {
      if (
        name?.length === 0 ||
        !img || 
        brand?.length === 0 ||
        price?.length === 0 ||
        description?.length === 0 ||
        stockQuantity?.length === 0 ||
        model?.length === 0
      ) {
       
        return
      }
      const payload = {
        price: price,
        stockQuantity: stockQuantity,
        brand: brand,
        description: description,
        img: img,
        model: model,
        name: name
      }
      
      try {
         
        axios.post("http://localhost:8080/product/add", payload)
          .then((res) => {
          
            if (res.status === 201  ) {
              setOpen(false)
              showToastSuccess("Thêm sản phẩm thành công")
              setTimeout(() => {
                window.location.reload()
              }, 1000)
            }
          })
          .catch((err) => {
            showToastFail("Thêm sản phẩm thất bại")

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
            <Typography sx={{ fontSize: "16px" }}>Tên sản phẩm</Typography>
            <input
             name="name"
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Hình ảnh
            </Typography>
            <input
             name="img"
              type="file"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
           
          
        onChange={handleFileChange}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Brand
            </Typography>
            <input
               name="brand"
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              value={brand}
               onChange ={(e)=> setBrand(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Giá
            </Typography>
            <input
             name="price"
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              value={price}
              onChange ={(e)=> setPrice(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Mô tả
            </Typography>
            <input
               name="description"
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              value={description}
              onChange ={(e)=> setDescription(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Số lượng
            </Typography>
            <input
               name="stockQuantity"
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
                  value={stockQuantity}
                  onChange ={(e)=> setStockQuantity(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginTop: "20px", fontSize: "16px" }}>
              Model
            </Typography>
            <input
              name="model"
              type="text"
              style={{
                flex: "1",
                outline: "none",
                padding: "10px 8px",
                fontSize: "20px",
              }}
              value={model}
              onChange ={(e)=> setModel(e.target.value)}
            />
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
              onClick={() => handleAddNewProduct()}
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

export default ModalAddProduct
