
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Review/cssProductReview.css';
import StarIcon from '@mui/icons-material/Star';
const ModalReview = ({productId, userId}) => {

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
      }
      const [open, setOpen] = React.useState(false)
      const handleOpen = () => setOpen(true)
      const handleClose = () => setOpen(false)
      const [reviews, setReviews] = useState([]);
 
      const [rating, setRating] = useState(0);
      const [comment, setComment] = useState('');
      const [message, setMessage] = useState('');
      const [error, setError] = useState('');
      const [newReview, setNewReview] = useState({
        idProduct: productId,
        rating: 0,
        comment: '',
        idUser: userId,
      });
      if (userId) {
        // Truy cập thuộc tính userId của user ở đây
        // console.log(userId)
      } else {
        console.error("User or userId is undefined");
      }
     
    
      useEffect(() => {
        fetchReviews(); // Gọi hàm fetchReviews khi productId thay đổi
    
      }, [productId]);
    
      // Hàm để fetch danh sách reviews từ API
      const fetchReviews = () => {
        const token = localStorage.getItem("token");
          if (!token) {
            setError("Token is missing");
            return;
          }
        axios.get(`http://localhost:8080/review/product/${productId}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
          .then(response => {
            console.log(response);
            setReviews(response.data);
          })
          .catch(error => {
            console.error("There was an error fetching the reviews!", error);
          });
      };
    
      // Hàm xử lý submit form đánh giá
      const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        console.log(localStorage.getItem("token")); 
        if (!token) {
          setError("Token is missing");
          return;
        }
        axios.post('http://localhost:8080/review/add', newReview, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {
            console.log("Response:", response?.data);
            setReviews([...reviews, response?.data]);
            setNewReview({ ...newReview, rating: 0, comment: '' });
            fetchReviews();
            setError('');
            
          })
          .catch(error => {
            console.error("Failed to add review.", error);
            setError('Failed to add review. Please try again.');
          });
      };
     
    
      // Hàm xử lý thay đổi các trường trong form
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
      };
    
      return (
        <div>
        <Button onClick={handleOpen}>Gửi đánh giá</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thêm đánh giá của bạn
            </Typography>
            <form onSubmit={handleSubmit} className="review-form">
              <input
                type="number"
                name="rating"
                placeholder="Đánh giá (1-5)"
                value={newReview.rating}
                onChange={handleChange}
                min="1"
                max="5"
                required
              />
              <textarea
                name="comment"
                placeholder="Viết đánh giá của bạn"
                value={newReview.comment}
                onChange={handleChange}
                required
              />
              <Button type="submit" onClick={handleSubmit}>Gửi đánh giá</Button>
            </form>
          </Box>
        </Modal>
      </div>
      )
}
export default ModalReview
