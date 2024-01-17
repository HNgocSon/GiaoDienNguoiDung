import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import {thayDoiTranThai} from './thay-doi-trang-thai';
import '../../SanPham.css';

const DsHoaDon = () => {
  const [loading, setLoading] = useState(true);
  const [dsHoaDon, setDsHoaDon] = useState([]);
  const [trangThai, setTrangThai] = useState();
  const [chiTietHoaDon, setChiTietHoaDon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {

        const accessToken = localStorage.getItem('dang_nhap_token');
        const response = await axios.get(`http://127.0.0.1:8000/api/xem-hoa-don?status=${trangThai}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`,
              },
        });
        setDsHoaDon(response.data.data);
        setChiTietHoaDon(response.data.data);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [trangThai]);  

  const chonTrangThai = (newStatus) => {
        setTrangThai(newStatus);
  };

  const getStatus = (status) => {
    switch (status) {
        case 0:
            return 'Chờ Duyệt';
        case 1:
            return 'Đã Duyệt';
        case 2:
            return 'Đang Giao';
        case 3:
            return 'Đã Giao';
        case 4:
            return 'Đã Hủy';
        default:
            return 'Trạng thái không xác định';
    }
  };

  const xemChiTiet = (hoaDonId) => {
    const hoaDonCanXem = dsHoaDon.find(hoaDon => hoaDon.id === hoaDonId);
    if (hoaDonCanXem) {
      setChiTietHoaDon(hoaDonCanXem);
    } else {
      console.error(`Không tìm thấy hóa đơn có ID ${hoaDonId}`);
    }
  };
  

  const dongChiTiet = () => {
    setChiTietHoaDon(null);
  };

  return (
    <div>
        <div>
            <button onClick={() => chonTrangThai(0)}>Đã Mua</button>
            <button onClick={() => chonTrangThai(1)}>Đã Duyệt</button>
            <button onClick={() => chonTrangThai(2)}>Đang Giao</button>
            <button onClick={() => chonTrangThai(3)}>Đã Giao</button>
            <button onClick={() => chonTrangThai(4)}>Đã Hủy</button>
        </div>
      {loading ? (
        <div className="">
          <Skeleton animation="wave" width={100} height={100} />
        </div>
      ) : (
        dsHoaDon.map(hoaDon => (
          <div key={hoaDon.id}>
            <p>ID: {hoaDon.id}</p>
            <p>Tổng tiền: {hoaDon.tong_tien}</p>
            <p>Trạng thái: {getStatus(hoaDon.status)}</p>
            {hoaDon.status === 2 && (
                <button onClick={() => thayDoiTranThai(hoaDon.id, 3)}>Đã Nhận Hàng</button>
            )}
           {hoaDon.status === 1 && (
                  <button onClick={() => thayDoiTranThai(hoaDon.id, 4)}>Hủy Đơn</button>
            )}
              
                          
  

            <button onClick={() => xemChiTiet(hoaDon.id)}>Xem chi tiết</button>

            {chiTietHoaDon && chiTietHoaDon.chi_tiet_hoa_don_xuat && (
            <div className="modal">
                <div className="modal-content">
                <p>Chi Tiết Hóa Đơn:</p>
                <ul>
                    {chiTietHoaDon.chi_tiet_hoa_don_xuat.map(chiTiet => (
                    <li key={chiTiet.id}>
                        <p>Tên Sản Phẩm: {chiTiet.san_pham.ten}</p>
                        <p>Màu: {chiTiet.san_pham_bien_the.mau}</p>
                        <p>Dung Lượng: {chiTiet.san_pham_bien_the.dung_luong}</p>
                        <p>Số Lượng: {chiTiet.so_luong}</p>
                        <p>Đơn Giá: {chiTiet.don_gia}</p>
                    </li>
                    ))}
                </ul>
                <button onClick={dongChiTiet}>Đóng</button>
                </div>
            </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default DsHoaDon;
