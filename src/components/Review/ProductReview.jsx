import React, { useEffect, useState } from "react"
import axios from "axios"
import "./cssProductReview.css"
import StarIcon from "@mui/icons-material/Star"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { format, parseISO } from "date-fns"
import Rating from "react-rating"
import { Star, StarBorder } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
// import ModalReview from '../ModalReview/ModalReview';
const ProductReview = ({ productId, userId }) => {
  console.log(productId)
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
    fullName: localStorage.getItem("fullName") || "",
  })
  const navigate = useNavigate()

  console.log(localStorage.getItem("fullName"))

  // Hàm để fetch danh sách reviews từ API
  const fetchReviews = () => {
    axios
      .get(`http://localhost:8080/review/product/${productId}`)
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
      navigate("/login")
    }
    axios
      .post("http://localhost:8080/review/add", newReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Response:", response?.data)

        if (response?.status === 200) {
          setReviews([response?.data, ...reviews])
          setNewReview({ ...newReview, rating: 0, comment: "" })
          fetchReviews()
          setError("")
        }
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

  const handleRatingChange = (value) => {
    const updatedReview = { ...newReview, rating: value }
    setNewReview(updatedReview)
  }
  //Hàm render các sao đánh giá
  const renderRatingStars = (rating) => {
    rating = Math.max(1, Math.min(rating, 5))
    const filledStars = Math.floor(rating)
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0
    const emptyStars = 5 - filledStars - halfStar

    return (
      <div className="review-rating">
        {[...Array(filledStars)].map((_, i) => (
          <StarIcon key={`filled-${i}`} style={{ color: "#FFD700" }} />
        ))}
        {halfStar === 1 && <StarIcon key="half" style={{ color: "#FFD700" }} />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} style={{ color: "#CCCCCC" }} />
        ))}
      </div>
    )
  }
  const formatDate = (dateString) => {
    if (!dateString) {
      return "Invalid date" // Hoặc trả về giá trị mặc định
    }
    try {
      const date = parseISO(dateString)
      return format(date, "d/M/yyyy H:mm")
    } catch (error) {
      console.error("Invalid date:", dateString)
      return "Invalid date"
    }
  }

  // Effect to update fullName in newReview when it changes in localStorage
  // useEffect(() => {
  //   const fullName = localStorage.getItem("fullName") || ""
  //   setNewReview((prevState) => ({
  //     ...prevState,
  //     fullName: fullName,
  //   }))
  // }, [localStorage.getItem("fullName")]) // Update when fullName in localStorage changes

  useEffect(() => {
    // Fetch reviews when productId changes]
    setNewReview({ ...newReview, idProduct: productId })
    fetchReviews()
  }, [productId])

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
              <AccessTimeIcon />
              <div className="review-date">{formatDate(review?.createdAt)}</div>
            </div>
            {review?.rating && renderRatingStars(review?.rating)}
            <div className="review-comment">{review?.comment}</div>
          </div>
        ))
      )}
      <form onSubmit={handleSubmit} className="review-form">
        <h3>Thêm đánh giá của bạn</h3>
        {/* <input
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
        /> */}
        <span className="review_star">Đánh giá sao :</span>
        <Rating
          style={{ alignSelf: "start", marginLeft: "100px" }}
          initialRating={newReview.rating}
          emptySymbol={
            <StarBorder style={{ color: "#FFD700", fontSize: "50px" }} />
          }
          fullSymbol={<Star style={{ color: "#FFD700", fontSize: "50px" }} />}
          onChange={handleRatingChange}
        />
        <span className="review_star_1">Rất tệ</span>
        <span className="review_star_2">Tệ</span>
        <span className="review_star_3">
          Bình <br /> thường
        </span>
        <span className="review_star_4">Tốt</span>
        <span className="review_star_5">Tuyệt vời</span>

        <span className="review_product">Nhận xét :</span>
        <textarea
          name="comment"
          placeholder="Xin chia sẻ một số cảm nhận của bạn về sản phẩm..."
          value={newReview.comment}
          onChange={(e) => {
            console.log("here is new Review", newReview.idProduct)
            setNewReview({ ...newReview, comment: e.target.value })
          }}
          required
        />
        <button type="submit">Gửi đánh giá</button>
      </form>

      {/* <div>
      <ModalReview />
    </div> */}
    </div>
  )
}
export default ProductReview
