import SideBar from "../../components/admin/Sidebar/Sidebar"
import { Box, Typography, Input } from "@mui/material"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import TableContent from "../../components/admin/TableContent/TableContentUsers"
import BasicModal from "../../components/admin/Modal/Modal"
const Users = () => {
  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      {/* sidebar */}
      <SideBar />
      {/* right */}

      <Box
        sx={{
          flex: "1",
          pt: 2,
        }}
      >
        {/* search */}

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
                Quản lý người dùng
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: " center",
                  gap: 2,
                }}
              >
                <UnfoldMoreIcon sx={{ fontSize: "24px", color: "#FEAF00" }} />
                <BasicModal />
              </Box>
            </Box>
          </Box>
          {/* Table content */}
          <Box sx={{ mt: "10px", px: 2 }}>
            <TableContent />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Users
