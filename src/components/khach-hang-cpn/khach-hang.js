import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function KhachHangCPN(props) {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    
    
  useEffect(() => {
    const accessToken = localStorage.getItem('dang_nhap_token');
    console.log(accessToken);

    if (!accessToken) {
        navigate('/dang-nhap');
      }

    const fetchData = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/khach-hang',
        { headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data.user);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false);
      }

    };
    fetchData();
}, [navigate]);  

  return (
    <>
      <div>
        {loading ? (
          <p>Loading user ...</p>
        ) : userData ? (
          <div>
            <h2>User Profile</h2>
            <p>Name: {userData.ten}</p>
            <p>Email: {userData.email}</p>
          </div>
        ) : (
          <p>Failed to load user data.</p>
        )}
      </div>
    </>
  );
}

export default KhachHangCPN;
