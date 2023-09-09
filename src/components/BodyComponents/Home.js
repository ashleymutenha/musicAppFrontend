import {BsArrowDownCircle,BsArrowUpCircle
  , BsFacebook,BsGoogle,BsMotherboardFill, BsStars, BsSun,BsLinkedin, BsMagic,BsDot } from "react-icons/bs"
import Carousel  from 'react-bootstrap/Carousel'
import { servicePictures } from "../../resources/info"
import { homeInfo } from "../../resources/info"
import { useState,useEffect } from "react"
import Footer from "../Footer.js"

function Home(){
   const info = servicePictures
   const data = homeInfo
   const [missionAndVision,changeHeight]=useState(false)

   const[width,setWidth] =useState(window.innerWidth)

   useEffect(()=>{
      setWidth(window.innerWidth) 
   },[width])


   const toggleMission=() =>{
    changeHeight(!missionAndVision);
 }

    return (
        <div style ={{width:width}}>
        <div style ={{marginTop:"120px",height:"fit-content",width:width, position:"absolute", background:""}} className ="content" >
            <div>

            
           
      
        <div>
        <div style ={{borderBottom:"1px solid grey", }}>
        <Carousel style ={{borderRadius:"13px",background:"#397453", marginTop:"1%",marginLeft:"3%"}} controls ={false} indicators ={false} fade ={false}>
        { info.data.map((data)=>
        {
          return(
            <Carousel.Item Interval ={100}  style={{opacity:1, transition:"opacity 0.5s !important"}}>
          <div style ={{display:"flex",marginLeft:"3%", marginTop:"1%",background:"rgb(243, 240, 243)",width:"fit-content", height:"300px",borderRadius:"12px"}}>
             <div>
             <img src ={data.image} alt ="logo" style ={{height:"310px",width:"600px",
             borderTopLeftRadius:"13px", borderBottomLeftRadius:"13px"}} class ="corousel-item"/>

             </div>
             <div style ={{borderRadius:"13px",width:"600px"}}>
             {/* <button className ="btn btn-secondary rounded-pill mt-2" style ={{marginLeft:"10px",position:"fixed"}}>Learn More <BsArrowRight/></button> */}
              <div className ="btn-detail" style ={{marginTop:"6px",}}>
                <a href ="#" style ={{textDecoration:"none",color:"#ffff"}}>Learn More</a>
              </div>
              <div>
               <BsMotherboardFill className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", marginLeft:"80%", opacity:0.5}}/>
              </div>
              <div style ={{marginTop:"%",width:"410px",borderRadius:"12px"}}>

                 <div>
                <div className ="text-muted " style ={{fontFamily:'cursive' ,marginTop:"2px",fontSize:"20px", marginLeft:"10%",borderRadius:"12px"}}>{data.description}</div>
                <div>
                </div>
            </div>
              </div>
             </div>

          </div>
          </Carousel.Item>)})}

      
          
          </Carousel>
          {/* <div style ={{marginLeft:"40%", paddingTop:0}}><BsDot style ={{color:"#ffff"}} className ="fs-1"/>
          <BsDot style ={{color:"#ffff"}} className ="fs-1"/>
          </div> */}

          
          
        
                
         

        </div>
    
        <div style ={{display:"flex"}}>
        <div style ={{borderRight:"1px solid grey",paddingRight:"5%",paddingTop:"3%"}}>
        <div style = {{border:"1px solid lightgrey" ,
         width:"590px", height:"200px", marginLeft:"7%",padding:"10px 10px 10px 10px",
          borderRadius:"12px", background:"hsl(129, 29%, 37%)", color:"white",fontFamily:'cursive' ,marginTop:"1%",fontSize:"20px", position:""}}>
         <div>
         <BsStars className ="fs-1 mt-1"   style ={{borderRadius:"",color:"darkgreen", marginLeft:"80%"}}/>
         </div>
          {homeInfo.Introduction}
           </div>

           </div>


           <div style ={{marginLeft:"4%"}}>

<span className =""></span>

     <span className="fs-3" style ={{color:"white", borderBottom:"1px solid lightgrey"}}>
     Meet Our Executive Team</span>
     <div style ={{display:"flex"}}>
     <div style ={{position:"relative",border:"1px solid grey",width:"250px",paddingBottom:"10px",
    paddingTop:"10px", paddingLeft:"10px",paddingRight:"10px", borderRadius:"12px", background:"hsl(135, 19%, 42%)",
    marginTop:"12px",marginBottom:"5px"}}>
     <img src ="/DrMagadzire.jpg" alt ="person" style={{height:"200px",width:"200px",background:"transparent",borderRadius:"50%"}}/>
     <div>

        <div class ="" style ={{fontSize:"18px", color:"#ffff"}}>Dr Tamuka Magadzire</div>
     </div>
     <div class ="mt-1"><BsFacebook className ="fs-4" style ={{color:"lightgrey"}}/> <BsGoogle className ="fs-4 " style ={{color:"lightgrey"}}/>
      <BsLinkedin className ="fs-4" style ={{color:"lightgrey",marginLeft:"4px"}}/></div>
     </div>

     <div style ={{position:"relative",border:"1px solid grey",width:"250px",paddingBottom:"10px",
    paddingTop:"10px", paddingLeft:"10px",paddingRight:"10px", borderRadius:"12px", background:"hsl(135, 19%, 42%)",
    marginTop:"12px", marginLeft:"3%",marginBottom:"5px"}}>
     <img src ="/DrMbangiwa.jpg" alt ="person" style={{height:"200px",width:"200px",background:"transparent",borderRadius:"50%"}}/>
     <div>

        <div class ="" style ={{fontSize:"18px", color:"#ffff"}}>Dr. Nicholas Mbangiwa</div>
     </div>
     <div class ="mt-1"><BsFacebook className ="fs-4" style ={{color:"lightgrey"}}/> <BsGoogle className ="fs-4 " style ={{color:"lightgrey"}}/>
      <BsLinkedin className ="fs-4" style ={{color:"lightgrey",marginLeft:"4px"}}/></div>
     </div>
     
     
     </div>
</div>
           </div>

           </div> 
        </div>
        </div>
         <div style ={{display:"flex", marginLeft:"4%"}} className ="mb-3">
        <div style = {{border:"1px solid darkgreen" , width:"600px", height:"fit-content", marginLeft:"1%",padding:"10px 10px 10px 10px",
          borderRadius:"12px" ,marginTop:"890px",fontSize:"20px"}}>
                   <span> <BsMagic className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", marginLeft:"2%",opacity:"0.6"}}/>
                    <p className ="fs-1 text-success"> Mission</p></span>

                    {missionAndVision ===false?<div className ="missionInfo" style ={{fontFamily:"cursive"}} >
             {data.Mission[0].paragraph}
             </div>:null}

             {missionAndVision ===true ? <div style ={{fontFamily:"cursive"}}>{data.Mission.map((_data,key)=>{

             

               if (typeof(_data.paragraph)!=='string'){

                return <p id ={key} style ={{marginLeft:"10px"}}>

              

                
                <strong style ={{color:"darkgreen"}}>{_data.paragraph.keyPoint}</strong> {_data.paragraph.explanation}</p>
             }

             if (typeof(_data.paragraph)==='string') 
             {

                return <p id ={key}>

               

                
                {_data.paragraph}</p>
             }
             return null
            })}
             </div>:null}
                    
             {missionAndVision ===false?<span className ="rounded-pill btn btn mb-1 mt-2" onClick={toggleMission} style ={{background:"goldenrod"}}>View More  <BsArrowDownCircle/></span>:null}

            {missionAndVision===true ?<span className ="rounded-pill btn btn mb-1 mt-2" onClick={toggleMission} style ={{background:"goldenrod"}}>View Less  <BsArrowUpCircle/></span>:null}
        </div>



        <div style = {{border:"1px solid darkgreen" , width:"600px", height:"fit-content", marginLeft:"1%",padding:"10px 10px 10px 10px",
          borderRadius:"12px" ,marginTop:"890px",fontSize:"20px"}}>
                   <span> <BsSun className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", marginLeft:"2%",opacity:"0.6"}}/>
                    <p className ="fs-1 text-success"> Vision</p></span>

                    <div style ={{fontFamily:"cursive"}}>
                    {data.Vision}
                    </div>

                    
        </div>
        
        
        </div>
        <Footer/>
        
        </div>

        
    )
}

export default Home