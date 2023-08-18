import {BsInfoCircle} from 'react-icons/bs'
import {homeInfo} from '../../resources/info.js'

import {BsBrightnessAltHigh,BsArrowDownCircle,BsArrowUpCircle,BsEar} from 'react-icons/bs'
import {useState,useEffect} from 'react'


import { useLayoutEffect } from 'react'
function Home(){

   const data = homeInfo
   const [missionAndVision,changeHeight]=useState(false)


   const theme  = localStorage.getItem('theme')

   
   

   const toggleMission=() =>{
      changeHeight(!missionAndVision);
   }


  


    return (
        <div>
         {/* home Light theme */}
        {theme ==='light'|| theme===null?<ul className ="list-group list-group-flush bg-white home-content" style={{borderRadius:"12px"}}>
        <li className ="list-group-item" >
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsInfoCircle className ="icon"/></span></span>
           <span className ="fs-3 content-heading body-heading">Introduction</span>


          

           <div className = "home-description">

             {data.Introduction}
            </div>
        </li>

        <li className ="list-group-item mt-1">
            
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsBrightnessAltHigh className ="icon"/></span></span>
           <span className ="fs-3 content-heading body-heading">Vision and Mission</span>

           {missionAndVision ===false? <div className = "home-description mb-1">
            <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading">Vision</span>
            </div>

              <div className ="missionInfo">
             {data.Vision}
             </div>
            </div>:null}

           


            
           <div className = "home-description mb-1">
            <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading">Mission</span>
            </div>
            {missionAndVision ===false?<div className ="missionInfo" >
             {data.Mission[0].paragraph}
             </div>:null}

             {missionAndVision ===true ? <div>{data.Mission.map((_data,key)=>{

             

               if (typeof(_data.paragraph)!=='string'){

                return <p id ={key} style ={{marginLeft:"10px"}}>

              

                
                <strong>{_data.paragraph.keyPoint}</strong> {_data.paragraph.explanation}</p>
             }

             if (typeof(_data.paragraph)==='string') 
             {

                return <p id ={key}>

               

                
                {_data.paragraph}</p>
             }
            })}
             </div>:null}
               

            </div>

            {missionAndVision ===false?<span className ="rounded-pill btn-more mb-1 mt-2" onClick={toggleMission}>View More  <BsArrowDownCircle/></span>:null}

            {missionAndVision===true ?<span className ="rounded-pill btn-more mb-1 mt-2" onClick={toggleMission}>View Less  <BsArrowUpCircle/></span>:null}

        </li>


 
        <li className ="list-group-item mt-1">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsEar className ="icon"/></span></span>
       <span className ="fs-3 content-heading body-heading">Overview of Services</span>
        </li> 
    </ul>:null}
  

  {/* home Dark theme */}

         {theme==='dark'?<ul className ="list-group list-group-flush dark-theme home-content" style={{borderRadius:"12px"}}>
               <li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
                  <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
                  ><BsInfoCircle className =""/></span></span>
                  <span className ="fs-3 content-heading-dark body-heading">Introduction</span>

                  <div className = "home-description">
                     {data.Introduction}
                     </div>
               </li>

               <li className ="list-group-item mt-1" style ={{background: "rgb(51, 50, 50)",color:"#ffff"}}>
                     
                  <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
                  ><BsBrightnessAltHigh className =""/></span></span>
                  <span className ="fs-3 content-heading-dark body-heading">Vision and Mission</span>

                  {missionAndVision ===false? <div className = "home-description mb-1">
                     <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading-dark">Vision</span>
                     </div>

                     <div className ="missionInfo">
                     {data.Vision}
                     </div>
                     </div>:null}

                  


            
           <div className = "home-description mb-1">
            <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading-dark">Mission</span>
            </div>
            {missionAndVision ===false?<div className ="missionInfo" >
             {data.Mission[0].paragraph}
             </div>:null}

             {missionAndVision ===true ? <div>{data.Mission.map((_data,key)=>{

             

               if (typeof(_data.paragraph)!=='string'){
                return <p key ={key} style ={{marginLeft:"10px"}}>
                
                <strong>{_data.paragraph.keyPoint}</strong> {_data.paragraph.explanation}</p>
             }

             if (typeof(_data.paragraph)==='string') 
             {
                return <p key ={key}>
                
                {_data.paragraph}</p>
             }
            })}
             </div>:null}
               

            </div>

            {missionAndVision ===false?<span className ="rounded-pill btn-more-dark mb-1 mt-2" onClick={toggleMission}>View More  <BsArrowDownCircle/></span>:null}

            {missionAndVision===true ?<span className ="rounded-pill btn-more-dark mb-1 mt-2" onClick={toggleMission}>View Less  <BsArrowUpCircle/></span>:null}

        </li>

        <li className ="list-group-item mt-1" style ={{background: "rgb(51, 50, 50)"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsEar className =""/></span></span>
       <span className ="fs-3 content-heading-dark body-heading">Overview of Services</span>
        </li> 
    </ul>:null}</div>
  
    )
}

export default Home;