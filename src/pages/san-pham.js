import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Header from '../components/giao-dien-cpn/header';
import '../App.css';
function SanPham() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/san-pham');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyButtonClick = (product) => {
    addToCart(product);
  };

  const addToCart = (product) => {
    var sanPham = {
      id: product.id,
      ten: product.ten,
      gia: product.gia,
      so_luong: 1,
      mota: product.mo_ta,
    };
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems == null) {
      cartItems = [sanPham];
    } else {
      cartItems = JSON.parse(cartItems);
      var i = 0;
      for (; i < cartItems.length; i++) {
        if (cartItems[i].id === sanPham.id) {
          cartItems[i].so_luong += sanPham.so_luong;
          break;
        }
      }
      if (i === cartItems.length) {
        cartItems.push(sanPham);
      }
    }
    console.log(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Thêm sản phẩm vào giỏ hàng thành công');
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="container my-5">
        <h1 className="text-center">Danh Sách Sản Phẩm</h1>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="row">
            {products.map((sanPham) => (
              <Product key={sanPham.id} product={sanPham} handleBuyButtonClick={handleBuyButtonClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const Product = ({ product, handleBuyButtonClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.hinh_anh.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.hinh_anh.length) % product.hinh_anh.length);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="carousel">
          <img
            className="card-img-top carousel-image"
            src={`http://127.0.0.1:8000/${product.hinh_anh[currentImageIndex]?.url}`}
            alt={product.ten}
          />
          {product.hinh_anh.length > 1 && (
            <div className="carousel-buttons">
              <button className="btn btn-light" onClick={prevImage}>
                &lt;
              </button>
              <button className="btn btn-light" onClick={nextImage}>
                &gt;
              </button>
            </div>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.ten}</h5>
          <p className="card-text">Giá: {product.gia} VNĐ</p>
          <p className="card-text">{product.mo_ta}</p>
          <div className="text-center">
            <NavLink to={`/chitiet/${product.id}`} className="btn btn-success">
              Xem Chi Tiết
            </NavLink>
            <button className="btn btn-primary mx-2" onClick={() => handleBuyButtonClick(product)}>
              Thêm Vào Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanPham;