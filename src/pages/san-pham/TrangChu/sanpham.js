

import { useEffect } from 'react';
import { useState } from 'react';
import SanPham from "../san-pham";
import Header from '../../../components/header';

function Products(props) {
    const [dsSanPham,setDSSanPham]=useState([])
    

    useEffect(()=>{
      async function getDatFromAPI(){
        var response = await fetch('http://127.0.0.1:8000/api/san-pham');
        var json=await response.json();
        setDSSanPham(json.data);
      }
      getDatFromAPI();
    },[]);
    
  
   
    
    const dsloaiSanPham = dsSanPham.map(function(item){
        return (
          <>
            <SanPham member={item}/>
            
          </>
            
        );
        });
        return (
        <>
        <Header />
        {dsloaiSanPham}
        
        </>
    );
    
}

export default Products;