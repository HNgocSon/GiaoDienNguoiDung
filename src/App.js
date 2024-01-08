import { Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Footer from './components/giao-dien-cpn/footer';
import ChiTietSanPham from './components/chi-tiet-san-pham-cpn/chi-tiet';
import SanPhamPage from './pages/san-pham-page';
import GioHang from './pages/giohang';
import LoginComponent from './pages/login';
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<SanPham/>}/>
        <Route path="/giohang" element={<GioHang/>} />
        <Route path="/tieptuc" element={<SanPham/>}/>
        <Route path="/chitiet/:id" element={<ChiTietSanPham/>} />
        <Route path="/login" element={<LoginComponent/>} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
