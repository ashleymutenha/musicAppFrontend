

import{BsFacebook,BsLinkedin,BsMoonStarsFill} from 'react-icons/bs'
import { useEffect,useState } from 'react'

import Menu from './BodyComponents/Menu.js';
function Header(){

    const theme  = localStorage.getItem('theme');


    const[width,setWidth] =useState(window.innerWidth)

    useEffect(()=>{
       setWidth(window.innerWidth)
    },[width])
 
 
    console.log("Screen width is", width);


    function changethemetoDark(){
     
        localStorage.setItem('theme','dark')
        window.location.reload(true)
    }


    function changethemetoLight(){
     
        localStorage.setItem('theme','light')
        window.location.reload(true)
    }

    return (
        <div style ={{position:"fixed"}} className = "head">

{theme ==='light' || theme===null?<div className = "row  header bg-white" style ={{width:width+20,height:"120px"}}>
        
       

        <div className ="col-md-4">
        {width>=570?<img  src="/agval.png"  style={{height:"100px",width:"auto",background:"transparent",mixBlendMode:"multiply",cursor:"pointer"}} 
        className='mt-2 mb-2 header-picture' alt ="logo"/>:<img  src="/agval.png"  style={{height:"90px",width:"auto",background:"transparent",mixBlendMode:"multiply",cursor:"pointer"}} 
        className='mt-2 mb-2 header-picture' alt ="logo"/>}
        </div>

        {width>=700?<div className ="col-md-2 mt-3 bg-white">
    
        

        <Menu/>
      
        </div>:null}

        {width<700?<div className ="col-md-2  bg-white">
       
        

        <Menu/>
       
        </div>:null}

        

  

       
        </div>:null}

         
        

        {theme ==='dark'?<div className = "row  header dark-theme" style ={{width:width+20}}>
        
       

        <div className ="col-md-4">
        {width>=570?<img  src="/agval.png"  style={{height:"140px",width:"auto",background:"transparent",mixBlendMode:"multiply",cursor:"pointer"}} 
        className='mt-2 mb-2 header-picture' alt ="logo"/>:<img  src="/agval.png"  style={{height:"90px",width:"auto",background:"transparent",mixBlendMode:"multiply",cursor:"pointer"}} alt ="logo" />}        </div>

   {width>=570?<div className ="col-md-2">
        <BsFacebook className ="fs-2 fb-icon mt-2"/>
        <BsLinkedin className ="fs-2 linkedin-icon mt-2"/>
       
     
        </div>:null}

       

        {width>=570?<div className ="col-md-4 mt-2 " ><span className ="fs-5  mb-2  icon"
           ><BsMoonStarsFill className ="themeLightIcon" onClick={() =>{changethemetoLight()}}/></span>
        </div>:null}

       
        </div>:null}

         
        </div>
    )}



export default Header;