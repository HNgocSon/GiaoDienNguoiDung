import React, { useState } from 'react';
import axios from 'axios';

const BinhLuan = ({ sanPhamId }) => {
  const [comments, setComments] = useState('');

  const handleSubmit = async () => {
    try {

      const accessToken = localStorage.getItem('dang_nhap_token');
      const response = await axios.post('http://127.0.0.1:8000/api/them-binh-luan', {
        comments: comments,
        san_pham: sanPhamId, 
      },{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
      });

      alert(response.data.message);
 
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Có lỗi khi gửi đánh giá.');
    }
  };

  return (
    <div>
      <h2>Bình Luận</h2>
      <div>
        <label>Bình luận:</label>
        <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
      </div>
      <button onClick={handleSubmit}>Gửi Bình Luận</button>
    </div>
  );
};

export default BinhLuan;
