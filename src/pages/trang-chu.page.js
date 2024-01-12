import React from 'react';
import Header from '../components/giao-dien-cpn/header';
import DanhMucSanPham from '../components/san-pham-cpn/danhmuc';
import SanPhamCPN from '../components/san-pham-cpn/san-pham';
import '../stylecss/dangnhap.css';

const TrangChu = () => {
  
  return (
    <>
    <Header/>
    <DanhMucSanPham/>
    <SanPhamCPN/>
    </>
  );
};

export default TrangChu;
