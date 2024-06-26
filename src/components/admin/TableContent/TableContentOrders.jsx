import React, { useEffect, useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ModalUpdateUser from "../Modal/ModalUpdateUser"
import ModalUpdateOrders from "../Modal/ModalUpdateOrders"
import axios from "axios"
const TableContentOrders = () => {
  const token = localStorage.getItem("token")
  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8080/order/getAll", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setOrders(res?.data))
      .catch((err) => console.log(err))
  }, [])

  // const orders = [
  //   {
  //     userId: "1",
  //     email: "nhutdny123@gmail.com",
  //     fullName: "Hoang Nhut Duy",
  //     phoneNumber: "0775869195",
  //     address: "a",
  //   },
  // ]
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          overflowX: "auto",
          height: "800px",
        }}
      >
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
                Mã đơn hàng
              </TableCell>
              <TableCell
                sx={{
                  color: "#ACACAC",
                  borderBottom: "none",
                  fontSize: "14px",
                }}
                align="left"
              >
                Họ và tên
              </TableCell>
              <TableCell
                sx={{
                  color: "#ACACAC",
                  borderBottom: "none",
                  fontSize: "14px",
                }}
                align="left"
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  color: "#ACACAC",
                  borderBottom: "none",
                  fontSize: "14px",
                }}
                align="left"
              >
                Số điện thoại
              </TableCell>
              <TableCell
                sx={{
                  color: "#ACACAC",
                  borderBottom: "none",
                  fontSize: "14px",
                }}
                align="left"
              >
                Tổng tiền
              </TableCell>
              <TableCell
                sx={{
                  color: "#ACACAC",
                  borderBottom: "none",
                  fontSize: "14px",
                }}
                align="left"
              >
                Địa chỉ
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((row) => (
              <TableRow
                key={row.orderId}
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
                  {row?.orderId}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "left",
                    borderBottom: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {row?.firstName + " " + row?.lastName}
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
                  {row?.totalAmount + " " + "VND"}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                  align="left"
                >
                  {row?.shippingAddress}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableContentOrders
