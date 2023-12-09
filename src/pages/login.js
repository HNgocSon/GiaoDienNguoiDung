import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/dang-nhap', {
        email: email,
        password: password,
      });

      // Xử lý response từ API, ví dụ: lưu token vào localStorage
      localStorage.setItem('access_token', response.data.access_token);
      // Redirect to the home page or handle the success as needed
    } catch (error) {
      // Xử lý lỗi
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Đăng Nhập</h2>

              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}

              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                  Đăng Nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
