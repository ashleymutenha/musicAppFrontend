import Header from '../Header'
import '../css/services.css'

import {Swiper, SwiperSlide} from 'swiper/react'

import { A11y, Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { EffectFade } from 'swiper/modules'
import { BsCommand, BsGift, BsMortarboard } from 'react-icons/bs'
import Waves from "../bodyComponents/Waves.js"
import Footer from "../bodyComponents/footer.js"

import {motion} from "framer-motion";
import { useState } from 'react'


export default function Services(){


    function toService(num){
        sessionStorage.setItem('index',num)
        window.open("/service")
      
    }

    const [width,setWidth] =useState(window.innerWidth)

    return (

        <div>
           <Header/>


          {width>=1000?<div className ="UpperContent">

            {/* <div  style ={{flex:2}}> 
                   
                </div> */}

                
                  

                    

                   

                    

                    <div style ={{flex:8, padding:"12px"}}>
                    

                    {width>=1000?<div className ="card"  style ={{display:"flex", flexDirection:"row", marginTop:"20%",height:"fit-content",background:"rgb(46, 67, 51)", opacity:0.9, fontSize:"27px", color:"whitesmoke"}}>
                    <div  style ={{flex:6, padding:"12px 12px 12px 12px"}}>

                        <div>
                            <BsCommand size ={50} color ='beige' style ={{opacity:0.7}}/>
                        </div>
                        
                        At AgVal Networks, we are committed to fortifying the agricultural value chain. Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
   we aim to uplift Africa's agricultural sector, one solution at a time.
                    </div>
                    
                    <motion.div className ="card2" style ={{flex:6}}

                    initial ={{marginLeft:"700px", opacity:0.2 }} animate={{marginLeft:"0px", opacity:0.8 }}
                    transition={{duration:6}}
                    
                    ></motion.div>
                   
                    </div>:null}
                   
                    </div>

                    <div style ={{flex:3}}>

<div  className ="card" style ={{display:"flex", marginBottom:"30%",
     background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
    <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
   <div className ="_card3" ></div>
   </div>
   <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> Services</div>
  
</div>


</div>

               

                     
                      

                 
                </div>:null}


                {width<1000?<div className ="UpperContent-sm">

{/* <div  style ={{flex:2}}> 
       
    </div> */}

    
      

        <div style ={{flex:3}}>

       

        </div>

        <div style ={{flex:6}}>
        

        {width>=1000?<div className ="card"  style ={{display:"flex", flexDirection:"row", marginTop:"20%",height:"fit-content",background:"rgb(9, 48, 18)", opacity:0.8, fontSize:"28px", color:"whitesmoke"}}>
        <div  style ={{flex:6, padding:"12px 12px 12px 12px"}}>

            <div>
                <BsCommand size ={50} color ='beige' style ={{opacity:0.7}}/>
            </div>
            
            At AgVal Networks, we are committed to fortifying the agricultural value chain. Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
we aim to uplift Africa's agricultural sector, one solution at a time.
        </div>
        
        <motion.div className ="card2" style ={{flex:6}}

        initial ={{marginLeft:"700px", opacity:0.2 }} animate={{marginLeft:"0px", opacity:0.8 }}
        transition={{duration:6}}
        
        ></motion.div>
       
        </div>:null}


        {width<1000?<div className ="card"  style ={{display:"flex", flexDirection:"row", marginTop:"20%",height:"fit-content",background:"rgb(9, 48, 18)", opacity:0.8, fontSize:"18px", color:"whitesmoke"}}>
        <div  style ={{flex:10, padding:"12px 12px 12px 12px"}}>

            <div>
                <BsCommand size ={50} color ='beige' style ={{opacity:0.7}}/>
            </div>
            
            At AgVal Networks, we are committed to fortifying the agricultural value chain. Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
we aim to uplift Africa's agricultural sector, one solution at a time.
        </div>
        
        {/* <motion.div className ="card2" style ={{flex:4}}

        initial ={{marginLeft:"700px", opacity:0.2 }} animate={{marginLeft:"0px", opacity:0.8 }}
        transition={{duration:6}}
        
        ></motion.div> */}
       
        </div>:null}
       
        </div>

   

         
          

     
    </div>:null}


    {width>=600 && width<1000?<div className ="lowerSection">
                    <Swiper modules={[Navigation,Pagination,A11y,Scrollbar,Autoplay]} 
                    pagination={{clickable:true}}
                    scrollbar={{draggable:true}}
                    slidesPerView={2}
                    spaceBetween={"0px"}
                    direction='left'
                    autoplay={{display:6000}}
                    
                
                    style ={{background:"rgb(20, 55, 38)",
                    "--swiper-scrollbar-bg-color": "gray",
                    "--swiper-scrollbar-drag-bg-color": "beige",
                    "--swiper-pagination-bullet-inactive-color": "white",
                    "--swiper-pagination-bullet-inactive-opacity": 0.9,
                }}                   effect='fade'
                    
                    >
                                    <SwiperSlide >
                    <div className ="mat-sm" style ={{display:"flex"}}>
                 
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
                        Meteorological Data Management

                        </div>



                        <div style ={{marginTop:"89%"}}  className ="view-more">
                             View More
                        </div>

                       

                        </div>

                        <div style ={{flex:6}}>



</div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat2-sm" style ={{display:"flex"}}>
                    {/* <div style ={{flex:6}}>

                   
                    </div> */}



                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
                        Agrometeorological Data Dissemination & Application
                        </div>

                        <div style ={{marginTop:"79%"}}  className ="view-more">
                             View More
                        </div>

                        

                        </div>

                        <div style ={{flex:6}}></div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat3" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Market Discovery for Farmers

                        </div>


                        <div style ={{marginTop:"89%"}} className ="view-more">
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>

                    
                    </div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat4" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Farm Advisory & Management
                        </div>

                        <div style ={{marginTop:"89%"}} className ="view-more">
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>

                        


                    </div>
                    </SwiperSlide>


                    <SwiperSlide >
                    <div className ="mat5" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Climate Services (by ClimApp Technologies)                        </div>

<div style ={{marginTop:"89%"}} className ="view-more">
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>





                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat6" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Consultancy & Government Collaborations
                     </div>


                     <div style ={{marginTop:"79%"}} className ="view-more">
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>


                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat7" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Support for Innovation, Technology, and Youth
                     </div>

                     <div style ={{marginTop:"89%"}} className ="view-more">
                             View More
                        </div>

                        </div>
                        <div style ={{flex:6}}>
                   
                    </div>


                        


                    </div>
                    </SwiperSlide>
                    <SwiperSlide >

                   
                    </SwiperSlide>
                     
                    </Swiper>

                    
                    
                  
                 </div>:null}
           

                 {width<600?<div className ="lowerSection">
                    <Swiper modules={[Navigation,Pagination,A11y,Scrollbar,Autoplay]} 
                    pagination={{clickable:true}}
                    scrollbar={{draggable:true}}
                    slidesPerView={1}
                    spaceBetween={"0px"}
                    autoplay={{delay:6000}}
                
                  
                    style ={{background:"rgb(20, 55, 38)",
                    "--swiper-scrollbar-bg-color": "gray",
                    "--swiper-scrollbar-drag-bg-color": "beige",
                    "--swiper-pagination-bullet-inactive-color": "white",
                    "--swiper-pagination-bullet-inactive-opacity": 0.9,
                }}
                    effect='fade'
                    
                    >
                                     <SwiperSlide >
                    <div className ="mat-sm" style ={{display:"flex"}}>
                 
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
                        Meteorological Data Management

                        </div>



                        <div style ={{marginTop:"89%"}}  className ="view-more">
                             View More
                        </div>

                       

                        </div>

                        <div style ={{flex:6}}>



</div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat2-sm" style ={{display:"flex"}}>
                    {/* <div style ={{flex:6}}>

                   
                    </div> */}



                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
                        Agrometeorological Data Dissemination & Application
                        </div>

                        <div style ={{marginTop:"79%"}}  className ="view-more">
                             View More
                        </div>

                        

                        </div>

                        <div style ={{flex:6}}></div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat3" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Market Discovery for Farmers

                        </div>


                        <div style ={{marginTop:"89%"}} className ="view-more">
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>

                    
                    </div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat4" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Farm Advisory & Management
                        </div>

                        <div style ={{marginTop:"89%"}} className ="view-more">
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>

                        


                    </div>
                    </SwiperSlide>


                    <SwiperSlide >
                    <div className ="mat5" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Climate Services (by ClimApp Technologies)                        </div>

<div style ={{marginTop:"89%"}} className ="view-more">
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>





                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat6" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Consultancy & Government Collaborations
                     </div>


                     <div style ={{marginTop:"79%"}} className ="view-more">
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>


                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat7" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Support for Innovation, Technology, and Youth
                     </div>

                     <div style ={{marginTop:"89%"}} className ="view-more">
                             View More
                        </div>

                        </div>
                        <div style ={{flex:6}}>
                   
                    </div>


                        


                    </div>
                    </SwiperSlide>
                    <SwiperSlide >

                   
                    </SwiperSlide>
                     
                    </Swiper>

                    
                    
                  
                 </div>:null}







                 {width>=1000 ?<div className ="lowerSection">
                    <Swiper modules={[Navigation,Pagination,A11y,Scrollbar,Autoplay]} 
                    pagination={{clickable:true}}
                    scrollbar={{draggable:true}}
                    slidesPerView={3}
                    spaceBetween={"0px"}
                
                    autoplay ={{delay:6000}}
                    style ={{background:"rgb(20, 55, 38)",
                    "--swiper-scrollbar-bg-color": "gray",
                    "--swiper-scrollbar-drag-bg-color": "beige",
                    "--swiper-pagination-bullet-inactive-color": "white",
                    "--swiper-pagination-bullet-inactive-opacity": 0.9,
                }}
                    effect='fade'
                    
                    >
                     <SwiperSlide >
                    <div className ="mat-sm" style ={{display:"flex"}}>
                 
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
                        Meteorological Data Management

                        </div>



                        <div style ={{marginTop:"89%"}}  className ="view-more" onClick ={()=>toService(0)}>
                             View More
                        </div>

                       

                        </div>

                        <div style ={{flex:6}}>



</div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat2-sm" style ={{display:"flex"}}>
                    {/* <div style ={{flex:6}}>

                   
                    </div> */}



                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
                        Agrometeorological Data Dissemination & Application
                        </div>

                        <div style ={{marginTop:"79%"}}  className ="view-more" onClick ={()=>toService(1)}>
                             View More
                        </div>

                        

                        </div>

                        <div style ={{flex:6}}></div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat3" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Market Discovery for Farmers

                        </div>


                        <div style ={{marginTop:"89%"}} className ="view-more" onClick ={()=>toService(2)}>
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>

                    
                    </div>

                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat4" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Farm Advisory & Management
                        </div>

                        <div style ={{marginTop:"89%"}} className ="view-more" onClick ={()=>toService(3)}>
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>

                        


                    </div>
                    </SwiperSlide>


                    <SwiperSlide >
                    <div className ="mat5" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Climate Services (by ClimApp Technologies)                        </div>

<div style ={{marginTop:"89%"}} className ="view-more" onClick ={()=>toService(4)}>
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>





                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat6" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Consultancy & Government Collaborations
                     </div>


                     <div style ={{marginTop:"79%"}} className ="view-more" onClick ={()=>toService(5)}>
                             View More
                        </div>

                        </div>

                        <div style ={{flex:6}}>
                   
                    </div>


                        


                    </div>
                    </SwiperSlide>

                    <SwiperSlide >
                    <div className ="mat7" style ={{display:"flex"}}>
                    
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
Support for Innovation, Technology, and Youth
                     </div>

                     <div style ={{marginTop:"89%"}} className ="view-more" onClick ={()=>toService(6)}>
                             View More
                        </div>

                        </div>
                        <div style ={{flex:6}}>
                   
                    </div>


                        


                    </div>
                    </SwiperSlide>
                    <SwiperSlide >

                   
                    </SwiperSlide>
                     
                    </Swiper>

                    
                    
                  
                 </div>:null}
                 <Footer/>
                 <Waves/>
                

           
        </div>
    )
}