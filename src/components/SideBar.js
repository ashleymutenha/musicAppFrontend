import {BsHouse} from 'react-icons/bs'
import {BsInfoSquare} from 'react-icons/bs'
import {BsGearWideConnected} from'react-icons/bs'
import {BsCartPlus} from'react-icons/bs'
import {BsTools} from'react-icons/bs'
import {BsPeople} from'react-icons/bs'
import {BsFolder} from'react-icons/bs'
import {BsBag} from'react-icons/bs'
import {BsShare} from'react-icons/bs'
import { IconSideBar } from './IconSideBar'
import {BsJustify} from 'react-icons/bs'
import {useState,useEffect} from 'react'


function SideBar(){

    const[screenHeight, setScreenHeight] =useState(getHeight())
useEffect(()=>{
    const getScreenHeight = ()=>{
        setScreenHeight(getHeight())
    }

    window.addEventListener('resize',getScreenHeight)

    return (()=>{
        window.removeEventListener('resize',getScreenHeight)
    })
}, [screenHeight])

function getHeight(){
    return window.innerHeight
}


   const [sideBarState,changeState] =useState(true)
     localStorage.setItem('currentPage',"home")

     function toHome(){
        localStorage.setItem('currentPage',"home")
        localStorage.setItem('sidebar',JSON.stringify(sideBarState));
        window.location.reload(true)
      
    }

    


     function toAbout(){
        localStorage.setItem('currentPage',"about")
        localStorage.setItem('sidebar',JSON.stringify(sideBarState));
        window.location.reload(true)
       
      }

    const toggleMenu =()=>{
       changeState(!sideBarState)
      
      }


    return(
        <div>
        <BsJustify className ="fs-2  menu-toggle" onClick={toggleMenu} />
    {sideBarState ===true ?<div className ="sidebar" style ={{height:"100vh"}}> 
            <ul className = "list-group list-group-flush">
                <li className = "list-group-item menu-item" onClick ={()=>{
                    toHome()
                }}>
                   <span className = "fs-5"><BsHouse/></span>
                    <span className = "fs-5 menu-icon">Home</span>
                </li>

                <li className = "list-group-item menu-item" onClick ={()=>{
                    toAbout()
                }}>
                   <span className = "fs-5"><BsInfoSquare/></span>
                    <span className = "fs-5  menu-icon">About Us</span>
                </li>

                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsGearWideConnected/></span>
                    <span className = "fs-5 menu-icon">Our Solutions</span>
                </li>

                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsTools/></span>
                    <span className = "fs-5 menu-icon">Services</span>
                </li>

                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsCartPlus/></span>
                    <span className = "fs-5 menu-icon">Products</span>
                </li>

                <li className = "list-group-item menu-item" >
                   <span className = "fs-5"><BsPeople/></span>
                    <span className = "fs-5 menu-icon">Parterships</span>
                </li>


                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsFolder/></span>
                    <span className = "fs-5 menu-icon">Resources</span>
                </li>


                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsBag/></span>
                    <span className = "fs-5 menu-icon">Careers</span>
                </li>


                <li className = "list-group-item menu-item">
                   <span className = "fs-5"><BsShare/></span>
                    <span className = "fs-5 menu-icon">Contact Us</span>
                </li>
            </ul>
        </div>:null}
        {sideBarState ===false ?<IconSideBar/>:null}
        </div>
    )
            
}

export {SideBar};