import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";

function ThemGioHang(props) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        var items = localStorage.getItem('cartItems');
        if (items != null) {
            setCartItems(JSON.parse(items));
        }
    }, []);

    const XoaSp = (id) => {
        console.log('Xoa', id)
        var items = cartItems.filter((item) => item.id !== id);
        setCartItems(items);
        localStorage.setItem('cartItems', JSON.stringify(items));
    }

    const DatHang = () => {
        localStorage.removeItem('cartItems');
        setCartItems([]);
    }

    const giohangUI = () => {
        if (cartItems.length > 0) {
            return (
                <div className="container mt-5">
                    <div className="row">
                        {cartItems.map(function (item) {
                            return (
                                <div key={item.id} className="col-md-4 mb-4">
                                    <div className="card">
                                        <img src="" className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.ten}</h5>
                                            <p className="card-text">Giá: {item.gia}</p>
                                            <p className="card-text">Số Lượng: {item.so_luong}</p>
                                            <p className="card-text">Thành Tiền: {item.gia * item.so_luong}</p>
                                            <button className="btn btn-danger" onClick={() => XoaSp(item.id)}>Xóa</button>
                                            <button className="btn btn-warning">Cập Nhật</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="but mt-3">
                        <button type="button" className="btn btn-secondary">
                            <NavLink to="/tieptuc" className="nav-link" activeClassName="active">Tiếp Tục Mua Hàng</NavLink>
                        </button>
                        <button type="button" className="btn btn-primary">
                            <NavLink to="/thanh-toan" className="nav-link" activeClassName="active" onClick={DatHang}>Thanh Toán</NavLink>
                        </button>
                    </div>
                </div>
            );
        }
        return <div className="container mt-5">Không có sản phẩm nào trong giỏ hàng
        <button type="button" className="btn btn-secondary">
            <NavLink to="/tieptuc" className="nav-link" activeClassName="active">Quay Lại</NavLink>
        </button>
        </div>;
        
    }

    return (
        <div>
            {giohangUI()}
        </div>
    );
}

export default ThemGioHang;
