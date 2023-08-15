
<<<<<<< HEAD
import{BsFacebook,BsLinkedin,BsFillBrushFill} from 'react-icons/bs'
=======
import{BsFacebook,BsLinkedin,BsFillBrushFill,BsMoonStarsFill} from 'react-icons/bs'
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
import Menu from './BodyComponents/Menu.js';
function Header(){

    const theme  = localStorage.getItem('theme');

<<<<<<< HEAD

=======
    function toHome(){
        localStorage.setItem('currentPage',"home")
        window.location.reload(true)
      
    }
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)

    function changethemetoDark(){
     
        localStorage.setItem('theme','dark')
        window.location.reload(true)
    }

<<<<<<< HEAD
=======
    function changethemetoLight(){
     
        localStorage.setItem('theme','light')
        window.location.reload(true)
    }

>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
    return (
        <div style ={{position:"fixed"}} className = "head">

            

        {/* light Theme Header */}
<<<<<<< HEAD
        <div className ="bg-white">

        
        
        <div className = "row  header">
=======
        <div className ="">

        
        
        {theme ==='light' || theme  ===null ?<div className = "row  header bg-white">
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
        
       

        <div className ="col-md-4">
<<<<<<< HEAD
         <img  src="/agval.png"  style={{height:"140px",width:"auto"}} className='mt-2 mb-2 header-picture' alt ="logo"/>
=======
         <img  src="/agval.png"  style={{height:"9rem",width:"auto"}} className='mt-2 mb-2 header-picture' alt ="logo"/>
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
        </div>

        <div className ="col-md-2">
        <BsFacebook className ="fs-2 fb-icon mt-2"/>
        <BsLinkedin className ="fs-2 linkedin-icon mt-2"/>
       
     
        </div>

<<<<<<< HEAD
        {/* <div className ="col-md-4 mt-2 " onClick={() =>{changethemetoDark()}}><span className ="fs-5  mb-2   text-dark themeicon"
           ><BsFillBrushFill className ="icon"/></span></div> */}
        </div>

        
      
        
        
        </div>

        {/* Dark Theme Header */}

{/* 
        <div className = "row dark-theme header">
        

        <div className ="col-md-6">
         <img  src="/agval.png"  style={{height:"140px",width:"auto"}} className='mt-1 mb-2 header-picture' alt ="logo"/>
        </div>

        <div className ="col-md-4">
        <BsFacebook className ="fs-2 fb-icon mt-2"/>
        <BsLinkedin className ="fs-2 linkedin-icon mt-2"/>
        </div>
        </div> */}
=======
         <div className ="col-md-4 mt-2 " onClick={() =>{changethemetoDark()}}><span className ="fs-5  mb-2  icon"
           ><BsMoonStarsFill className ="themeDarkIcon"/></span>
        </div>

       

       
        </div>:null}  

        {/* {theme ==='light' || theme  ===null ?<div class ="bg-white">
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
           
      
        

        </div>:null} */}
        {theme ==='dark'?<div className = "row  header dark-theme">
        
       

        <div className ="col-md-4">
         <img  src="/agval.png"  style={{height:"140px",width:"auto",background:"transparent",mixBlendMode:"multiply",cursor:"pointer"}} className='mt-2 mb-2 header-picture' alt ="logo"/>
        </div>

        <div className ="col-md-2">
        <BsFacebook className ="fs-2 fb-icon mt-2"/>
        <BsLinkedin className ="fs-2 linkedin-icon mt-2"/>
       
     
        </div>

        <div className ="col-md-4 mt-2 " onClick={() =>{changethemetoLight()}}><span className ="fs-5  mb-2  icon"
           ><BsMoonStarsFill className ="themeLightIcon"/></span>
        </div>

       
        </div>:null}
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)

         <Menu/>

        </div>
<<<<<<< HEAD
=======
        
        
        
        
        
        
        </div>
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
    )
}

export default Header;