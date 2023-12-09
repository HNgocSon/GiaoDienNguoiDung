import { Routes,Route } from 'react-router-dom';

import './App.css';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import React from 'react';
import Layout from './components/giao-dien-cpn/layout';
import ChiTietSanPham from './components/chi-tiet-san-pham-cpn/chi-tiet';
import SanPham from './pages/san-pham';
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
      <Layout />

    </>
  );
}

export default App;
