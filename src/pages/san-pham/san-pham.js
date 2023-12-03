import Avatar from './avatar';
import TenSP from './ten';
import Gia from './gia';

import MoTa from './mo-ta';

function SanPham(props) {

    var sanPham={id: props.member.id, ten: props.member.ten,gia: props.member.gia,so_luong: 1,mota: props.member.mo_ta ,url: props.member.hinh_anh}
    var cartItems=localStorage.getItem("cartItems");
    if(cartItems  ==null)
    {
      cartItems=[sanPham];
    }
    else{
      cartItems=JSON.parse(cartItems)
      var i=0;
      for(;i<cartItems.length;i++)
      {
        if(cartItems[i].id===sanPham.id){
          cartItems[i].so_luong += sanPham.so_luong;
          break;
        }
      }
      if(i === cartItems.length)
      {
        cartItems.push(sanPham);
      }
      
    }
    console.log(cartItems);
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    //alert("Them san pham vao gio hang thanh cong");

  
  //Hình ảnh
 
    return (
      <div className="wrapper">
        <Avatar url={props.member.hinh_anh}/>
        <TenSP ten={props.member.ten} />
        <Gia  gia={props.member.gia} />
        <MoTa mota={props.member.mo_ta}/>
      </div>
      
    );
}

export default SanPham;