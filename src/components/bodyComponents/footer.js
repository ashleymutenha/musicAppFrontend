import { useState } from 'react'
import '../css/footer.css'
import {BsPhoneFill,BsQrCode, BsNewspaper, BsPhoneVibrateFill, 
   BsPencil, BsGooglePlay, BsTabletLandscapeFill, BsX, BsXOctagon, BsGoogle, BsMapFill, BsPinAngleFill, BsGlobe, BsPhone, BsPinMap, BsFillPinMapFill} from 'react-icons/bs'

import Waves from './Waves'

import {motion} from "framer-motion";

export default function Footer(){
   const [showMore, setMore] = useState(false)
    return(
        <div>

{showMore===false?<div  onClick={()=>setMore(true)} id ="moreInfo" style ={{fontSize:"26px", color:"white", textAlign:"center", fontWeight:"bold", marginTop:"20px"}}>Want More Info 
          
          </div>:null}

          {showMore===true?<div className ="footer">
       
          <div style ={{display:"flex"}}>
          
          <div className ="footer-decorator" id ="on-hover" style ={{flex:6}}>

            <div className ="upperSection icon1">

            </div>

            <div className ="upperSection icon4">

            </div>

            <div className ="upperSection icon6">

            </div>


            <div className ="upperSection icon2">

            </div>

            <div className ="upperSection icon5">

            </div>


            <div className ="upperSection icon3">

            </div></div>

            <div style ={{flex:3}}
             
            > 
               <motion.div class ="__icon-container"
               initial ={{marginTop:"200px", marginRight:"200px"}} animate={{marginTop:"0px",marginRight:"0px" }}
               transition={{duration:1}}
                onClick={()=>setMore(false)}>
                <BsX color='#ffff' size ={40}/>
               </motion.div>
            </div>

           </div>
           {/* <div style ={{display:"flex", width:"fit-content"}}>
                <div class ="footer-Heading" style ={{marginTop:12, color:"#ffff",borderBottom:"2px solid lightblue", fontSize:45,color:"white"}}>Details</div>
                <div><BsPencil class ="pen" size ={30} color ="darkgreen"/></div>
                </div> */}


            <div className='container' id ="on-hover" style ={{width:"fit-content",marginTop:"12px",padding:"12px 12px 12px 12px",borderRadius:"12px", marginTop:"40px"}}>
            <div className ="footer-card ">
                 <div className ="_icon-container" style ={{marginTop:"12px", marginBottom:"12px"}}>
                <BsPhone color='white' size ={50} opacity={0.8}/>
                </div>

                <div style ={{display:"flex", width:"fit-content"}}>
                <div  style ={{marginTop:12, color:"#ffff",borderBottom:"2px solid lightblue", fontSize:30,color:"white"}}>Contact Details</div>
                </div>

                {/* <div class ="footer-Heading" style ={{marginTop:12, color:"#ffff", fontSize:30, borderBottom:"2px solid goldenrod", color:"darkgreen", width:"fit-content"}}>Contact Details</div> */}

                <div style ={{padding:"12px 12px 12px 12px"}}>
                 <span className ="phoneNumber">+267-7524-8833</span>
\                </div>

            </div>

            <div className ="footer-card card1">
                 <div className ="_icon-container" style ={{marginTop:"12px", marginBottom:"12px"}}>
                <BsFillPinMapFill color='white' size ={50} opacity={0.8}/>
                </div>

                <div style ={{display:"flex", width:"fit-content"}}>
                <div  style ={{marginTop:12, color:"#ffff",borderBottom:"2px solid lightblue", fontSize:30,color:"white"}}>Directions</div>
                </div>

                {/* <div class ="footer-Heading" style ={{marginTop:12, color:"#ffff", fontSize:30, borderBottom:"2px solid goldenrod", color:"darkgreen", width:"fit-content"}}>Contact Details</div> */}

                <div style ={{padding:"12px 12px 12px 12px"}}>
                 <span className ="phoneNumber">Plot 131 Independence Avenue, Kohinoor Office Park – Unit 7B, Gaborone ,Botswana</span>
                 
                </div>

            </div>

         

           


</div>



{/* <div className='container' id ="on-hover" style ={{width:"fit-content",
marginTop:"12px",borderRadius:"20px"}}>
            <div className ="footer-card ">
                 <div className ="_icon-container" style ={{marginTop:"12px", marginBottom:"12px"}}>
                <BsMapFill color='white' size ={50} opacity={0.8}/>
                </div>

                <div style ={{display:"flex", width:"fit-content"}}>
                <div  style ={{marginTop:12, color:"#ffff",borderBottom:"2px solid lightblue", fontSize:30,color:"white"}}>Directions</div>
                </div>


                <div style ={{padding:"12px 12px 12px 12px"}}>
                 <span className ="phoneNumber">C 32 Dandamera Mazowe</span>
                 
                </div>

            </div>

            

           


</div> */}
        </div>:null}
        
        </div>
    )
}