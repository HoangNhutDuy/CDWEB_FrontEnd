import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import axios from "axios"
import { toast , ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import Modal from "@mui/material/Modal"
import { useState, useEffect } from "react"

const ModalUpdateProduct = ({productId }) => {
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
  const getProductDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/product/${productId}`)
      const product = response?.data
      
      setName(product?.name)
      setImg(product?.img)
      setBrand(product?.brand)
      setPrice(product?.price)
      setDescription(product?.description)
      setStockQuantity(product?.stockQuantity)
      setModel(product?.modal)

      
        
    } catch (error) {
      console.log("Error fetching product details", error)
    }
  }
        
  
  const handleUpdateProduct = async() => {
 
    const payload = {
      name: name,
      img: img,
      brand: brand,
      price: price,
      description: description,
      stockQuantity: stockQuantity,
      model: model,
    }
    
    try {
      const response = await axios.put(
        `http://localhost:8080/product/${productId}`,
        payload)
      
      
        if (response.status === 200) {
          setOpen(false)
          showToastSuccess("Cập nhật sản phẩm thành công")
  
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        } else {
          showToastFail("Cập nhật sản phẩm  thất bại")
        }
      } catch (error) {
        console.log("Error updating product", error)
        // Show error toast here
      }
  }
  useEffect(() => {
    getProductDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <Button
        sx={{
          color: "#FEAF00",
          padding: "10px 28px",

          fontSize: "14px",
        }}
        onClick={handleOpen}
      >
        <ModeEditIcon sx={{ fontSize: "20px" ,color:"#065ab8" }} />
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
                color: "#065AB8",
              }}
                 onClick={()=> handleUpdateProduct()}
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

export default ModalUpdateProduct
