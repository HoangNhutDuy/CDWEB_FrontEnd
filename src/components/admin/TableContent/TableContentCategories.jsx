import React from "react"
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
import ModalUpdateCategories from "../Modal/ModalUpdateCategories"
const TableContentCategories = () => {
  const categories = [
    {
      id: 1,
      name: "iphone",

      description:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta doloremque, culpa excepturi nesciunt error, quos corrupti tempore obcaecati aspernatur omnis est porro odit id non illum cupiditate eaque corporis nisi!",
    },
    {
      id: 2,
      name: "iphone",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta doloremque, quos corrupti tempore obcaecati aspernatur omnis est porro odit id non illum cupiditate eaque corporis nisi!",
    },
  ]
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
              Tên danh mục
            </TableCell>
            <TableCell
              sx={{
                color: "#ACACAC",
                borderBottom: "none",
                width: "400px",
                fontSize: "14px",
              }}
              align="left"
            >
              Mô tả
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories?.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                height: "65px",
                fontSize: "14px",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: "14px" }}>
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
                  textAlign: "left",
                  borderBottom: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {row?.description}
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
                <DeleteOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
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
                <ModalUpdateCategories />
                <ToastContainer />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableContentCategories
