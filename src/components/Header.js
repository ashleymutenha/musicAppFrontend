import './css/header.css'
import {BsClock,BsFacebook,BsTwitter,BsLinkedin,BsGoogle, BsHouse, BsInfo, BsFile, BsClipboard, BsPeopleFill, BsBricks, BsInfoSquareFill, BsSnow, BsMagic, BsHouseFill} from'react-icons/bs'
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

    return(

        <div>
          <div className ="header">
           <div className ="content" style ={{background:"#f8f9f3", display:"flex"}}>
            <div style={{flex:1, background:"white", padding:"12px"}}>

              <img src = "/agval.png" alt ="logo" style={{height:"80px",width:"auto",background:"transparent",cursor:"pointer"}} />
            </div>

           {width>1000?<div style ={{flex:6, padding:"18px"}}>
           <a href='/' style ={{textDecoration:"none"}}><span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold"}}> <BsHouseFill/> Home</span></a>
           <a href='/about-us' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}><BsInfoSquareFill/> About Us</span></a>
             <a href='/company' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}><BsMagic/> Mission & Vision</span></a>
             <a href='/services' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}><BsSnow/> Services</span></a>
             <a href='/partnerships' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}><BsPeopleFill/> Partners</span></a>
             <a href='/products' style ={{textDecoration:"none"}}> <span style ={{color:"darkgreen", fontSize:20, fontWeight:"bold", marginLeft:18}}><BsBricks/> Products</span></a>



            </div>:null}

           
            

            
           </div>

          
           

           

        


           {width<1000?<div><select  onChange={(e)=>{
              // window.open(e.target.value)

              window.location.href = e.target.value;


          }
          
          
          }    style ={{fontSize:"18px",background:"rgb(20, 55, 38)",border:"1px solid rgb(20, 55, 38)", color:"#ffff"}}>
       <option value ="/">  Home</option>
            <option value ="/about-us" >About Us</option>
            <option value ="/company"> Mission and Vision</option>
            <option value ="/partnerships"> Partners</option>
            <option value ="/services"> Services</option>
            <option value ="/products"> Products</option>

          </select>
          </div>:null}




           {width<=1000?<div className ="lower-content-sm">
           

          

        

         <div style ={{flex:4,background:"rgb(20, 55, 38)"}}>

              <span style ={{color:"white", fontSize:23, fontWeight:"bold"}}>AgVal Networks (Pty) Ltd <span style={{color:"goldenrod"}}>.</span></span>
            </div>



           </div>:null}

           </div>
        </div>
    );
}

export default Header;