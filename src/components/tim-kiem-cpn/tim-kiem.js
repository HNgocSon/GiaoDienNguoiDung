import React from 'react';
import '../../stylecss/timkiem.css';
const TimKiem = ({ onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="search-input"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default TimKiem;
