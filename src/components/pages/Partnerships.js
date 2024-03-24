import Header from "../Header.js"
import Waves from "../bodyComponents/Waves.js"
import Footer from "../bodyComponents/footer.js"
import { partnerships } from "../../resources/info";

import {motion} from "framer-motion";


import '../css/partnerships.css'
import { useState } from "react";
export default function Partnerships(){
    
    const  data =partnerships
    const[width, setWidth] =useState(window.innerWidth)


    return(
        <div>
            <Header/>
            {width>1000?<div className ="__upperContent">

            {/* <div  style ={{flex:2}}> 
                   
                </div> */}

                <div   className ="__decorator" style ={{flex:10}}> 
                  



                        <div className ="__firstElement" style ={{flex:8}}>

                       
                        </div>
                        <div className ="focusPoint" style ={{flex:6}}>

                        <div className = "___element" style ={{flex:6, marginTop:"10%", marginRight:"5%"}}>
                      <div>
                     
                      </div>
                        <span>Forging Strong Alliances for a Sustainable Agricultural Future. </span>

                   
                    </div>
                        </div>



                 
                </div>
           

                    <div style ={{flex:3}}>

                    <div  className ="card" style ={{display:"flex", marginBottom:"30%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> Partnerships </div>
                      
                    </div>


                    </div>

            </div>:null}


            {width<=1000?<div className ="__upperContentsm">

            <div className = "___element-sm" style ={{flex:6, marginTop:"10%"}}>
                      <div>
                     
                      </div>
                        <span>Forging Strong Alliances for a Sustainable Agricultural Future. </span>

                   
                    </div>


            </div>:null}

            <motion.div className ="_lowerContent" >
             <div className ="__left" style ={{flex:5}}>
            <div  style ={{fontSize:"18px",  marginTop:"12%", marginLeft:"13px", marginRight:"13px", marginBottom:"13px"}}>
                <div style ={{fontSize:"30px", textAlign:"center"}}>
                    <span style ={{borderBottom:"2px solid goldenrod"}}>Power in Collaboration</span>
                </div>
            At AgVal Networks, we deeply value the power of collaboration. 
            We believe that by combining our strengths with those of our esteemed partners, 
            we can address some of the most pressing challenges facing the agricultural sector in Africa. 
            Our partners play an integral role in our quest to deliver innovative, impactful solutions for the agricultural value chain. 
            Together, we are shaping the future of agriculture, ensuring it's resilient, sustainable, and prosperous for all stakeholders.
            </div>
            </div>

            {width>1000?<div className ="pictureSlide" style ={{flex:8}}>

            </div>:null}
            </motion.div>

            <motion.div  className ="____lowerContent" initial ={{opacity:0, }} whileInView={{opacity:1 }}
                transition={{duration:3}} >
                <div style ={{borderRadius:"50%", width:"40px",height:"40px", background:'#d8e68b', padding:"8px 8px 8px 8px", opacity:0.6}}>
            
                </div>
                <motion.div style ={{display:"flex", flexWrap:"wrap" }} initial ={{ marginTop:"20%",opacity:0}} animate={{marginTop:"0px"}} whileInView={{opacity:1}}>
            {data.partners.map((partner,key) =>{return <div  style={{color:"black", flex:6, 
            width:"fit-content",marginTop:"20px",borderBottomRightRadius:"30px",marginBottom:"1%",  }}>
           <div className ="mb-2" style ={{borderRadius:"12px",marginRight:"2%", fontSize:"18px"
         }}>
            {width>1000?<div >
                

                <div className ="" style ={{flex: 10,background:"whitesmoke" ,marginTop:0,padding:"12px",borderRadius:"29px" , height:"700px"}}>

                <div style ={{flex:1, display:"flex"}} >
                <div style ={{flex:8}}></div>

                    <div style ={{marginLeft:"12px",}}>
                  <img src ={partner.logo} style ={{ width:"200px", height:"200px",
                   borderRadius:"16px",marginBottom:"3%" }}/>

                   </div>
                   
              

                   
               
                </div>
                <span  style ={{fontSize:"30px"}}> <span style ={{ marginLeft:"",borderBottom:"2px solid green"}}>{partner.partner}</span>
           </span>

           <div className = "" >
               <p style ={{fontWeight:"bold", fontSize:"23px"}}><span style ={{color:"darkgreen"}}>Collaborative Endeavor:</span> {partner.endeavor}</p>
               <p>{partner.detail}</p>
            </div>
                </div>
        
            </div>:null}



            {width<=1000?<div >
                

                <div className ="" style ={{flex: 10,background:"whitesmoke" ,marginTop:0,padding:"12px",borderTopLeftRadius:"50px", borderBottomRightRadius:"50px"}}>

                <div style ={{flex:1, display:"flex"}} >
                <div style ={{flex:8}}></div>

                    <div style ={{marginLeft:"12px",}}>
                  <img src ={partner.logo} style ={{ width:"200px", height:"200px", opacity:0.9,
                   borderTopLeftRadius:"30px", borderBottomRightRadius:"30px",marginBottom:"3%" }}/>

                   </div>
                   
              

                   
               
                </div>
                <span  style ={{fontSize:"30px"}}> <span style ={{ marginLeft:"",borderBottom:"2px solid green"}}>{partner.partner}</span>
           </span>

           <div className = "" >
               <p style ={{fontWeight:"bold", fontSize:"23px"}}><span style ={{color:"darkgreen"}}>Collaborative Endeavor:</span> {partner.endeavor}</p>
               <p>{partner.detail}</p>
            </div>
                </div>
        
            </div>:null}

          </div>
         
        </div>})}


            </motion.div></motion.div>
             <Footer/>
            <Waves/>
        </div>
    )
}