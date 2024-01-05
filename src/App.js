import { Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Footer from './components/giao-dien-cpn/footer';
import ChiTietSanPham from './components/chi-tiet-san-pham-cpn/chi-tiet';
import SanPhamPage from './pages/san-pham-page';
import GioHang from './pages/giohang';
import DangKyPage from './pages/dang-ky-page';
import DangNhapPage from './pages/dang-nhap-page';
import ResetMatKhauPage from './pages/reset-mat-khau-page';
import TrangChu from './pages/trang-chu.page';

function App() {
  return (
    <>
      <Routes>  
          <Route path="/" element={<TrangChu/>}/>
          <Route path="/loai-san-pham/:id" element={<SanPhamPage/>} />
          <Route path="/giohang" element={<GioHang/>} />
          <Route path="/chitiet/:id" element={<ChiTietSanPham/>} />
          <Route path="/dang-nhap" element={<DangNhapPage/>} />
          <Route path="/dang-ky" element={<DangKyPage/>} />
          <Route path="/forgot-password" element={<ResetMatKhauPage/>} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
