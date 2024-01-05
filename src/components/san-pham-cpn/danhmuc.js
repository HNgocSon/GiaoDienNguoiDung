    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import '../../stylecss/danhmuc.css';
    import Skeleton from '@mui/material/Skeleton';
    import { NavLink } from 'react-router-dom';

    const DanhMucSanPham = () => {
    const [dsLoaiSanPham, setDsLoaiSanPham] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dsSanPham, setDsSanPham] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/loai-san-pham');
            setDsLoaiSanPham(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);  

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

    function Text(text, maxLength) {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
        }
        return text;
      }

    return (
        <>
            <>
            <div className="danh-muc-san-pham">
            <h2>Danh Mục Sản Phẩm</h2>
            {loading ? (
                <div className="categories-list">
                    <Skeleton animation="wave"  width={100} height={100} />
                </div>
            ) : (
                <div className="categories-list">
                {dsLoaiSanPham.map(dsLoaiSanPham => (
                    <NavLink key={dsLoaiSanPham.id} to={`/loai-san-pham/${dsLoaiSanPham.id}`}>
                        <img src={`http://localhost:8000/${dsLoaiSanPham.img}`} alt={`${dsLoaiSanPham.ten_loai}`} />
                    </NavLink>
                ))}
                </div>
            )}
            </div>
            </>
            <>        
            <div className="san-pham">
                <div className="card">
                {loading ? (
                    <div className="categories-list">
                        <Skeleton animation="wave"  width={100} height={100} />
                    </div>
                ) : (
                    dsSanPham.map(sanPham => (
                    <div className="card-item" key={sanPham.id}>
                        {sanPham.hinh_anh && sanPham.hinh_anh.length > 0 ? (
                            <img className="img" src={`http://localhost:8000/${sanPham.hinh_anh[0].url}`} alt={`Hình ảnh sản phẩm`} />
                        ) : (
                        <img className="img" src="/loading.jpg" alt="Ảnh mặc định" />
                        )}
                        <div className="card-content">
                            <p className="name">Tên Sản Phẩm: {sanPham.ten}</p>
                            <p className="description">{Text(sanPham.mo_ta, 15)}</p>
                            <p className="price">Giá: {sanPham.gia}</p>
                        </div>
                    </div>
                    ))
                )}
                </div>
            </div>
            </>
        </>
     

    );
    };

    export default DanhMucSanPham;
