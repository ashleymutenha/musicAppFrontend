
import {BsCompass,  BsMotherboard, BsMotherboardFill} from 'react-icons/bs'

import {BsGeo} from 'react-icons/bs'
import {aboutInfo} from '../../resources/info.js'
import { useState } from 'react'
import Footer from '../Footer.js'

function AboutUs(){

    const theme  = localStorage.getItem('theme')
  
   const data = aboutInfo

   const[viewItems,changeItems] =useState(true)

   const changeViewItems =()=>{
    changeItems(!viewItems)
   }
 

     return(
        <div style ={{marginTop:"120px",fontSize:"20px", background:"#ffff"}}>

            {/* light theme */}
        
         <div>
            <div style ={{background:"#ffff"}}>
            <div class ="mb-2" style ={{width:"fit-content",padding:"5px 5px 5px 5px",border:"1px lightgrey solid", borderRadius:"12px",marginLeft:"5%" ,marginTop:"40px"}}>
                                <h4 style ={{color:"green"}}>About Us</h4>
                               <div style ={{display:"flex",opacity:0.8 }}>
                                <div><BsMotherboard className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", borderRight:"1px solid green", paddingRight:"8px"}}/></div>
                                <div><BsMotherboardFill className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod",paddingLeft:"5px"}}/></div>
                               </div>
                               </div>
        <div style ={{paddingLeft:10, paddingRight:10, paddingTop:10 ,paddingBottom:10,
        border: "1px solid lightgrey", marginLeft:"4%", marginRight:"4%", borderRadius:12}}>
                               {/* <BsFillBoxSeamFill className ="fs-1 mt-1"   style ={{borderRadius:"",color:"darkgreen", marginLeft:"80%", opacity:0.5}}/> */}
                              <img src ="/logo.png" style ={{height:60 , width:"auto", marginLeft:"200px", opacity:0.8}}></img>
                <div className ="fs-3 content-heading ">Company History</div>

                <div>
                    <p style ={{fontFamily:"cursive"}}>{data.companyHistory}</p>
                </div>


        </div>
        
        <div style={{borderBottom:"1px solid lightgrey"}}>
        <ul className ="list-group list-group-flush bg-white home-content">
       

        {viewItems ===true ||viewItems ===false?<li className ="list-group-item">
           <span className ="home-span">
            <img src ="/DrMagadzire.jpg" alt ="person" style={{height:"99px",width:"auto",background:"transparent",borderRadius:"50%"}}/>
          
           </span>
           <span className ="fs-3 content-heading body-heading">Founding Director's Message</span>

           <div className = "home-description">
               <p>"<span style ={{fontStyle:"italic"}}>{data.directorMessage.message}"</span> {data.directorMessage.director}</p>
            </div>
         
        </li>:null}

        {viewItems ===true ||viewItems ===false?<li className ="list-group-item">
           <span className ="home-span">
           <img src ="/botswana.png"alt ="flag"  style={{height:"99px",width:"99px",background:"transparent",borderRadius:"50%"}}/></span>
           <span className ="fs-3 content-heading body-heading">Agval Networks in Botswana</span>

           <div className = "home-description">
               <p style={{fontFamily:"cursive"}}>{data.botswana}</p>
            </div>
         
            {/* {viewItems ===true ?<span className ="rounded-pill btn-more mb-1 mt-2" onClick={changeViewItems}>View More  <BsArrowDownCircle/></span>:null} */}
        </li>:null}
        </ul></div>
        </div>

        <div style ={{background:"#ffff"}}>
        <div style ={{display:"flex"}}>
         <div style ={{}}>
        <div  style ={{paddingLeft:10, paddingRight:10, paddingTop:10 ,paddingBottom:10,
        border: "1px solid grey", marginLeft:"2%", marginRight:"3%", borderRadius:12,height:"fit-content",marginTop:10}}>
                               {/* <BsFillBoxSeamFill className ="fs-1 mt-1"   style ={{borderRadius:"",color:"green", marginLeft:"80%"}}/> */}

                               <div className ="fs-3 content-heading ">ClimApp Technologies Division</div>

                              <div className = "">
                                 <p>{data.climApp}</p>
                              </div>

        </div>

        <div  style ={{paddingLeft:10, paddingRight:10, paddingTop:10 ,paddingBottom:10,
        border: "1px solid grey", marginLeft:"2%", marginRight:"3%",marginTop:"1%", borderRadius:12,height:"fit-content"}}>
                               <BsCompass className ="fs-1 mt-1"   style ={{borderRadius:"",color:"green", marginLeft:"80%"}}/>

                               <div className ="fs-3 content-heading">A Roadmap to Innovation: AgVal's Strategic Direction</div>

                                 <div className = "">
                                    <p>{data.roadMaptoInnovation}</p>
                                 </div>

        </div>
        
        </div>


        <div className ="mb-"  style ={{paddingLeft:10, paddingRight:10, paddingTop:10 ,paddingBottom:10,
        border: "1px solid grey", marginLeft:"1%", marginRight:"2%", borderRadius:12, marginTop:10}}>
                               <BsGeo className ="fs-1 mt-1"   style ={{borderRadius:"",color:"darkgreen", marginLeft:"80%"}}/>
                               <div className ="fs-3 content-heading ">Our Offices</div>

           

<div className = "">
<div className ="mb- text-muted fs-4 "><span className ="home-subheading">Gaborone Office</span>
 </div>
    <p>{data.offices.Gaborone}</p>
 </div>

 <div className = "">
<div className ="mb-1 text-muted fs-4 "><span className ="home-subheading">Additional Offices</span>
 </div>
    <p>{data.offices.additionalOffices}</p>
 </div>

        </div>
        </div>

        </div>

        <div style={{background:"hsl(142, 17%, 87%)"}}>
        <ul className ="list-group list-group-flush bg-white home-content">

        <li className ="list-group-item" style={{background:"hsl(142, 17%, 87%)",color:"black", borderBottom:"1px solid green"}}>
           <span className ="home-span">           
            <img src ="/DrMagadzire.jpg" alt ="person" style={{height:"99px",width:"auto",background:"transparent",borderRadius:"50%"}}/>
            </span>
           <span className ="fs-3 content-heading body-heading ">Director Profile</span>

           <div className = "home-description">
               <p>{data.directorProfile}</p>
            </div>
         
        </li>

        <li className ="list-group-item" style ={{background:"hsl(142, 17%, 87%)", color:"black"}}>
          
           <span className ="fs-3 content-heading">Our Current and Future Plans: </span>

           <div className = "">
               <p>{data.plans.message}</p>
            </div>

            <div className = "">
               <p>{data.plans.conclusion}</p>
            </div>
            {/* {viewItems ===false ?<span className ="rounded-pill btn-more mb-1 mt-2" onClick={changeViewItems}>View Less   <BsArrowUpCircle/></span>:null} */}

        </li>


        </ul>
      

        </div>
        <div>
        <Footer/></div>

















</div>

   </div>
    )
}

export default AboutUs;