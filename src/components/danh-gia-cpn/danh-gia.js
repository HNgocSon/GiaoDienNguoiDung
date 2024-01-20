import axios from "axios";
import { useEffect, useState } from "react";
import '../../stylecss/danhgiacpn.css';

const DanhGiaCPN = ({ id }) => {
  const [dsDanhGia, setDsDanhGia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/danh-gia/${id}`);
        setDsDanhGia(response.data.data);
      } catch (error) {
        console.error('lỗi', error);
      }
    }

    fetchData();
  }, [id]);

  const tinhTongSoSao = () => {
    if (dsDanhGia.length === 0) {
      return 0;
    }

    const tongSoSao = dsDanhGia.reduce((total, danhGia) => total + danhGia.so_sao, 0);
    return Math.round(tongSoSao / dsDanhGia.length);
  };

  return (
    <div className="danh-gia-container">
      <div className="tong-so-sao">
        Tổng Số Sao Đánh Giá: {tinhTongSoSao()} Sao
      </div>
      {dsDanhGia.map((danhGia) => (
        <div key={danhGia.id} className="danh-gia-item">
          <p className="ten-khach-hang">Tên: {danhGia.khach_hang.ten}</p>
          <p className={`so-sao so-sao-${danhGia.so_sao}`}>{'\u2605'.repeat(danhGia.so_sao)}</p>
          <p className="danh-gia-comments">Đánh Giá về sản Phầm: {danhGia.comments}</p>
        </div>
      ))}
    </div>
  );
}

export default DanhGiaCPN;
