import React from 'react';
import Gia from '../components/san-pham-cpn/gia';
import MoTa from '../components/san-pham-cpn/mo-ta';
import { NavLink } from 'react-router-dom';

function CTSanPham(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`http://127.0.0.1:8000/${props.member.hinh_anh[0]?.url}`}
            alt={props.member.ten}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{props.member.ten}</h1>
          <Gia gia={props.member.gia} />
          <MoTa mota={props.member.mo_ta} />
          <NavLink to="/giohang"><button type="button" className="btn btn-primary mt-3">
            Mua
          </button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default CTSanPham;
