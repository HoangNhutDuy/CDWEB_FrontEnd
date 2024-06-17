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
import "react-toastify/dist/ReactToastify.css"
// import axios from "axios"
import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
const TableContent = () => {
  const [students, setStudents] = useState([])
  const users = [
    {
      id: "1",
      name: "Hoang Nhut Duy",
      email: "nhutdny123@gmail.com",
      phoneNumber: "0123456789",
      address: "18",
    },
  ]
  // const navigate = useNavigate()
  // const token = localStorage.getItem("token")
  // function createData(studentID, name, email, phoneNumber, age) {
  //   return { studentID, name, email, phoneNumber, age }
  // }
  // const showToastSuccess = (message) => {
  //   if (!message) {
  //     return
  //   }
  //   toast.success(message, {
  //     position: "bottom-right",
  //     autoClose: 500,
  //   })
  // }
  // const showToastFail = (message) => {
  //   if (!message) {
  //     return
  //   }
  //   toast.error(message, {
  //     position: "bottom-right",
  //   })
  // }
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/signIn")
  //   }
  //   httpRequest
  //     .get("students/getAll", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => setStudents(res))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  // const handleDeleteStudent = async (id) => {
  //   if (!id) {
  //     return
  //   }
  //   const response = await axios.delete(
  //     `http://localhost:8080/students/delete/${id}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   )
  //   try {
  //     if (response.status === 200) {
  //       showToastSuccess("Delete student successfully")
  //       setTimeout(() => {
  //         window.location.reload()
  //       }, 1000)
  //     } else {
  //       showToastFail("Delete student failed")
  //     }
  //   } catch (error) {
  //     showToastFail(error)
  //   }
  // }
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
              Họ và tên
            </TableCell>
            <TableCell
              sx={{ color: "#ACACAC", borderBottom: "none", fontSize: "14px" }}
              align="left"
            >
              Email
            </TableCell>
            <TableCell
              sx={{ color: "#ACACAC", borderBottom: "none", fontSize: "14px" }}
              align="left"
            >
              Số điện thoại
            </TableCell>
            <TableCell
              sx={{ color: "#ACACAC", borderBottom: "none", fontSize: "14px" }}
              align="left"
            >
              Địa chỉ
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                height: "65px",
                fontSize: "14px",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  fontSize: "14px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  sx={{ borderRadius: "8px", width: 50, fontSize: "14px" }}
                />
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
                {row?.email}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
                align="left"
              >
                {row?.phoneNumber}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
                align="left"
              >
                {row?.address}
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
                <ModeEditOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
                <ToastContainer />
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
                <DeleteOutlineOutlinedIcon
                  sx={{ fontSize: "20px" }}
                  // onClick={() => handleDeleteStudent(row.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableContent
