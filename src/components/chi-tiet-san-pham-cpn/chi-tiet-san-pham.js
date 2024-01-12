import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ChiTietSanPhamCPN = () => {
  const { id } = useParams();
  const [sanPham, setSanPham] = useState(null);
  const [bienThe, setBienThe] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/san-pham/${id}`);
        const product = response.data.data;

        setSanPham(product);

        // Chọn biến thể mặc định (ở đây là biến thể đầu tiên)
        setBienThe(product.san_pham_bien_the[0]);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  
  // Hàm xử lý khi người dùng chọn biến thể
  const chonBienThe = (variant) => {
    setBienThe(variant);
  };

  return (
    <div>
      {sanPham && (
        <div>
          <h2>{sanPham.ten}</h2>
          <p>{sanPham.loai_san_pham.ten_loai}</p>

          <h3>Variants:</h3>
          <ul>
            {sanPham.san_pham_bien_the.map((variant) => (
              <li key={variant.id}>
                <button onClick={() => chonBienThe(variant)}>
                  {variant.dung_luong} - {variant.mau}
                </button>
              </li>
            ))}
          </ul>

          <h3>Selected Variant:</h3>
          {bienThe && (
            <div>
              <p>{bienThe.dung_luong}</p>
              <p>Màu sắc: {bienThe.mau}</p>
              <p>Price: {bienThe.gia}</p>
            </div>
          )}

          <h3>Images:</h3>
          <div>
            {sanPham.hinh_anh.map((image, index) => (
              <img key={index} className="img" src={`http://localhost:8000/${image.url}`} alt={`Hình ảnh sản phẩm ${sanPham.id}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChiTietSanPhamCPN;
