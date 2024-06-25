import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
// import { products } from "../../data/products"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LoopIcon from "@mui/icons-material/Loop"
import { Link , useParams } from "react-router-dom"
import AddToCartButton from "../Cart/AddToCartButton"
import axios from "axios"
const HomePage = ({  }) => {
  const [products, setProducts] = useState([])

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) {
        setError("Product ID is missing");
        setLoading(false);
        return;
      }


      try {
        const response = await axios.get(`http://localhost:8080/product/get/${id}`)
        
        console.log(response);
        setLoading(false);
      } catch (err) {
        setError("Data could not be loaded");
        console.error(err);
        setLoading(false);
      }
    };
    axios
      .get("http://localhost:8080/product/getAll")
      .then((res) => setProducts(res?.data))
  }, [])
  return (
    <>
      <Header />
      <section className="category__section" id="category">
        <div className="category__container">
          <div className="category__center">
            {products.map((product, index) => (
              <div class="product category__products">
                <div class="product__header">
                  <img src={product.image} alt="product" />
                </div>
                <div class="product__footer">
                  <h3>{product.title}</h3>
                  <div class="rating">
                    {/* <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                      </svg>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                      </svg>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                      </svg>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                      </svg>
                      <svg>
                        <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                      </svg> */}
                  </div>
                  <div class="product__price">
                    <h4>{product.price * 22000} VND</h4>
                  </div>
                  <Link to="/cart">
                    <AddToCartButton
                      productId={product.productId}
                      quantity="1"
                      class="product__btn"
                      isHomePage="true"
                    />
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link
                      data-tip="Quick View"
                      data-place="left"
                      to={`/detail/product/${product.productId}`}
                    >
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
      </section>
      <Footer />
    </>
  )
}

export default HomePage
