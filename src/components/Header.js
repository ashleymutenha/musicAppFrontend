

import{BsFacebook,BsLinkedin,BsMoonStarsFill} from 'react-icons/bs'

import Menu from './BodyComponents/Menu.js';
function Header(){

    const theme  = localStorage.getItem('theme');


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

            

        {/* light Theme Header */}

        

        
        
      

        {/* {theme ==='light' || theme  ===null ?<div class ="bg-white row">
        <img  src="/agval.png"  style={{height:"140px",width:"auto",cursor:"pointer",mixBlendMode:"multiply"}} 
        className='mt-2 mb-2 header-picture' alt ="logo" onClick={()=>{toHome()}}/>

         <span className = "spanspacer"></span>

         <span style ={{marginLeft:"5rem"}}><BsFacebook className ="fs-2 fb-icon mt-2"/>
        <BsLinkedin className ="fs-2 linkedin-icon mt-2"/></span>

        <span className = "spanspacer"></span>
        
           
        <BsMoonStarsFill className ="fs-3 themeDarkIcon"  style ={{marginLeft:"5rem"}} onClick={()=>{changethemetoDark()}}/>
           
      
        

        </div>:null} */}

             {/*dark Theme Header */}


             {/* {theme ==='dark' || theme  ===null ?<div className ="dark-theme">
        <img  src="/agval.png"  style={{height:"140px",width:"auto",background:"transparent",mixBlendMode:"multiply",cursor:"pointer"}} 
        className='mt-2 mb-2 header-picture' alt ="logo" onClick={()=>{toHome()}}/>

         <span className = "spanspacer"></span>

         <span style ={{marginLeft:"5rem"}}><BsFacebook className ="fs-2 fb-icon mt-2"/>
        <BsLinkedin className ="fs-2 linkedin-icon mt-2"/></span>

        <span className = "spanspacer"></span>
        
           
        <BsMoonStarsFill className ="fs-3 themeLightIcon"  style ={{marginLeft:"5rem"}} onClick={()=>{changethemetoLight()}}/>
           
      
        

        </div>:null} 
        </div>)} */}

{theme ==='light' || theme===null?<div className = "row  header bg-white">
        
       

        <div className ="col-md-4">
         <img  src="/agval.png"  style={{height:"140px",width:"auto",background:"transparent",mixBlendMode:"multiply",cursor:"pointer"}} className='mt-2 mb-2 header-picture' alt ="logo"/>
        </div>

        <div className ="col-md-2">
        <BsFacebook className ="fs-2 fb-icon mt-2"/>
        <BsLinkedin className ="fs-2 linkedin-icon mt-2"/>
       
     
        </div>

        <div className ="col-md-4 mt-2 " ><span className ="fs-5  mb-2  icon"
           ><BsMoonStarsFill className ="themeDarkIcon" onClick={() =>{changethemetoDark()}}/></span>
        </div>

       
        </div>:null}

         
        

        {theme ==='dark'?<div className = "row  header dark-theme">
        
       

        <div className ="col-md-4">
         <img  src="/agval.png"  style={{height:"140px",width:"auto",mixBlendMode:"multiply",cursor:"pointer"}} className='mt-2 mb-2 header-picture' alt ="logo"/>
        </div>

        <div className ="col-md-2">
        <BsFacebook className ="fs-2 fb-icon mt-2"/>
        <BsLinkedin className ="fs-2 linkedin-icon mt-2"/>
       
     
        </div>

        <div className ="col-md-4 mt-2 " ><span className ="fs-5  mb-2  icon"
           ><BsMoonStarsFill className ="themeLightIcon" onClick={() =>{changethemetoLight()}}/></span>
        </div>

       
        </div>:null}

         
<Menu/>
        </div>
    )}



export default Header;