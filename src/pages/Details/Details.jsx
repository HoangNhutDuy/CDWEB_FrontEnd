import React, {useState, useEffect} from "react"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { products } from "../../data/products"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LoopIcon from "@mui/icons-material/Loop"
import FlightIcon from "@mui/icons-material/Flight"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import HeadphonesIcon from "@mui/icons-material/Headphones"
import { Link , useParams } from "react-router-dom"
import axios from "axios";

import "./cssDetails.css"
import { Start } from "@mui/icons-material"
import ProductReview from "../../components/Review/ProductReview"
import "../../components/Review/cssProductReview.css"
import AddToCartButton from "../Cart/AddToCartButton"

const Details = ({ match }) => {
 
  // const { productId } = useParams()
  // const [productData, setProductData] = useState(null);
  // const [relatedProducts, setRelatedProducts] = useState([])
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   if(productId){
  //     fetchProductDetails()
  //   }
   
  // }, [productId])

  // const fetchProductDetails = () => {
  //   axios
  //     .get(`http://localhost:8080/product/${productId}`)
  //     .then((response) => {
  //       setProduct(response.data)
  //       console.log(response.data)
  //       fetchRelatedProducts()
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching product details:", error)
  //     })
  // }

  // const fetchRelatedProducts = () => {
  //   axios
  //     .get("http://localhost:8080/product")
  //     .then((response) => {
  //       setRelatedProducts(response.data)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching related products:", error)
  //     })
  // } 
  // const { idProduct } = useParams();
  // const { idUser } = useParams();

  const { id } = useParams();
 
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [relatestProducts, setRelatestProducts] = useState([]);
  const [quantity, setQuantity] = useState(1); 
  const [stockQuantity, setStockQuantity] = useState(0);
  const [user, setUser] = useState(null); 
  

  
  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) {
        setError("Product ID is missing");
        setLoading(false);
        return;
      }


      try {
        const response = await axios.get(`http://localhost:8080/product/${id}`)
        setProductData(response.data);
        setStockQuantity(response.data.stockQuantity);

        setLoading(false);
      } catch (err) {
        setError("Data could not be loaded");
        console.error(err);
        setLoading(false);
      }
    };
    const fetchLatestProducts = async () => {

      try {
        const response = await axios.get(`http://localhost:8080/product/latest-products`)
    
        setRelatestProducts(response.data);
        console.log(response.data)
      } catch (err) {
        setError("Latest products data could not be loaded");
        console.error(err);
      }
    };
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Token is missing");
        return;
      }
      try {
        const response = await axios.get(`http://localhost:8080/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          
      });
      // console.log(response);
        // Làm gì đó với dữ liệu user nhận được 
     
        setUser(response?.data?.id);

        setLoading(false);
      } catch (error) {
        setError("Failed to fetch user data");
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };
    fetchUserData();
    fetchProductData();
    fetchLatestProducts();
  }, [id]); 
  console.log(user)
  const handlePlus = () => {
    if (quantity < stockQuantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  if (loading) {
    return <div id="hieuung4">
    <span class="cube1"></span>
    <span class="cube2"></span>
 </div>
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  console.log(relatestProducts.productId);
  return (
    <>
      <Header />
     
      <main>
     
      {productData && (

<section id="section-detailsProduct">
<div className="section__container__product">
  <hr />
  <div className="product-detail__left"   >
    <div className="container--image">
      <img
        src={productData.img}
        alt="img__product"
        id="image__detail__product"
  
      />
    </div>
  </div>
  <div className="product-detail__center">
   
  <h2 id="section__title__product" style={{fontSize:"2.5rem" , margin: "0" , textAlign: "start"}}>{productData.name}</h2>

   
    <p>Chọn màu để xem giá và chi nhánh có hàng</p>
    {/* Rest of your product details */}
    <div
      className="product__item"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        src={productData.img}
        alt="product color"
      />

      <div className="product__title__item">
        <strong>{productData.color}</strong>
        <br />
        <span>
          {productData.price}<u>đ</u>
        </span>
      </div>
    </div>

    <div className="input-counter">
      <span>Số lượng:</span>
      <div>
        <button className="minus-btn" onClick={handleMinus}>
          <RemoveIcon />
        </button>
        <input
          type="text"
          value={quantity}
          className="counter-btn"
          id="amount"
        />
        <button className="plus-btn" onClick={handlePlus}>
          <AddIcon />
        </button>
      </div>
    </div>

    <div className="title">
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <li>
          <span>Giá:</span>
          <span className="new__price">{productData.price} VNĐ</span>
        </li>
        <li>
          <span>Hãng:</span>
          <Link to="/">{productData.brand}</Link>
        </li>
        <li>
          <span>Model:</span>
          <span>{productData.model}</span>
        </li>
        <li>
          <span>Hiện có:</span>
          <span className="in-stock">Trong kho ({productData.stockQuantity} sản phẩm)</span>
        </li>
      </ul>
 
      <div
        className="product-info__btn"
        style={{ display: "flex", fontSize: "12px", color: "#555" }}
      >
        <span>
          <span>&nbsp; HƯỚNG DẪN KÍCH THƯỚC</span>
        </span>
        <span>
          <span style={{ marginLeft: "3px" }}>
            &nbsp; VẬN CHUYỂN{" "}
          </span>
        </span>
        <span>
          <span style={{ marginLeft: "5px" }}>
            {" "}
            HỎI VỀ SẢN PHẨM &nbsp;
          </span>
        </span>
      </div>

      <div className="product__bonus">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_Db-7oZT6WVbPR9ouktyhihrr-PCyf0lle3zrMQ_dEpQpp5UfVbwNflLldcQ-H5-fGs&usqp=CAU"
          alt="bonus"
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            top: "-15px",
            left: "35px",
            zIndex: "9",
          }}
        />{" "}
        <span
          style={{
            color: "#be1e2d",
            textAlign: "center",
            width: "115px",
            backgroundColor: "white",
            position: "absolute",
            top: "-15px",
            left: "60px",
          }}
        >
          Khuyến mãi
        </span>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "20px",
          }}
        >
          <li>
            Duy nhất <b>Thứ 5</b>: Giá chỉ{" "}
            <span style={{ color: "red" }}>{productData.discountedPrice}đ.</span>
          </li>
          <li>Tặng thêm cáp sạc 20cm Bagi</li>
          <li>
            Giảm thêm 30% Tối đa{" "}
            <span style={{ color: "red" }}>600.000đ</span> khi mở thẻ
            TPBank EVO
          </li>
        </ul>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span>ƯU ĐÃI THÊM</span>
          <p>
            Giảm thêm 5% tối đa 1 triệu khi thanh toán qua Kredivo
          </p>
          <p>Giảm thêm 30% tối đa 600.000đ khi mở thẻ TPBank</p>
        </div>
      </div>

      <div className="button">
        <AddToCartButton productId={id} quantity={quantity}/>
       
        <button className="button__pay" id="button__buy">
          MUA NGAY
        </button>
      </div>
    </div>

    <div className="product-detail__right">
      <strong>Bộ sản phẩm</strong>

      <p style={{ color: "#333333", fontSize: "14px" }}>
        Bộ sản phẩm bao gồm: {productData.packageContents}
      </p>

      <strong>Bảo hành </strong>

      <p style={{ color: "#333333", fontSize: "14px" }}>
        Bảo hành:<b>{productData.warrantyPeriod}</b> chính hãng {productData.warrantyBrand}

      </p>
      
    </div>
  </div>
</div>
</section>
      )};
      
      
        <ProductReview  productId={id} userId={user}/>
      
        {relatestProducts.length > 0 && (
          <div className="section__titles category__titles" style={{ backgroundColor: "#ccc", padding: "10px 0", marginTop: "40px" }}>
            <div className="section__title filter-btn active" data-id="All Products">
              <span className="dot"></span>
              <h1 className="primary__title">Các sản phẩm khác</h1>
            </div>
          </div>
        )}

        <div className="category__container">
          <div className="category__center">
      
      
            {relatestProducts.map((relatestProduct, index) => (
                
              <div  className="product category__products" key={index}>
                <div className="product__header">
                  <img src={relatestProduct?.img} alt={relatestProduct?.title} />
                </div>
                <div className="product__footer">
                  <h3>{relatestProduct?.name}</h3>
                  {/* Đoạn mã để hiển thị rating */}
                  <div className="rating">
                    {/* Placeholder code for rating display */}
                    <span>Rating: {relatestProduct?.reviews?.rating}</span>
                  </div>
                  <div className="product__price">
                    <h4>{relatestProduct.price} VND</h4>
                  </div>

              
                  <Link  to={`/detail/product/${relatestProduct.productId}` }>
                    
                    <button type="submit" className="product__btn">
                      Xem chi tiết
                    </button>
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link data-tip="Quick View" data-place="left" to={`/detail/product/${relatestProduct.productId}`}>
                      <RemoveRedEyeIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FavoriteIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <LoopIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            
            ))}
        
          </div>
        </div>
        <section
          className="facility__section section"
          id="facility"
          style={{ margin: "30px 0" }}
        >
          <div className="container">
            <div className="facility__contianer">
              <div className="facility__box">
                <div className="facility-img__container">
                  <FlightIcon />
                </div>
                <p>MIỄN PHÍ VẬN CHUYỂN TOÀN CẦU</p>
              </div>

              <div className="facility__box">
                <div className="facility-img__container">
                  <CreditCardIcon />
                </div>
                <p>ĐẢM BẢO HOÀN TIỀN 100%</p>
              </div>

              <div className="facility__box">
                <div className="facility-img__container">
                  <LocalAtmIcon />
                </div>
                <p>THANH TOÁN BẰNG THẺ</p>
              </div>

              <div className="facility__box">
                <div className="facility-img__container">
                  <HeadphonesIcon />
                </div>
                <p>HỖ TRỢ TRỰC TUYẾN 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    
      <Footer />
    </>
  )
}

export default Details
