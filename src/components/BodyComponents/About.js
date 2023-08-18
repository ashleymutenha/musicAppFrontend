
import {BsInfoCircle} from 'react-icons/bs'

import {BsBookmark,BsPinMap,BsCardText,BsArrowDownCircle,BsArrowUpCircle,BsMap,BsCardChecklist} from 'react-icons/bs'
import {aboutInfo} from '../../resources/info.js'
import { useState } from 'react'

function About(){

    const theme  = localStorage.getItem('theme')
  
   const data = aboutInfo

   const[viewItems,changeItems] =useState(true)

   const changeViewItems =()=>{
    changeItems(!viewItems)
   }
 

     return(
        <div>

            {/* light theme */}
        {theme ==='light' || theme===null?<ul className ="list-group list-group-flush bg-white home-content" style={{borderRadius:"12px"}}>
        {viewItems ===true ||viewItems ===false?<li className ="list-group-item">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsInfoCircle className='icon'/></span></span>
           <span className ="fs-3 content-heading body-heading">Company History</span>

           <div className = "home-description">
               <p>{data.companyHistory}</p>
            </div>
         
        </li>:null}

        {viewItems ===true ||viewItems ===false?<li className ="list-group-item">
           <span className ="home-span">
            <img src ="/founder.png" alt ="person" style={{height:"55px",width:"auto",background:"transparent",borderRadius:"50%"}}/>
          
           </span>
           <span className ="fs-3 content-heading body-heading">Founding Director's Message</span>

           <div className = "home-description">
               <p>"<span style ={{fontStyle:"italic"}}>{data.directorMessage.message}"</span> {data.directorMessage.director}</p>
            </div>
         
        </li>:null}

        {viewItems ===true ||viewItems ===false?<li className ="list-group-item">
           <span className ="home-span">
           <img src ="/botswana.png"alt ="flag"  style={{height:"55px",width:"55px",background:"transparent",borderRadius:"50%"}}/></span>
           <span className ="fs-3 content-heading body-heading">Agval Networks in Botswana</span>

           <div className = "home-description">
               <p>{data.botswana}</p>
            </div>
         
            {viewItems ===true ?<span className ="rounded-pill btn-more mb-1 mt-2" onClick={changeViewItems}>View More  <BsArrowDownCircle/></span>:null}
        </li>:null}


        {viewItems ===false?<li className ="list-group-item" >
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsBookmark className='icon'/></span></span>
           <span className ="fs-3 content-heading body-heading">ClimApp Technologies Division</span>

           <div className = "home-description">
               <p>{data.climApp}</p>
            </div>
         
        </li>:null}

        {viewItems ===false?<li className ="list-group-item" >
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsPinMap className='icon'/></span></span>
           <span className ="fs-3 content-heading body-heading">Our Offices</span>

           

           <div className = "home-description">
           <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading">Gaborone Office</span>
            </div>
               <p>{data.offices.Gaborone}</p>
            </div>

            <div className = "home-description">
           <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading">Additional Offices</span>
            </div>
               <p>{data.offices.additionalOffices}</p>
            </div>

        </li>:null}

        {viewItems ===false?<li className ="list-group-item">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsMap className=''/></span></span>
           <span className ="fs-3 content-heading body-heading">A Roadmap to Innovation: AgVal's Strategic Direction</span>

           <div className = "home-description">
               <p>{data.roadMaptoInnovation}</p>
            </div>
         
        </li>:null}


        {viewItems ===false?<li className ="list-group-item">
           <span className ="home-span">            
           <img src ="/founder.png" alt ="person" style={{height:"55px",width:"auto",background:"transparent",borderRadius:"50%"}}/>
            </span>
           <span className ="fs-3 content-heading body-heading">Director Profile</span>

           <div className = "home-description">
               <p>{data.directorProfile}</p>
            </div>
         
        </li>:null}


        {viewItems ===false?<li className ="list-group-item">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsCardChecklist className=''/></span></span>
           <span className ="fs-3 content-heading body-heading">Our Current and Future Plans: </span>

           <div className = "home-description">
               <p>{data.plans.message}</p>
            </div>

            <div className = "home-description">
               <p>{data.plans.conclusion}</p>
            </div>
            {viewItems ===false ?<span className ="rounded-pill btn-more mb-1 mt-2" onClick={changeViewItems}>View Less   <BsArrowUpCircle/></span>:null}

        </li>:null}

    </ul>

    :null}

{/* Dark theme */}
    {theme ==='dark'?<ul className ="list-group list-group-flush dark-theme home-content" style={{borderRadius:"12px"}}>
    {viewItems ===true ||viewItems ===false? <li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsInfoCircle className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">Company History</span>

           <div className = "home-description">
               <p>{data.companyHistory}</p>
            </div>
         
        </li>:null}

        {viewItems ===true ||viewItems ===false?<li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span">            
           <img src ="/founder.png" alt ="person" style={{height:"55px",width:"auto",background:"transparent",borderRadius:"50%"}}/>
            </span>
           <span className ="fs-3 content-heading-dark body-heading">Founding Director's Message</span>

           <div className = "home-description">
               <p>"<span style ={{fontStyle:"italic"}}>{data.directorMessage.message}"</span> {data.directorMessage.director}</p>
            </div>
         
        </li>:null}

        {viewItems ===true ||viewItems ===false?<li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><img src ="/botswana.png"alt ="flag"  style={{height:"55px",width:"55px",background:"transparent",borderRadius:"50%"}}/></span>
           <span className ="fs-3 content-heading-dark body-heading">Agval Networks in Botswana</span>

           <div className = "home-description">
               <p>{data.botswana}</p>
            </div>
            {viewItems ===true?<span className ="rounded-pill btn-more-dark mb-1 mt-2" onClick={changeViewItems}>View More  <BsArrowDownCircle/></span>:null}
        </li>:null}

        {viewItems ===false?<li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsBookmark className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">ClimApp Technologies Division</span>

           <div className = "home-description">
               <p>{data.climApp}</p>
            </div>
         
        </li>:null}


        {viewItems ===false?<li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}} >
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsPinMap className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">Our Offices</span>

           

           <div className = "home-description">
           <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading-dark">Gaborone Office</span>
            </div>
               <p>{data.offices.Gaborone}</p>
            </div>

            <div className = "home-description">
           <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading-dark">Additional Offices</span>
            </div>
               <p>{data.offices.additionalOffices}</p>
            </div>

        </li>:null}


        {viewItems ===false?<li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsMap className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">A Roadmap to Innovation: AgVal's Strategic Direction</span>

           <div className = "home-description">
               <p>{data.roadMaptoInnovation}</p>
            </div>
         
        </li>:null}

        {viewItems ===false?<li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span">           
            <img src ="/founder.png" alt ="person" style={{height:"55px",width:"auto",background:"transparent",borderRadius:"50%"}}/>
            </span>
           <span className ="fs-3 content-heading-dark body-heading">Director Profile</span>

           <div className = "home-description">
               <p>{data.directorProfile}</p>
            </div>
         
        </li>:null}

        {viewItems ===false?<li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsCardChecklist className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">Our Current and Future Plans: </span>

           <div className = "home-description">
               <p>{data.plans.message}</p>
            </div>

            <div className = "home-description">
               <p>{data.plans.conclusion}</p>
            </div>
            {viewItems ===false?<span className ="rounded-pill btn-more-dark mb-1 mt-2" onClick={changeViewItems}>View Less  <BsArrowUpCircle/></span>:null}

        </li>:null}


    </ul>:null}

   </div>
    )
}

export default About;