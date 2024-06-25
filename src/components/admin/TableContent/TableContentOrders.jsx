import React from "react"
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
const TableContentOrders = () => {
  const users = [
    {
      userId: "1",
      email: "nhutdny123@gmail.com",
      fullName: "Hoang Nhut Duy",
      phoneNumber: "0775869195",
      address: "a",
    },
  ]
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
                ID
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
                Địa chỉ
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row) => (
              <TableRow
                key={row.userId}
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
                  {row?.userId}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "left",
                    borderBottom: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {row?.fullName}
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
                  <DeleteOutlineOutlinedIcon
                    sx={{ fontSize: "20px" }}
                    // onClick={() => handleDeleteUser(row?.userId)}
                  />
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
                  <ModalUpdateOrders />
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
