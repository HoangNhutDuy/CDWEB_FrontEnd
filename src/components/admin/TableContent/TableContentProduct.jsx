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
import 'react-toastify/dist/ReactToastify.css';
import ModalUpdateProduct from "../Modal/ModalUpdateProduct"
import ModalProduct from "../Modal/ModalProduct";
import axios from "axios"; 
const TableContentProduct = ({ productId ,productData ,fetchProducts}) => {

  const [open, setOpen] = React.useState(false)
  
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  // const [newProducts, setNewProducts] = useState({
  //   idProduct: productId,
  //   name: "",
  //   img: "",
  //   brand: "",
  //   price: 0,
  //   description: "",
  //   stockQuantity: 0,
  //   model: "",
  // });
  // const [newProducts, setNewProducts] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  useEffect(() => {

    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      fetchProductsFromDatabase();
    }
  }, []);


  const fetchProductsFromDatabase = async () => {
    try {
      const response = await axios.get("http://localhost:8080/product/getAll");

       const fetchedProducts = response.data.slice(0, 10); 
      setProducts(fetchedProducts);

      localStorage.setItem("products", JSON.stringify(fetchedProducts));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
      
  useEffect(() => {
    fetchProductsFromDatabase();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/product/add",
        products
      );
      console.log("Product added:", response?.data);
      // setNewProducts([...newProducts, response.data]); // Cập nhật state cho sản phẩm mới
      setProducts([...products,response.data]); 
      
     

      handleClose(); // Close modal after successful submission
      setError(''); // Fetch updated products after adding

    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error, show an error message, etc.
    }
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
  const handleAddProduct = async (newProduct) => {

    
    try {
      const response = await axios.post("http://localhost:8080/product/add", newProduct);
      const addedProduct = response.data;
  
   
      setProducts((prevProducts) => [addedProduct, ...prevProducts]);
  
  
      const updatedProducts = [addedProduct, ...products];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
  
      
  
    
      toast.success("Product added successfully!");

    
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };
  const handleDelete = (productId) => {
    axios.delete(`http://localhost:8080/product/${productId}`)
      .then((response) => {
        console.log("Product deleted successfully");
        setProducts(products.filter(product => product.id !== productId));
        const updatedProducts = products.filter(product => product.id !== productId);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

   
  return (
<div>
   
    <TableContainer component={Paper}>
      
    <ModalProduct onAddProduct={handleAddProduct} />
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
              sx={{
                color: "#ACACAC",
                borderBottom: "none",
                width: "350px",
                fontSize: "14px",
              }}
              align="left"
            >
              Giá
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
                {row?.productId}
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
                {row?.price}
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

   
                <DeleteOutlineOutlinedIcon sx={{ fontSize: "20px" }} onclick={() => handleDelete(row?.productId)} />
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
    </div>
  )
}

export default TableContentProduct
