import {BsInfoCircle} from 'react-icons/bs'
import {homeInfo} from '../../resources/info.js'
<<<<<<< HEAD
import {BsBrightnessAltHigh,BsArrowDownCircle,BsArrowUpCircle} from 'react-icons/bs'
import {useState,useEffect} from 'react'
=======
import {BsBrightnessAltHigh,BsArrowDownCircle,BsArrowUpCircle,BsEar} from 'react-icons/bs'
import {useState,useEffect} from 'react'
import { useLayoutEffect } from 'react'
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
function Home(){

   const data = homeInfo
   const [missionAndVision,changeHeight]=useState(false)
<<<<<<< HEAD
=======

   const theme  = localStorage.getItem('theme')
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
   
   

   const toggleMission=() =>{
      changeHeight(!missionAndVision);
   }

<<<<<<< HEAD
    return (
     
        <ul className ="list-group list-group-flush bg-white home-content" >
        <li className ="list-group-item">
=======

    return (
        <div>
         {/* home Light theme */}
        {theme ==='light'|| theme===null?<ul className ="list-group list-group-flush bg-white home-content">
        <li className ="list-group-item" >
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsInfoCircle className ="icon"/></span></span>
           <span className ="fs-3 content-heading body-heading">Introduction</span>

<<<<<<< HEAD
           <div class = "home-description">
=======
           <div className = "home-description">
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
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
<<<<<<< HEAD
                return <p id ={key} style ={{marginLeft:"10px"}}>
=======
                return <p key ={key} style ={{marginLeft:"10px"}}>
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
                
                <strong>{_data.paragraph.keyPoint}</strong> {_data.paragraph.explanation}</p>
             }

             if (typeof(_data.paragraph)==='string') 
             {
<<<<<<< HEAD
                return <p id ={key}>
=======
                return <p key ={key}>
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
                
                {_data.paragraph}</p>
             }
            })}
             </div>:null}
               

            </div>

            {missionAndVision ===false?<span className ="rounded-pill btn-more mb-1 mt-2" onClick={toggleMission}>View More  <BsArrowDownCircle/></span>:null}

            {missionAndVision===true ?<span className ="rounded-pill btn-more mb-1 mt-2" onClick={toggleMission}>View Less  <BsArrowUpCircle/></span>:null}

        </li>

<<<<<<< HEAD
        {/* <li className ="list-group-item mt-1">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsEye className ="icon"/></span></span>
       <span className ="fs-3 content-heading body-heading">Overview of Services</span>
        </li>  */}
    </ul>
=======
        <li className ="list-group-item mt-1">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsEar className ="icon"/></span></span>
       <span className ="fs-3 content-heading body-heading">Overview of Services</span>
        </li> 
    </ul>:null}
  

  {/* home Dark theme */}

         {theme==='dark'?<ul className ="list-group list-group-flush dark-theme home-content" >
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
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
  
    )
}

export default Home;