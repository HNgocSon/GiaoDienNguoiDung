import GioHangCPN from "../components/gio-hang-cpn/gio-hang-item";

const GioHang = ({ gioHang }) => {
    return (
      <div>
        <h2>Trang Giỏ Hàng</h2>
        <GioHangCPN gioHang={gioHang} />
      </div>
    );
  };

export default GioHang;