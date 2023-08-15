import {BsHouse} from 'react-icons/bs'
import {BsInfoSquare} from 'react-icons/bs'
import {BsGearWideConnected} from'react-icons/bs'
import {BsCartPlus} from'react-icons/bs'
import {BsTools} from'react-icons/bs'
import {BsPeople} from'react-icons/bs'
import {BsFolder} from'react-icons/bs'
import {BsBag} from'react-icons/bs'
import {BsShare} from'react-icons/bs'


function  IconSideBar(){
     localStorage.setItem('currentPage',"home")
     function toHome(){
        localStorage.setItem('currentPage',"home")
        window.location.reload(true)

    }

     function toAbout(){
        localStorage.setItem('currentPage',"about")
        window.location.reload(true)

      }


    return(
        <div className ="icon-sidebar"> 
            <ul className = "list-group list-group-flush">
                <li className = "list-group-item menu-item" onClick ={()=>{
                    toHome()
                }}>
                   <span className = "fs-5"><BsHouse/></span>
                    
                </li>

                <li className = "list-group-item menu-item" onClick ={()=>{
                    toAbout()
                }}>
                   <span className = "fs-5"><BsInfoSquare/></span>
                   
                </li>

                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsGearWideConnected/></span>
                    
                </li>

                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsTools/></span>
                    
                </li>

                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsCartPlus/></span>
                    
                </li>

                <li className = "list-group-item menu-item" >
                   <span className = "fs-5"><BsPeople/></span>
              
                </li>


                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsFolder/></span>
                    
                </li>


                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsBag/></span>
                  
                </li>


                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsShare/></span>
                  
                </li>
            </ul>
        </div>
    )
            
}

export {IconSideBar};