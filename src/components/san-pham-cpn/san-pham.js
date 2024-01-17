import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../stylecss/sanpham.css';
import Skeleton from '@mui/material/Skeleton';
import { NavLink } from 'react-router-dom';
import TimKiem from '../tim-kiem-cpn/tim-kiem';
import '../../SanPham.css';

const SanPhamCPN = () => {
const [loading, setLoading] = useState(true);
const [dsSanPham, setDsSanPham] = useState([]);
const [timKiem, setTimKiem] = useState("");

useEffect(() => {
    const fetchData = async () => {
    try {
        
        const response = await axios.get('http://127.0.0.1:8000/api/san-pham');
        setDsSanPham(response.data.data);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    fetchData();
}, []);  

const handleTimKiem = (event) => {
    setTimKiem(event.target.value);
};

const locSanPham = dsSanPham.filter((sanPham) =>
    sanPham.ten.toLowerCase().includes(timKiem.toLowerCase()) ||
    (sanPham.san_pham_bien_the && sanPham.san_pham_bien_the.length > 0 &&
        sanPham.san_pham_bien_the.some((bienThe) =>
            bienThe.dung_luong.toLowerCase().includes(timKiem.toLowerCase()) ||
            bienThe.ram.toLowerCase().includes(timKiem.toLowerCase())
        )
    )
);


return (
    <div className="san-pham">
      <TimKiem onSearchChange={handleTimKiem} />
        <div className="card">
            {loading ? (
                <div className="categories-list">
                    <Skeleton animation="wave"  width={100} height={100} />
                </div>
            ) : (
                locSanPham.map(sanPham => (
                    <NavLink key={sanPham.id} to={`/san-pham/${sanPham.id}`} className="card-item">
                        {sanPham.hinh_anh && sanPham.hinh_anh.length > 0 ? (
                            <img className="imgSP" src={`http://localhost:8000/${sanPham.hinh_anh[0].url}`} alt={`Hình ảnh sản phẩm`} />
                        ) : (
                            <img className="imgSP" src="/loading.jpg" alt="Ảnh mặc định" />
                        )}
                        <div className="card-content">
                            <p className="name">Tên Sản Phẩm: {sanPham.ten}</p>
                            {sanPham.san_pham_bien_the && sanPham.san_pham_bien_the.length > 0 ? (
                                <div className="variant-card">
                                    <p className="storage-variant">DungLượng:{sanPham.san_pham_bien_the[0].dung_luong}</p>
                                    <p className="price">Giá: {sanPham.san_pham_bien_the[0].gia}</p>
                                </div>
                            ) : (
                                <p className="no-variant">Không có biến thể sản phẩm.</p>
                            )}
                        </div>
                    </NavLink>
                ))
            )}
        </div>
    </div>
    );
}

export default SanPhamCPN;