import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../stylecss/Header.css';
const Header = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

      const accessToken = localStorage.getItem('dang_nhap_token');
      setIsLoggedIn(!!accessToken);
      
      if (!accessToken) {
        setIsLoggedIn(false); 
      }
    }, [navigate]);
  
    // const handleLogout = () => {

    //   localStorage.removeItem('dang_nhap_token');
    //   setIsLoggedIn(false); 
    //   navigate('/dang-nhap'); 

    // };
    // onClick={handleLogout} 
    

  return (
     <>
     <div className='headerAll'>
      <header className="header">
      <div className="top-section">
        <div className="notifications">
          <span>Thông báo</span>
        </div>
        <div className="support">
          <span>Hỗ trợ</span>
        </div>
        {isLoggedIn ? (
        <div className="auth">
          <NavLink to="/tai-khoan" className="NavLink" >Tài Khoản</NavLink>
        </div>
        ):(
        <div className="auth">
          <NavLink to="/dang-nhap" className="NavLink" >Đăng nhập</NavLink> | <NavLink to="/dang-ky" className="NavLink" >Đăng ký</NavLink>
        </div>
        )}
        
      </div>
      <div className="bottom-section">
        <NavLink to="/" className="NavLink img">
            <img src="/logo192.png" alt="Logo" />
        </NavLink>
        <div className="search">
          <input type="text" placeholder="Tìm kiếm" />
          <button className="search-button">Tìm</button>
        </div>
        <div className="cart">
          <NavLink to="/giohang" className="NavLink">Giỏ hàng</NavLink>
        </div>
      </div>
    </header>
    </div>
     </>
  );
};

export default Header;
