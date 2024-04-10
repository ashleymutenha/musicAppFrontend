import '\../css/header.css'
import {BsClock,BsFacebook,BsTwitter,BsLinkedin,BsGoogle, BsHouse, BsInfo, BsFile, BsClipboard, BsPeopleFill, BsBricks, BsInfoSquareFill, BsSnow, BsMagic, BsHouseFill, BsPersonCircle} from'react-icons/bs'
import { BsJustify } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';

import { useEffect,useState } from 'react';
function Header(){

  const [width,setWidth] =useState(window.innerWidth)


  useEffect(()=>{
    setWidth(window.innerWidth)

    console.log(width)
  })
  

function toPage(url){
 console.log(url)
}

 const  toHome =()=>{
  window.open("/")
 }

 const  toAbout =()=>{
  window.open("/about-us")
 }

 const  toPartners =()=>{
  window.open("/partners")
 }


 const  toService =()=>{
  window.open("/services")
 }


 const  toMission =()=>{
  window.open("/company")
 }


 const options =['Home', 'Mission & Vision', 'About Us']
 const username =localStorage.getItem('username')
 const url ="/home?username="+username

    return(

        <div>
          <div className ="header" style ={{background:"#f8f9f3"}}>
           <div className ="content" style ={{background:"#f8f9f3", display:"flex"}}>
            <div style={{flex:2, background:"whitesmoke"}}>

              {/* <img src = "/servicesImages/pexels-ryan-holloway-243989.jpg" alt ="logo" style={{height:"200px",width:"200px",background:"transparent",cursor:"pointer"}} /> */}
            </div>
          <div style ={{flex:8, padding:"10px", display:"flex"}}>
            <div style ={{flex:16}}>
            <div style ={{fontSize:"28px", fontWeight:"bold", color:"rgb(47, 83, 47)"}}>Sound Inc.</div>
         <div style ={{ padding:"18px"}}>
           <a href={url} style ={{textDecoration:"none"}}><span style ={{color:"darkgreen", fontSize:24, fontWeight:"bold"}}> <BsHouseFill/> Home</span></a>
           

            </div>
            </div>

            <div style ={{flex:2}}>
                <BsPersonCircle size ={40} color ="grey"/>
            </div>
            </div>



           
            

            
           </div>

          
          

           
           {width<1000?<div style ={{ padding:"18px",background:"#f8f9f3"}}>
           <a href='/' style ={{textDecoration:"none"}}><span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold"}}>  Home</span></a>
           <a href='/about-us' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}> About Us</span></a>
             <a href='/company' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}> Mission & Vision</span></a>
             <a href='/services' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}> Services</span></a>
             {/* <a href='/partnerships' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}> Partners</span></a> */}
             <a href='/products' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}> Products</span></a>



            </div>:null} 
        


        
           

          

        



           </div>

           </div>
        
    );
}

export default Header;