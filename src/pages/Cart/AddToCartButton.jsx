import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import '../Details/cssDetails.css'; // Nhập tệp CSS

const AddToCartButton = ({ productId, quantity = 1 }) => {
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem("token");

    const handleAddToCart = () => {
        setIsLoading(true);
        axios.post("http://localhost:8080/cart/add", null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                productId: productId,
                quantity: quantity,
            }
        })
            .then(response => {
                alert("Sản phẩm đã được thêm vào giỏ hàng");
            })
            .catch(error => {
                console.error("Error adding product to cart:", error);
                alert("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Button
            id="button__cart"
            className="button__pay"
            variant="contained"
            onClick={handleAddToCart}
            disabled={isLoading}
            sx={{
                color: "black",
            }}
        >   
            {isLoading ? "Đang thêm..." : "Thêm vào giỏ hàng"}
        </Button>
    );
};

export default AddToCartButton;
