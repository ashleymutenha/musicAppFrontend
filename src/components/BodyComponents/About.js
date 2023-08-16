
import {BsInfoCircle} from 'react-icons/bs'

import {BsBuildings} from 'react-icons/bs'
import {aboutInfo} from '../../resources/info.js'


function About(){

    const theme  = localStorage.getItem('theme')

   const data = aboutInfo
     return(
        <div>

            {/* light theme */}
        {theme ==='light' || theme===null?<ul className ="list-group list-group-flush bg-white home-content">
        <li className ="list-group-item">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsInfoCircle className='icon'/></span></span>
           <span className ="fs-3 content-heading body-heading">Company History</span>

           <div className = "home-description">
               <p>{data.companyHistory}</p>
            </div>
         
        </li>

        <li className ="list-group-item">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsInfoCircle className='icon'/></span></span>
           <span className ="fs-3 content-heading body-heading">Founding Director's Message</span>

           <div className = "home-description">
               <p>"<span style ={{fontStyle:"italic"}}>{data.directorMessage.message}"</span> {data.directorMessage.director}</p>
            </div>
         
        </li>

        <li className ="list-group-item">
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsInfoCircle className='icon'/></span></span>
           <span className ="fs-3 content-heading body-heading">Agval Networks in Botswana</span>

           <div className = "home-description">
               <p>{data.botswana}</p>
            </div>
         
        </li>

        <li className ="list-group-item" >
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsInfoCircle className='icon'/></span></span>
           <span className ="fs-3 content-heading body-heading">ClimApp Technologies Division</span>

           <div className = "home-description">
               <p>{data.climApp}</p>
            </div>
         
        </li>

        <li className ="list-group-item" >
           <span className ="home-span"><span className ="fs-5  text-dark btnicon"
           ><BsBuildings className='icon'/></span></span>
           <span className ="fs-3 content-heading body-heading">Our Offices</span>

           

           <div className = "home-description">
           <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading">Gaborone Office</span>
            </div>
               <p>{data.offices.Gaborone}</p>
            </div>
         
        </li>

        
    </ul>

    :null}

{/* Dark theme */}
    {theme ==='dark' || theme===null?<ul className ="list-group list-group-flush dark-theme home-content">
        <li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsInfoCircle className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">Company History</span>

           <div className = "home-description">
               <p>{data.companyHistory}</p>
            </div>
         
        </li>

        <li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsInfoCircle className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">Founding Director's Message</span>

           <div className = "home-description">
               <p>"<span style ={{fontStyle:"italic"}}>{data.directorMessage.message}"</span> {data.directorMessage.director}</p>
            </div>
         
        </li>

        <li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsInfoCircle className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">Agval Networks in Botswana</span>

           <div className = "home-description">
               <p>{data.botswana}</p>
            </div>
         
        </li>

        <li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}}>
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsInfoCircle className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">ClimApp Technologies Division</span>

           <div className = "home-description">
               <p>{data.climApp}</p>
            </div>
         
        </li>


        <li className ="list-group-item" style={{background:"rgb(51, 50, 50)",color:"#ffff"}} >
           <span className ="home-span"><span className ="fs-5  text-dark dark-btnicon"
           ><BsBuildings className=''/></span></span>
           <span className ="fs-3 content-heading-dark body-heading">Our Offices</span>

           

           <div className = "home-description">
           <div className ="mb-1 text-muted fs-4 "><span className ="home-subheading-dark">Gaborone Office</span>
            </div>
               <p>{data.offices.Gaborone}</p>
            </div>
         
        </li>

        
    </ul>:null}

   </div>
    )
}

export default About;