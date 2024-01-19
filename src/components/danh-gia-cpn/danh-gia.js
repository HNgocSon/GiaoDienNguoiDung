import axios from "axios";
import { useEffect, useState } from "react";

const DanhGiaCPN = ({id}) => {
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

    return (
        <>
            <div>
                {dsDanhGia.map((danhGia) => {
                    return (
                        <div key={danhGia.id}>
                            <p>Tên: {danhGia.khach_hang.ten}</p>
                            <p>{danhGia.so_sao} Sao</p>
                            <p> Đánh Giá về sản Phầm: {danhGia.comments}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default DanhGiaCPN;
