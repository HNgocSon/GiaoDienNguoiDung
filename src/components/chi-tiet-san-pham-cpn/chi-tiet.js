import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import CTSanPham from '../../pages/dsChiTiet'; // Kiểm tra import

function ChiTietSanPham(props) {
  const [dsChiTietSanPham, setDSChiTietSanPham] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getDataFromAPI() {
      try {
        var response = await fetch(`http://127.0.0.1:8000/api/san-pham/${id}`);
        var json = await response.json();

        if (json && json.data) {
          setDSChiTietSanPham(json.data);
        } else {
          console.error('Invalid data structure:', json);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getDataFromAPI();
  }, [id]);

  return (
    <>
      {/* Kiểm tra CTSanPham có phải là một component hay không */}
      {/* <CTSanPham member={dsChiTietSanPham} /> */}
      {Object.keys(dsChiTietSanPham).length > 0 ? <div>{dsChiTietSanPham.ten_san_pham}</div> : <></>}
    </>
  );
}

export default ChiTietSanPham;
