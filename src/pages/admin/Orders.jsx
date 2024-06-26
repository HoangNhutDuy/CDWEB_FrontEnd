import React from "react"
import { Box, Typography, Input } from "@mui/material"
import Sidebar from "../../components/admin/Sidebar/Sidebar"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import TableContentProduct from "../../components/admin/TableContent/TableContentProduct"
import ModalAddProduct from "../../components/admin/Modal/ModalAddProduct"
import TableContentOrders from "../../components/admin/TableContent/TableContentOrders"
const Orders = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Sidebar */}
      <Sidebar />
      {/* right */}
      <Box sx={{ flex: "1" }}>
        <Box
          sx={{
            backgroundColor: "#E5E5E5",
            py: "5px",
            height: "calc(100vh - 60.33px)",
            marginTop: "10px",
          }}
        >
          {/* action bar */}
          <Box
            sx={{
              height: "fit-content",
              marginTop: "15px",
            }}
          >
            {/* action bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: " center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ marginRight: " 20px" }}
              >
                Quản lý đơn hàng
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: " center",
                  gap: 2,
                }}
              >
                <UnfoldMoreIcon sx={{ fontSize: "24px", color: "#FEAF00" }} />
              </Box>
            </Box>
          </Box>
          {/* Table content */}
          <TableContentOrders />
          <Box sx={{ mt: "10px", px: 2 }}></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Orders
