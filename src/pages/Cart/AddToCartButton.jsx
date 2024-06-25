import React, { useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"
import "../Details/cssDetails.css" // Nhập tệp CSS
import { useNavigate } from "react-router-dom"
const AddToCartButton = ({ productId, quantity = 1, isHomePage }) => {
  const [isLoading, setIsLoading] = useState(false)
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  console.log(isHomePage)
  const handleAddToCart = () => {
    if (!token) {
      navigate("/login")
      return
    }
    setIsLoading(true)
    axios
      .post("http://localhost:8080/cart/add", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          productId: productId,
          quantity: quantity,
        },
      })
      .then((response) => {
        alert("Sản phẩm đã được thêm vào giỏ hàng")
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error)
        alert("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Button
      id="button__cart"
      variant="contained"
      onClick={handleAddToCart}
      disabled={isLoading}
      sx={
        isHomePage
          ? {
              display: "inline-block",
              fontWeight: "700",
              textTransform: "uppercase",
              width: "100%",
              padding: "1.4rem 0",
              border: "1px solid #be1e2d",
              color: "#be1e2d",
              background: "white",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#be1e2d",
                color: "#f1f1f1",
              },
            }
          : {
              minWidth: "220px",
              height: "58px",
              margin: "10px 0 0 10px",
              backgroundColor: "white",
              border: "0.5px solid #0f0f0fc4",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "200",
              color: "black",
              fontFamily:
                '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
              "&:hover": {
                backgroundColor: "#be1e2d",
                color: "#f1f1f1",
              },
            }
      }
    >
      {isLoading ? "Đang thêm..." : "Thêm vào giỏ hàng"}
    </Button>
  )
}

export default AddToCartButton
