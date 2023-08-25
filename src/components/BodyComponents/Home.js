import {BsInfoCircle} from 'react-icons/bs'
import {homeInfo} from '../../resources/info.js'
import Carousel  from 'react-bootstrap/Carousel'
import {BsBrightnessAltHigh,BsArrowDownCircle,BsArrowUpCircle,BsEar} from 'react-icons/bs'
import {useState,} from 'react'


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
        <li className ="list-group-item mt-1" >
           <span className ="home-span"><span className ="fs-5  btnicon"
           ><BsEar className =""/></span></span>
       <span className ="fs-3 content-heading-dark body-heading">Overview of Services</span>
             <div>
            <Carousel style ={{marginLeft:"10%",width:"53rem",borderRadius:"13px"}} className ="carousel-light">
            <Carousel.Item Interval ={200} >
                  <img src ="/servicesImages/IMG-20230822-WA0000.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="text-white mt-2 mb-2 fs-3" style ={{marginLeft:"50%",marginRight:"50%"}}>Climate Services</p>
                      </Carousel.Caption>
                  </Carousel.Item>
               <Carousel.Item Interval ={500} >
                  <img src ="/servicesImages/goats.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="corousel-text mt-2 mb-2 fs-3" style ={{marginLeft:"50%",marginRight:"50%"}}>Animal Husbundry</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item Interval ={500}>
                  <img src ="/servicesImages/farmer.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="corousel-text mt-2 mb-2 fs-4" style ={{marginLeft:"50%",marginRight:"50%"}}>Horticulture</p>
                      </Carousel.Caption>                  </Carousel.Item>

                      <Carousel.Item Interval ={500}>
                  <img src ="/servicesImages/crops.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="text-white mt-2 mb-2 fs-4" style ={{marginLeft:"50%",marginRight:"50%"}}>Crop Cultivation</p>
                      </Carousel.Caption>                  </Carousel.Item>

                      <Carousel.Item Interval ={500}>
                  <img src ="/servicesImages/solarPanel.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="text-white mt-2 mb-2 fs-4" style ={{marginLeft:"50%",marginRight:"50%"}}>Crop Cultivation</p>
                      </Carousel.Caption>                  </Carousel.Item>
            </Carousel>
         </div>
        </li> 
        
        
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
             return null
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
              

         <li className ="list-group-item mt-1"  style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  dark-btnicon"
           ><BsEar className =""/></span></span>
       <span className ="fs-3 content-heading-dark body-heading">Overview of Services </span>
             <div>
            <Carousel style ={{marginLeft:"10%",width:"53rem",borderRadius:"13px"}} className ="carousel">
            <Carousel.Item Interval ={200} >
                  <img src ="/servicesImages/IMG-20230822-WA0000.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="text-white mt-2 mb-2 fs-3" style ={{marginLeft:"50%",marginRight:"50%"}}>Climate Services</p>
                      </Carousel.Caption>
                  </Carousel.Item>
               <Carousel.Item Interval ={200} >
                  <img src ="/servicesImages/goats.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="corousel-text mt-2 mb-2 fs-3" style ={{marginLeft:"50%",marginRight:"50%"}}>Animal Husbundry</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item Interval ={200}>
                  <img src ="/servicesImages/farmer.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                  {/* <img src ="/servicesImages/vegetables.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" /> */}

                     <Carousel.Caption>
                     <p className ="text-white mt-2 mb-2 fs-3" style ={{marginLeft:"50%",marginRight:"50%"}}>Horticulture</p>
                      </Carousel.Caption>                  </Carousel.Item>

                      <Carousel.Item Interval ={200}>
                  <img src ="/servicesImages/crops.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="text-white mt-2 mb-2 fs-3" style ={{marginLeft:"50%",marginRight:"50%"}}>Crop Cultivation</p>
                      </Carousel.Caption>                  </Carousel.Item>

                      <Carousel.Item Interval ={200}>
                  <img src ="/servicesImages/solarPanel.jpg" alt ="logo" style ={{marginLeft:"4rem",marginTop:"1rem",height:"340px",width:"45rem"}} className ="carousel-image" />
                     <Carousel.Caption>
                     <p className ="text-white mt-2 mb-2 fs-4" style ={{marginLeft:"50%",marginRight:"50%"}}>Farming Equipment</p>
                      </Carousel.Caption>                  </Carousel.Item>
            </Carousel>
         </div>
        </li> 
        

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
             return null
            })}
             </div>:null}
               

            </div>

            {missionAndVision ===false?<span className ="rounded-pill btn-more-dark mb-1 mt-2" onClick={toggleMission}>View More  <BsArrowDownCircle/></span>:null}

            {missionAndVision===true ?<span className ="rounded-pill btn-more-dark mb-1 mt-2" onClick={toggleMission}>View Less  <BsArrowUpCircle/></span>:null}

        </li>

        
    </ul>:null}</div>
  
    )
}

export default Home;