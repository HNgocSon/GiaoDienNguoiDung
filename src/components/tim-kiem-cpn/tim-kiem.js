import React from 'react';

const TimKiem = ({ onSearchChange }) => {
    return (
        <div className="search-bar">
            <input type="text"placeholder="Tìm kiếm sản phẩm"  onChange={onSearchChange}/>
        </div>
    );
}

export default TimKiem;
