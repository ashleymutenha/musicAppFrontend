
import Home from './BodyComponents/Home.js'

import About from './BodyComponents/About.js'

function Body(){
   const  currentPage = localStorage.getItem('currentPage')


   console.log(currentPage)



   const theme  = localStorage.getItem('theme')

   if(theme ==='light'){
 
    document.body.style.backgroundColor="rgb(209, 206, 206)"

 
}

if(theme ==='dark'){

 document.body.style.backgroundColor="rgb(71, 69, 69)"


}


    return (
         
        <div>
            
        <div className ="content-body" style={{marginTop:"14rem"}} >

           {/* <div class ="sidebar-content" style ={{height:"100vh", display:"flex", flexDirection:"row"}}>

           <div className ="bg-white sidebar-content" style ={{height:"100vh", display:"flex", flexDirection:"row"}}>

         

          
           </div> */}

           

           

             <div>
             {currentPage ==="home" || currentPage==null?<Home/>:null}
             {currentPage ==="about"?<About/>:null}
             </div>

        </div></div>)
    
}

export default Body;
