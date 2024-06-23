
import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import axios from "axios"
// import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const ModalProduct = ({fetchProductData ,productId}) => {
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
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: '',
    img: '',
    brand: '',
    price: 0,
    description: '',
    stockQuantity: 0,
    model: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  useEffect(() => {
    // Gọi API để lấy dữ liệu sản phẩm
    axios.get(`http://localhost:8080/product/${productId}`) // Thay thế đường dẫn và ID sản phẩm phù hợp với API của bạn
      .then(response => {
        const fetchedProduct = response.data;
        setProduct({
          name: fetchedProduct.name,
          img: fetchedProduct.img,
          brand: fetchedProduct.brand,
          price: fetchedProduct.price,
          description: fetchedProduct.description,
          stockQuantity: fetchedProduct.stockQuantity,
          model: fetchedProduct.model,
        });
        handleClose();
      })
      
      .catch(error => {
        console.error("Error fetching product:", error);
      });
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/product/add', product);
      console.log('Product added:', response.data);
      // Handle success, show a success message, etc.
      fetchProductData(); // Fetch updated products after adding
      handleClose(); // Close modal after successful submission
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error, show an error message, etc.
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

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
          <form onSubmit={handleSubmit}>
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
              
              value={product.name}
              onChange={handleChange}
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
              value={product.brand}
              onChange={handleChange}
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
              value={product.price}
              onChange={handleChange}
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
              value={product.description}
              onChange={handleChange}
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
                  value={product.stockQuantity}
              onChange={handleChange}
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
              value={product.model}
              onChange={handleChange}
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
              onClick={handleSubmit}
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
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalProduct
