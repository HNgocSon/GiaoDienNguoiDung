
import React, { useState, useEffect } from 'react';
import axios from 'axios';
  const Avatar = (props) => {
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Gọi API Laravel để lấy danh sách sản phẩm
        const response = await axios.get('http://127.0.0.1:8000/api/san-pham');

        // Cập nhật state với dữ liệu từ API
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Gọi hàm fetchProducts khi component được tạo
    fetchProducts();
  }, []);
    
  
  return (
      

    <div>
      <ul>
        {products.map(san_pham => (
          <li key={san_pham.id}>
            <p></p>
            
            <div>
              {san_pham.hinh_anh.map(image => (
                <img  style={{ width: '100px', height: '100px' }} key={image.id} src={`http://127.0.0.1:8000/${image.url}`} alt={san_pham.ten} />
              ))}
            </div>
          </li>
          
        ))}
      </ul>
    </div>
  );
};


export default Avatar;