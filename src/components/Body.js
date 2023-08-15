
import Home from './BodyComponents/Home.js'

import About from './BodyComponents/About.js'

function Body(){
   const  currentPage = localStorage.getItem('currentPage')

<<<<<<< HEAD
   console.log(currentPage)
=======


   const theme  = localStorage.getItem('theme')

   if(theme ==='light'){
 
    document.body.style.backgroundColor="rgb(209, 206, 206)"

 
}

if(theme ==='dark'){

 document.body.style.backgroundColor="rgb(71, 69, 69)"


}
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)

    return (
         
        <div>
            
        <div className ="content-body" style={{marginTop:"14rem"}} >
<<<<<<< HEAD
           <div class ="bg-white sidebar-content" style ={{height:"100vh", display:"flex", flexDirection:"row"}}>
=======
           <div className ="bg-white sidebar-content" style ={{height:"100vh", display:"flex", flexDirection:"row"}}>
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
         

          
           </div>
<<<<<<< HEAD
           <div>
             {currentPage ==="home" || currentPage==null?<Home/>:null}
             {currentPage ==="about"?<About/>:null}
             </div>
=======
           {theme ==='light' ||theme ===null?<div>
             {currentPage ==="home" || currentPage==null?<Home/>:null}
             {currentPage ==="about"?<About/>:null}
             </div>:null}

             {theme ==='dark' ||theme ===null?<div>
             {currentPage ==="home" || currentPage==null?<Home/>:null}
             {currentPage ==="about"?<About/>:null}
             </div>:null}
>>>>>>> 3390bd3 (theme interchangibility and About Us Page)
        </div></div>
    )
}

export default Body;
