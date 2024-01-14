import React, { useState, useEffect } from 'react';
import axios from 'axios';
import XoaKhoiDanhSachYeuThich from './xoa-khoi-danh-sach-yeu-thich';

const DanhSachYeuThich = () => {
  const [danhSachYeuThich, setDanhSachYeuThich] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('dang_nhap_token');
        const response = await axios.get('http://127.0.0.1:8000/api/danh-sach-yeu-thich', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        
        setDanhSachYeuThich(response.data.data);

      } catch (error) {
        alert('không tải được danh sách yêu thích');
        console.error('Error fetching favorite list:', error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <div>
      <h2>Danh Sách Yêu Thích</h2>
      <ul>
        {danhSachYeuThich.map((sanPhamYeuThich) => (
          <li key={sanPhamYeuThich.id}>
            {sanPhamYeuThich.san_pham.ten}
            <XoaKhoiDanhSachYeuThich sanPhamId={sanPhamYeuThich.san_pham.id}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DanhSachYeuThich;
