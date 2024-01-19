import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const DanhGiaSanPham = ({ hoaDonId, sanPhamId, setHienThiDanhGia,daDanhGia }) => {
  const [soSao, setSoSao] = useState(0);
  const [comments, setComments] = useState('');

  const submitReview = async () => {
    try {
      const accessToken = localStorage.getItem('dang_nhap_token');

      await axios.post(`http://127.0.0.1:8000/api/them-danh-gia`, {
        hoaDonId : hoaDonId,
        sanPhamId : sanPhamId,
        soSao : soSao,
        comments : comments,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setHienThiDanhGia(false);
      
        Swal.fire({
            icon: 'success',
            title: 'Đánh Giá thành công!',
            text: 'Cảm Ơn Bạn Đã gửi Đánh Giá',
            confirmButtonColor: '#000000',
            });
            
            daDanhGia();

    } catch (error) {
      Swal.fire({
        icon: 'warning',
        title: 'Cảnh Báo!',
        text: error.response.data.error,
        confirmButtonColor: '#000000',
        });
        daDanhGia();
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div>
      <h3>Đánh Giá Sản Phẩm</h3>
      <label>Đánh giá:</label>
      <select value={soSao} onChange={(e) => setSoSao(e.target.value)}>
        <option value={1}>1 sao</option>
        <option value={2}>2 sao</option>
        <option value={3}>3 sao</option>
        <option value={4}>4 sao</option>
        <option value={5}>5 sao</option>
      </select>
      <label>Bình luận:</label>
      <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
      <button onClick={submitReview}>Gửi Đánh Giá</button>
    </div>
  );
};

export default DanhGiaSanPham;
