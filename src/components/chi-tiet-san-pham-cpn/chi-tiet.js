import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SanPham from '../../pages/san-pham';
import CTSanPham from '../../pages/dsChiTiet';

function ChiTietSanPham(props){
    const [dsChiTietSanPham,setDSChiTietSanPham]=useState({})
    let{id}=useParams();
    useEffect(()=>{
        async function getDatFromAPI(){
          var response = await fetch(`http://127.0.0.1:8000/api/san-pham/${id}`);
          var json=await response.json();
          setDSChiTietSanPham(json.data);
        }
        getDatFromAPI();
      },[]);
    return(
        <>
        {
            Object.keys(dsChiTietSanPham).length>0 ? <CTSanPham member={dsChiTietSanPham}/> :<></>
        }
        
        </>
    );
}
export default ChiTietSanPham;