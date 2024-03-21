import '../css/areas.css'
import {  BsCollection, BsCpuFill, BsInboxesFill, BsPeopleFill } from 'react-icons/bs'
import { useState } from 'react';

import {motion} from "framer-motion";


import {Swiper, SwiperSlide} from 'swiper/react'

import { A11y, Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
export default function Areas(){
    const[width, setWidth] =useState(window.innerWidth)

    const toPartners =()=>{
      window.onpageshow("/partnerships")
    }
    return(
      
        <div className ="_container" style ={{borderTop:"1px solid rgb(222, 200, 149)" }}>
            <BsCollection color ="rgb(222, 200, 149)" size ={70} style ={{opacity:0.8}}/>
            <div className='_heading' ></div>




            {width>1100?<div className ="areas">
                <div className =" collective">
                <div className ="_crop">
                  
                </div>

                <div className ="_lowerCollection">

                      <div className ="icon-container">

                      <BsCpuFill color='rgb(231, 232, 216)' size ={40}/> 
                      </div>

                      <div className ="submenu-heading">Services</div>

                      <div className ="submenu">

                      At AgVal Networks, we are committed to fortifying the agricultural value chain. 
                      Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
                      we aim to uplift Africa's agricultural sector, one solution at a time.


                      <div  style ={{marginTop:"12px"}}>
     <a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/services"> <span className='bnm'>Read More</span></a>
  </div>

                      </div>
                </div>

                </div>
                 
               

              
                <motion.div className =" collective" initial ={{marginLeft:"-400px"}} whileInView={{marginLeft:"0px" }}
                transition={{duration:3}}
                >
                <div className ="_basket">
                  
                </div>

                <div className ="_lowerCollection">

<div className ="icon-container">

<BsPeopleFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Partnerships</div>

<div className ="submenu">

At AgVal Networks, we deeply value the power of collaboration.
 We believe that by combining our strengths with those of our esteemed partners, 
 we can address some of the most pressing challenges facing the agricultural sector in Africa.
  Our partners play an integral role in....
  

<div  style ={{marginTop:"12px"}}>
     <a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/partnerships"> <span className='bnm'>Read More</span></a>
  </div>

</div>
</div>



                </motion.div>
               
                
                <div className ="collective">
                <div className ="_animals">
                  
                  </div>

                  <div className ="_lowerCollection">

<div className ="icon-container">

<BsInboxesFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Products</div>

<div className ="submenu">

Innovation meets agriculture. Our range of products is meticulously crafted to address the unmet needs of Africa's agriculture sector, ensuring sustainability, profitability, and growth at every step of the value chain.

<div  style ={{marginTop:"12px"}}>
<a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/products"> <span className='bnm'>Read More</span></a>

</div>

</div>
</div>
                  </div>

            </div>:null}








{width<=1100?<div className ="areas2">

<div className ="collective">
<div className ="crop ">
  
</div>

<div className ="lowerCollection">

<div className ="icon-container">

<BsCpuFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Services</div>

<div className ="submenu">

At AgVal Networks, we are committed to fortifying the agricultural value chain. 
Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
we aim to uplift Africa's agricultural sector, one solution at a time.


<div  style ={{marginTop:"12px"}}>
<a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/services"> <span className='bnm'>Read More</span></a>

</div>

</div>
</div>
</div>

{/* <div className ="collective">
<div className ="goats">
  
</div>
</div> */}

<div className ="collective">
<div className ="basket">
  
</div>

<div className ="lowerCollection">

<div className ="icon-container">

<BsPeopleFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Partnerships</div>

<div className ="submenu">

At AgVal Networks, we deeply value the power of collaboration.
 We believe that by combining our strengths with those of our esteemed partners, 
 we can address some of the most pressing challenges facing the agricultural sector in Africa.
  Our partners play an integral role in....
  

  <div  style ={{marginTop:"12px"}}>
<a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/partnerships"> <span className='bnm'>Read More</span></a>

</div>

</div>
</div>
</div>

<div className ="collective">
<div className ="animals">
  
  </div>

  <div className ="lowerCollection">

<div className ="icon-container">

<BsInboxesFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Products</div>

<div className ="submenu">

Innovation meets agriculture. Our range of products is meticulously crafted to address the unmet needs of Africa's agriculture sector, ensuring sustainability, profitability, and growth at every step of the value chain.


<div  style ={{marginTop:"12px"}}>
<a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/products"> <span className='bnm'>Read More</span></a>

</div>

</div>
</div>

  </div>

</div>:null}

        </div>
       
       
       )}
