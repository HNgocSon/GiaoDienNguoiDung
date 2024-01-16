import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import XoaSanPhamKhoiGioHang from './xoa-gio-hang';
import ChonSanPham from '../thanh-toan-cpn/chon-san-pham';
import ThanhToan from '../thanh-toan-cpn/thanh-toan';
import '../../SanPham.css';

const DanhSachGioHang = () => {
  const [dsGioHang, setDsGioHang] = useState([]);
  const [chonSanPham, setChonSanPham] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('dang_nhap_token');
    
        if (!accessToken) {
          Swal.fire({
            icon: 'error',
            title: 'Vui Lòng Đăng Nhập',
            text: 'Đăng nhập để xem được giỏ hàng.',
            confirmButtonColor: '#000000', 
          });
          navigate('/dang-nhap');
          return;
        }


        const response = await axios.get('http://127.0.0.1:8000/api/gio-hang', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setDsGioHang(response.data.data);
      } catch (error) {
        alert('Không tải được danh sách giỏ hàng');
        console.error('Error fetching favorite list:', error);
      }
    };

    fetchData();
  }, [navigate]);

  const handleSelectProduct = (productId, isSelected) => {
    if (isSelected) {
      setChonSanPham([...chonSanPham, productId]);
    } else {
      const updatedSelectedProducts = chonSanPham.filter(id => id !== productId);
      setChonSanPham(updatedSelectedProducts);
    }
  };


  return (
    <>
    {dsGioHang && dsGioHang.map((gioHang) => (
        <li key={gioHang.id} className="">
            <ChonSanPham productId={gioHang.id} onSelect={handleSelectProduct} />
            <p>Số lượng: {gioHang.so_luong}</p>
            {/* Hiển thị các thông tin khác của giỏ hàng */}
            <p>Tên sản phẩm: {gioHang.san_pham.ten}</p>
            <p>Giá: {gioHang.san_pham_bien_the.gia}</p>
            <p>Màu: {gioHang.san_pham_bien_the.mau}</p>
            <p>Dung Lượng: {gioHang.san_pham_bien_the.dung_luong}</p>
            <XoaSanPhamKhoiGioHang XoaId={gioHang.id} />
        </li>
      ))}
       <ThanhToan selectedProducts={chonSanPham}/>
    </>
  );
};

export default DanhSachGioHang;
