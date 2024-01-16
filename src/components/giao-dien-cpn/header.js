import React from 'react'; 
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../stylecss/Header.css';

const Header = () => {


    const [dangNhap, setDangNhap] = useState(false);


    useEffect(() => {

      const accessToken = localStorage.getItem('dang_nhap_token');
      setDangNhap(!!accessToken);
      
      if (!accessToken) {
        setDangNhap(false); 
      }
    }, []);

   
    

  return (
     <>
     <div className='headerAll'>
      <header className="header">
      <div className="top-section">
        
      <div className="img">
        <NavLink to="/" className="NavLink ">
            <img src="/logo192.png" alt="Logo" />
        </NavLink>
        </div>
        <div className="cart">
          <NavLink to="/gio-hang" className="NavLink">Giỏ hàng</NavLink>
        </div>
        <div className="notifications">
          <span>Thông báo</span>
        </div>
        <div className="support">
          <span>Hỗ trợ</span>
        </div>
        {dangNhap ? (
        <div className="auth">
          <NavLink to="/tai-khoan" className="NavLink" >Tài Khoản</NavLink>
        </div>
        ):(
        <div className="auth">
          <NavLink to="/dang-nhap" className="NavLink" >Đăng nhập</NavLink> | <NavLink to="/dang-ky" className="NavLink" >Đăng ký</NavLink>
        </div>
        )}
      </div>



    </header>
    </div>
     </>
  );
};

export default Header;
