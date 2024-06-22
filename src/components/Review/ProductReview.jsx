import React, { useEffect, useState } from "react"
import axios from "axios"
import "./cssProductReview.css"
import StarIcon from "@mui/icons-material/Star"

const ProductReview = ({ productId, userId }) => {
  const [reviews, setReviews] = useState([])

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [newReview, setNewReview] = useState({
    idProduct: productId,
    rating: 0,
    comment: "",
    idUser: userId,
  })
  if (userId) {
    // Truy cập thuộc tính userId của user ở đây
    // console.log(userId)
  } else {
    console.error("User or userId is undefined")
  }

  useEffect(() => {
    fetchReviews() // Gọi hàm fetchReviews khi productId thay đổi
  }, [productId])

  // Hàm để fetch danh sách reviews từ API
  const fetchReviews = () => {
    const token = localStorage.getItem("token")
    if (!token) {
      setError("Token is missing")
      return
    }
    axios
      .get(`http://localhost:8080/review/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response)
        setReviews(response.data)
      })
      .catch((error) => {
        console.error("There was an error fetching the reviews!", error)
      })
  }

  // Hàm xử lý submit form đánh giá
  const handleSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    console.log(localStorage.getItem("token"))
    if (!token) {
      setError("Token is missing")
      return
    }
    axios
      .post("http://localhost:8080/review/add", newReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Response:", response?.data)
        setReviews([...reviews, response?.data])
        setNewReview({ ...newReview, rating: 0, comment: "" })
        fetchReviews()
        setError("")
      })
      .catch((error) => {
        console.error("Failed to add review.", error)
        setError("Failed to add review. Please try again.")
      })
  }

  // Hàm xử lý thay đổi các trường trong form
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewReview({ ...newReview, [name]: value })
  }

  //Hàm render các sao đánh giá
  const renderRatingStars = (rating) => {
    const filledStars = Math.floor(rating)
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0
    const emptyStars = 5 - filledStars - halfStar

    return (
      <div className="review-rating">
        {[...Array(filledStars)].map((_, i) => (
          <StarIcon key={i} style={{ color: "#FFD700" }} />
        ))}
        {halfStar === 1 && <StarIcon style={{ color: "#FFD700" }} />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={i} style={{ color: "#CCCCCC" }} />
        ))}
      </div>
    )
  }

  return (
    <div className="review-section">
      <h2>Đánh giá sản phẩm</h2>
      {reviews.length === 0 ? (
        <p>Chưa có đánh giá nào</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <div className="review-user">{review?.fullName}</div>
              {/* {renderRatingStars(review?.rating)} */}
            </div>
            <div className="review-date">{review?.createdAt}</div>
            <div className="review-comment">{review?.comment}</div>
          </div>
        ))
      )}
      <form onSubmit={handleSubmit} className="review-form">
        <h3>Thêm đánh giá của bạn</h3>
        <input
          type="number"
          name="rating"
          placeholder="Đánh giá (1-5)"
          value={newReview.rating}
          onChange={(e) =>
            setNewReview({ ...newReview, rating: e.target.value })
          }
          min="1"
          max="5"
          required
        />
        <textarea
          name="comment"
          placeholder="Viết đánh giá của bạn"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Gửi đánh giá
        </button>
      </form>
    </div>
  )
}
export default ProductReview
