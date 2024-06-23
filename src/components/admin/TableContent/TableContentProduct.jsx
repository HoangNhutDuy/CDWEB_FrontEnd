import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { ToastContainer, toast } from "react-toastify"
import ModalUpdateProduct from "../Modal/ModalUpdateProduct"

import axios from "axios"; 
const TableContentProduct = ({ productId ,productData ,fetchProducts}) => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "iphone",
  //     img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
  //     brand: "brand",
  //     model: "model",
  //     description:
  //       "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta doloremque, culpa excepturi nesciunt error, quos corrupti tempore obcaecati aspernatur omnis est porro odit id non illum cupiditate eaque corporis nisi!",
  //     stockQuantity: 123,
  //   },
  //   {
  //     id: 2,
  //     name: "iphone",
  //     img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
  //     brand: "brand",
  //     model: "model",
  //     description:
  //       "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta doloremque, quos corrupti tempore obcaecati aspernatur omnis est porro odit id non illum cupiditate eaque corporis nisi!",
  //     stockQuantity: 123,
  //   },
  // ]
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [error, setError] = useState('');
  const [newProducts, setNewProducts] = useState({
    idProduct: productId,
    name: "",
    img: "",
    brand: "",
    price: 0,
    description: "",
    stockQuantity: 0,
    model: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProducts((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const fetchProductss = async (e) => {
    try {
      const response = await axios.get("http://localhost:8080/product/getAll");
      setProducts(Array.isArray(response.data) ? response.data : []);
  
       
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
      
  useEffect(() => {
    fetchProductss();
  }, [products]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/product/add",
        newProducts
      );
      console.log("Product added:", response?.data);
      setProducts([response?.data, ...products]);
      setNewProducts({ ...newProducts,   name: "",
        img: "",
        brand: "",
        price: 0,
        description: "",
        stockQuantity: 0,
        model: "", });
        console.log("Updated products:", products); 
     

      fetchProductss()
      setError(''); // Fetch updated products after adding
      handleClose(); // Close modal after successful submission
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error, show an error message, etc.
    }
  };
  const handleDelete = (productId) => {
    axios.delete(`http://localhost:8080/product/${productId}`)
      .then((response) => {
        console.log("Product deleted successfully");
        // Optionally update state or notify user
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const addProductToState = (products) => {
    setProducts((prevProducts) => [...prevProducts, products]);
  };
  
   
  return (


      
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          gap: 2,
          borderCollapse: "separate",
          borderSpacing: "1em 1em",
          backgroundColor: "white",
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
                color: "#ACACAC",
                borderBottom: "none",
                fontSize: "14px",
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{ color: "#ACACAC", borderBottom: "none", fontSize: "14px" }}
              align="left"
            >
              Tên sản phẩm
            </TableCell>
            <TableCell
              sx={{ color: "#ACACAC", borderBottom: "none", fontSize: "14px" }}
              align="left"
            >
              Hình ảnh
            </TableCell>
            <TableCell
              sx={{ color: "#ACACAC", borderBottom: "none", fontSize: "14px" }}
              align="left"
            >
              Brand
            </TableCell>
            <TableCell
              sx={{ color: "#ACACAC", borderBottom: "none", fontSize: "14px" }}
              align="left"
            >
              Model
            </TableCell>
            <TableCell
              sx={{
                color: "#ACACAC",
                borderBottom: "none",
                width: "350px",
                fontSize: "14px",
              }}
              align="left"
            >
              Mô tả
            </TableCell>
            <TableCell
              sx={{ color: "#ACACAC", borderBottom: "none", fontSize: "14px" }}
              align="left"
            >
              Số lượng
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {products?.length > 0 ? (
          products?.map((row) => (
            <TableRow
              key={row?.id}
              sx={{
                height: "65px",
                fontSize: "14px",
              }}
            >
              <TableCell component="th" scope="row">
                {row?.id}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  borderBottom: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {row?.name}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
                align="left"
              >
                <img
                  style={{ width: "100px", height: "100px", fontSize: "14px" }}
                  src={row?.img}
                  alt="product_img"
                />
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
                align="left"
              >
                {row?.brand}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
                align="left"
              >
                {row?.model}
              </TableCell>

              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  color: "#FEAF00",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                align="left"
              >
                {row?.description}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  color: "#FEAF00",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                align="left"
              >
                {row?.stockQuantity}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  color: "#FEAF00",
                  cursor: "pointer",
                }}
                align="left"
              >

                <DeleteOutlineOutlinedIcon sx={{ fontSize: "20px" }} onclick={() => handleDelete(row?.id)} />
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  color: "#FEAF00",
                  cursor: "pointer",
                }}
                align="left"
              >
                <ModalUpdateProduct />
                <ToastContainer />
              </TableCell>
            </TableRow>
            ))
             ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default TableContentProduct
