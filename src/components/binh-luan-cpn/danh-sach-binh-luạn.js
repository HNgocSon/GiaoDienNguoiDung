import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DanhSachBinhLuan = ({ sanPhamId }) => {
  const [danhSachBinhLuan, setDanhSachBinhLuan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.post(`http://127.0.0.1:8000/api/binh-luan?san_pham=${sanPhamId}`);

        setDanhSachBinhLuan(response.data.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [sanPhamId]); 

  return (
    <div>
      <h2>Bình Luận</h2>
      <div>
        {danhSachBinhLuan.map((binhLuan) => (
          <div key={binhLuan.id}>
            <label>Tài Khoản: {binhLuan.khach_hang.ten}</label>
            <p>comment: {binhLuan.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DanhSachBinhLuan;
