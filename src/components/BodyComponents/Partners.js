import { BsPeople,BsPeopleFill } from "react-icons/bs";
import { partnerships } from "../../resources/info";
import Footer from "../Footer";
import {useState,useEffect} from'react'
function Partners(){
   const  data =partnerships

   const[width,setWidth] =useState(window.innerWidth)

   useEffect(()=>{
      setWidth(window.innerWidth)
   },[width])
    return (
        
        <div style ={{marginTop:"120px",fontSize:"20px",background:"#397453", height:"fit-content"}}>
             <div style ={{background:"white"}}>
<div style ={{paddingLeft:10, paddingRight:10, paddingTop:10 ,paddingBottom:10,
         marginLeft:"4%", marginRight:"4%", borderRadius:12,background:"#ffff",}}>
                               <div style ={{width:"fit-content",padding:"5px 5px 5px 5px",border:"1px lightgrey solid", borderRadius:"12px",marginTop:"40px" }}>
                                <h4 style ={{color:"green"}}>Partnerships</h4>
                               <div style ={{display:"flex",opacity:0.8 }}>
                                <div><BsPeople className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", borderRight:"1px solid green", paddingRight:"2px"}}/></div>
                                <div><BsPeopleFill className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", paddingLeft:"2px"}}/></div>
                               </div>
                               </div>
                <div className ="fs-3 content-heading "></div>

                <div style ={{fontFamily:"cursive"}}>
                    {/* <p style ={{fontFamily:"cursive"}}>{data.Introduction}</p> */}
                    {data.Introduction.map((paragraph, key)=>{
                        
                        
                       return  key===0?<strong><div class ="mb-2 " style ={{color:"#397453"}}>{paragraph.paragraph}</div></strong>: <div class ="mb-2">{paragraph.paragraph}</div>
                    })}
                </div>


                {/* <div class ="fs-3 mt-3 " style ={{fontFamily:"cursive", marginLeft:"%",color:"darkgreen",width:"fit-content"}}> Our Services are outlined in detail below</div> */}



        </div></div>

        <div>

        <div style={{borderBottom:"1px solid darkgrey"}}>
        

        {data.partners.map((partner,key) =>{return <div  style={{background:"#397453",color:"black"}}>
           <div className ="mb-2 mt-2" style ={{border:"1px solid lightgrey", padding:"10px 10px 10px 10px", borderRadius:"12px",marginRight:"30px",marginLeft:"3%",marginRight:"3%",background:"#ffff"}}>
           <div className ="mb-2" style ={{background:"green", borderRadius:"50%", padding:"6px 15px 6px 15px",color:"#ffff",width:"fit-content",opacity:0.7}}>{key+1}</div>
            <div style ={{display:"flex", flexWrap:"wrap"}}>
                <div className ="mb-2" style ={{padding:"10px 10px 10px 10px", borderRadius:"12px", border:"1px solid lightgrey",width:"fit-content", height:"fit-content", background:"lightgrey"}}>
                    <img src ={partner.logo} style ={{width:"180px", height:"180px",borderRadius:"12px" }} alt ="logo"/>
                    
                </div>
            <div style ={{marginLeft:"50px"}}>
            {width>700?<div style ={{padding:"10px 10px 10px 10px", borderRadius:"12px", border:"2px dashed lightgrey",opacity:0.7}}>
            <img src ="/partnerships.jpeg" style ={{width:"50px", height:"50px"}} alt ="logo"></img>
            </div>:null}
            </div>
            </div> 

           <span className ="fs-2" style ={{color:"darkgreen"}}> <span style ={{color:"darkgreen", marginLeft:"",borderBottom:"1px solid goldenrod"}}>{partner.partner}</span>
           </span>

           <div className = "" style ={{fontFamily:"cursive"}}>
               <p><span className ="fs-4" style ={{color:"goldenrod"}}>Collaborative Endeavor:</span> {partner.endeavor}</p>
               <p>{partner.detail}</p>
            </div></div>
         
        </div>})}

    
        </div>
            
        </div>
        <Footer/>

        </div>
    )

}


export default Partners;