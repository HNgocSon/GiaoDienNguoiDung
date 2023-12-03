import { Routes,Route } from 'react-router-dom';
import './App.css';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Layout from './components/layout';
import Products from './pages/san-pham/TrangChu/sanpham';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products/>}/>
     </Routes>
     <Layout />
    </>
  );
}

export default App;
