import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ModalUpdateProduct from "../Modal/ModalUpdateProduct"
import ModalAddProduct from "../Modal/ModalAddProduct";
import axios from "axios"; 

const TableContentProduct = () => {



  const [products, setProducts] = useState([{}]);

  const getAllProduct = () => {
    try {
      axios
        .get("http://localhost:8080/product/getAll"
        
        )
        .then((res) => setProducts(res?.data))   
        .catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
   
  }
  useEffect(() => {
    getAllProduct()
  }, [])
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
  
  const handleDeleteProduct = async (productId) => {
    console.log(productId)
    if (!productId) {
      return
    }
    axios
      .delete(`http://localhost:8080/product/${productId}`)
      .then((res) => {
        console.log(res)
        showToastSuccess("Xoá sản phẩm thành công")
        setTimeout(() => {
          getAllProduct();
        }, 1000)
      })
      .catch((error) => {
        console.log(error)
        showToastFail("Xoá sản phẩm thất bại")
      })
  };

   
  return (
<div>
   
    <TableContainer component={Paper} sx ={{overflowX: "auto",
        height: "800px",}}>
      
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
              key={row?.productId}
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

                   <Button>
                <DeleteOutlineOutlinedIcon sx={{ fontSize: "20px"  , color:"#EB0407"}}    onClick={() => handleDeleteProduct(row?.productId)} />
                </Button>
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
                <ModalUpdateProduct productId={row?.productId} />
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
