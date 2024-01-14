import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import ThemSanPhamYeuThich from '../danh-sach-yeu-thich-cpn/san-pham-yeu-thich';
import BinhLuan from '../binh-luan-cpn/binh-luan';
import DanhSachBinhLuan from '../binh-luan-cpn/danh-sach-binh-luạn';
const ChiTietSanPhamCPN = () => {
  const { id } = useParams();
  const [sanPham, setSanPham] = useState(null);
  const [bienThe, setBienThe] = useState(null);
  const [openDanhGia, setOpenDanhGia] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/san-pham/${id}`);
        const product = response.data.data;

        setSanPham(product);

        
        setBienThe(product.san_pham_bien_the[0]);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  
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
          <ThemSanPhamYeuThich sanPhamId={sanPham.id} />
          <div className="">
          <NavLink to="/danh-sach-yeu-thich" className="NavLink">San Phẩm Yêu Thích</NavLink>
        </div>

        <button onClick={() => setOpenDanhGia(true)}>Đánh Giá</button>
          {openDanhGia && <BinhLuan sanPhamId={sanPham.id} />}

          <DanhSachBinhLuan sanPhamId={sanPham.id} />
        </div>
      )}
    </div>
  );
};

export default ChiTietSanPhamCPN;
