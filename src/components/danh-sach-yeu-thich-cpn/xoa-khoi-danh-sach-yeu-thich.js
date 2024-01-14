import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const XoaKhoiDanhSachYeuThich = ({ sanPhamId }) => {

  const handleXoaKhoiDanhSachYeuThich = async () => {
    try {
      const accessToken = localStorage.getItem('dang_nhap_token');
      const response = await axios.post('http://127.0.0.1:8000/api/xoa-yeu-thich',{
          san_pham: sanPhamId,
        },{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        Swal.fire({
            icon: 'error', 
            title: 'Xóa Thành công!',
            text:  response.data.message,
            confirmButtonColor: '#000000',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
    } catch (error) {
      console.error('Error removing from favorites:', error);
      alert('Có lỗi khi xóa sản phẩm khỏi danh sách yêu thích.');
    }
  };

  return (
    <button onClick={handleXoaKhoiDanhSachYeuThich}>Xóa khỏi danh sách yêu thích</button>
  );
};

export default XoaKhoiDanhSachYeuThich;
