import './css/header.css'
import {BsClock,BsFacebook,BsTwitter,BsLinkedin,BsGoogle} from'react-icons/bs'
import { BsJustify } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';

import { useEffect,useState } from 'react';
function Header(){

  const [width,setWidth] =useState(window.innerWidth)


  useEffect(()=>{
    setWidth(window.innerWidth)

    console.log(width)
  })


 const options =['Home', 'Mission & Vision', 'About Us']

    return(

        <div>
          <div className ="header" >
           <div className ="content">
            <div style={{flex:2, background:"white",padding:"12px 12px 12px 12px"}}>

              <img src = "/agval.png" alt ="logo" style={{height:"100px",width:"auto",background:"transparent",cursor:"pointer"}} />
            </div>
              {width>1000?<div style={{flex:4,background:"rgb(20, 55, 38)", padding:"40px 40px 40px 40px" }}>
              <BsClock className ="icon" size={30}/> 
             <span style ={{marginLeft:20,color:"#ffff", fontWeight:"bold"}}>MON-SAT 4.00AM -13.00PM 
             <span style ={{marginLeft:16,color:"#ffff", fontWeight:"bold"}}>SUN CLOSED</span> 
              </span>
              </div>:null}

              {width>1000?<div style ={{flex:3, background:"rgb(20, 55, 38)",padding:"40px 40px 40px 40px"}}>
                <BsLinkedin style ={{marginLeft:12}} color='#ffff'  size ={20}/>
                <BsGoogle style ={{marginLeft:12}} color='#ffff'  size ={20}/>
              </div>:null}
           </div>

           {width>1000?<div className ="lower-content">
            <div style={{flex:3}}>

              {/* <BsJustify style ={{marginLeft:12}} color='black'  size ={40}/> */}
            </div>

           

          <div style ={{flex:4, }}>

              <span style ={{color:"rgb(42, 95, 49)", fontSize:23, fontWeight:"bold"}}>AgVal Networks (Pty) Ltd <span style={{color:"goldenrod"}}>.</span></span>
            </div>

          

           <div style ={{flex:6, marginTop:3}}>
           <a href='/' style ={{textDecoration:"none"}}><span style ={{color:"rgb(3, 59, 50)", fontSize:18, fontWeight:"bold"}}>Home</span></a>
              <span style ={{color:"rgb(3, 59, 50)", fontSize:18, fontWeight:"bold", marginLeft:18}}>About Us</span>
              {/* <span style ={{color:"rgb(3, 59, 50)", fontSize:18, fontWeight:"bold", marginLeft:18}}>Services</span> */}
             <a href='/company' style ={{textDecoration:"none"}}> <span style ={{color:"rgb(3, 59, 50)", fontSize:18, fontWeight:"bold", marginLeft:18}}>Mission & Vision</span></a>





            </div>


           </div>:null}




           {width<=1000?<div className ="lower-content-sm">
           

           <div style={{flex:3,background:"rgb(20, 55, 38)"}}>

          <BsJustify style ={{marginLeft:12}} color='white'  size ={40}/>
          <Dropdown options ={options}  value = {options[0]} style ={{background:"#ffff"}}/>
          </div>

        

         <div style ={{flex:4,background:"rgb(20, 55, 38)"}}>

              <span style ={{color:"white", fontSize:23, fontWeight:"bold"}}>AgVal Networks (Pty) Ltd <span style={{color:"goldenrod"}}>.</span></span>
            </div>



           </div>:null}

           </div>
        </div>
    );
}

export default Header;