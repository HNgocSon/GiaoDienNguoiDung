import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'; 
import {isTokenExpired} from '../dang-nhap-cpn/kiem-tra-token';
import Swal from 'sweetalert2';
import '../../KhachHang.css';

function KhachHangCPN(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
    
  useEffect(() => {
    const accessToken = localStorage.getItem('dang_nhap_token');

    if (isTokenExpired(accessToken)) {
      localStorage.removeItem('dang_nhap_token');
      Swal.fire({
        icon: 'error',
        title: 'Token Hết Hạn',
        text: 'Vui lòng đăng nhập lại để xem giỏ hàng.',
        confirmButtonColor: '#000000',
      });
      navigate('/dang-nhap');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/khach-hang', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div className="profile-container">
      {loading ? (
        <p>Loading user ...</p>
      ) : userData ? (
        <div className="profile-content">
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {userData.ten}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Số điện thoại:</strong> {userData.sdt}</p>
          <p><strong>Địa chỉ:</strong> {userData.dia_chi}</p>
          <div className="profile-buttons">
            
              <NavLink to="/cap-nhat-tai-khoan"><button className="update-account-button">Cập Nhật thông tin tài khoản</button></NavLink>
            
              <NavLink to="/cap-nhat-mat-khau"><button className="update-password-button">Cập Nhật mật khẩu</button></NavLink>

          </div>
        </div>
      ) : (
        <p>Failed to load user data.</p>
      )}
    </div>
  );
}

export default KhachHangCPN;
