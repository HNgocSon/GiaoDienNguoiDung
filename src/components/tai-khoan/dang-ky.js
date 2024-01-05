import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [ten, setten] = useState('');
  const [sdt, setsdt] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Gửi yêu cầu đăng ký đến API
    axios.post('http://127.0.0.1:8000/api/dang-ky', { ten, sdt, email, password })
      .then(response => {
        console.log(response.data.message);
        // Thực hiện các hành động khác sau khi đăng ký thành công
      })
      .catch(error => {
        console.error('Registration failed:', error.message);
        // Xử lý lỗi đăng ký
      });
  };

  return (
    <div className="container mt-5">
      <h2>Đăng ký</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="ten" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="ten"
            value={ten}
            onChange={(e) => setten(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sdt" className="form-label">
            Số Điện Thoại
          </label>
          <input
            type="text"
            className="form-control"
            id="sdt"
            value={sdt}
            onChange={(e) => setsdt(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email 
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
