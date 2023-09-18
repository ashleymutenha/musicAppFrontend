
import {BsHouse} from 'react-icons/bs'
import {BsGearWideConnected} from'react-icons/bs'
import {BsTools,BsInfoCircle} from'react-icons/bs'
import {BsPeople} from'react-icons/bs'
import {BsCurrencyDollar,BsThreeDots,BsBag,BsTelephonePlus,BsFolder} from'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect,useState } from 'react'
function Menu(){

   const theme  = localStorage.getItem('theme')
   const currentPage = sessionStorage.getItem('currentPage')

   const[width,setWidth] =useState(window.innerWidth)

    useEffect(()=>{
       setWidth(window.innerWidth)
    },[width])

   
  
    function toHome(){
       sessionStorage.setItem('currentPage',"home")
       window.location.reload(true)
     
   }

   


    function toAbout(){
       sessionStorage.setItem('currentPage',"about")
       window.location.reload(true)
     
     }


     function toSolutions(){
        sessionStorage.setItem('currentPage',"solutions")
       window.location.reload(true)
     }


     function toProducts(){
        sessionStorage.setItem('currentPage',"products")
       window.location.reload(true)
     }

     function toServices(){
        sessionStorage.setItem('currentPage',"services")
        window.location.reload(true)
     }

     function toPartnerships(){
        sessionStorage.setItem('currentPage',"partnerships")
        window.location.reload(true)
     }


    return (
        <div>
        {theme ==='light' || theme ===null ?<div className ="menu" >
            {width>700?<span className ="menu-item" onClick={()=>{
                toHome()
            }}>
               {currentPage!==null?<span>{currentPage!=='home'?<span><BsHouse/> Home</span>:
               <span className ="activeMenuItem"><BsHouse/> Home</span>}</span>:
               <span className ="activeMenuItem"><BsHouse/> Home</span>}
            </span>:null}

            {width>700?<span className ="menu-item" onClick={()=>{
                toAbout()
            }}>
               {currentPage!=='about'?<span><BsInfoCircle/> About Us</span>:<span className ="activeMenuItem"><BsInfoCircle/> About Us</span>}
            </span>:null}

            {width>700?<span className ="menu-item"onClick ={()=>{toSolutions()}}>
            {currentPage!=='solutions'?<span><BsGearWideConnected/> Our Solutions</span>:<span className ="activeMenuItem"><BsGearWideConnected/> Our Solutions</span>}
            </span>:null}

            {width>700?<span className ="menu-item" onClick={()=>{toServices()}}>
            {currentPage!=='services'?<span><BsTools/> Services</span>:<span className ="activeMenuItem"><BsTools/> Services</span>}
            </span>:null}

            {width>700?<span className ="menu-item" onClick={()=>toProducts()}>
            {currentPage!=='products'?<span><BsBag/> Products</span>:<span className ="activeMenuItem"><BsBag/> Products</span>}
            </span>:null}

            {width>700?<span className ="menu-item" onClick={()=>toPartnerships()}>
            {currentPage!=='partnerships'?<span><BsPeople/> Partnerships</span>:<span className ="activeMenuItem"><BsPeople/> Parterships</span>}
            </span>:null}

            
            {width<=700?< Dropdown  style ={{marginLeft:"30px", color:"green",cursor:"pointer"}}>
              <Dropdown.Toggle variant="" style ={{border:"1px rgb(7, 65, 7) dashed",background:"rgb(239, 243, 239)"}} className ="mt-2 mb-1 menu-dropdown fs-3"> < BsThreeDots /> Menu </Dropdown.Toggle>

              <Dropdown.Menu>
                     <Dropdown.Item  onClick={()=>{toHome()}}> <BsHouse style ={{marginRight:"10px"}}/> Home  </Dropdown.Item>
                     <Dropdown.Item   onClick={()=>{toAbout()}}> <BsInfoCircle style ={{marginRight:"10px"}}/>About Us</Dropdown.Item>
                     <Dropdown.Item   onClick={()=>{toSolutions()}} > <BsGearWideConnected style ={{marginRight:"10px"}}/> Our Solutions </Dropdown.Item>
                     <Dropdown.Item    onClick={()=>{toServices()}}> <BsTools style ={{marginRight:"10px"}}/>Services </Dropdown.Item>
                     <Dropdown.Item    onClick={()=>{toProducts()}}><BsBag style ={{marginRight:"10px"}}/> Products</Dropdown.Item>

                     <Dropdown.Item   onClick={()=>{toPartnerships()}} > <BsPeople style ={{marginRight:"10px"}}/>Partnerships </Dropdown.Item>

      </Dropdown.Menu>
            </Dropdown>:null}

           

            
        </div>:null}

{theme ==="dark"?<div className ="menu dark-theme" >
<span className ="menu-item-dark-theme" onClick={()=>{
    toHome()
}}>
   {currentPage!==null?<span>{currentPage!=='home'?<span><BsHouse/> Home</span>:
               <span className ="activeMenuItem-darker"><BsHouse/> Home</span>}</span>:
               <span className ="activeMenuItem-darker"><BsHouse/> Home</span>}</span>

<span className ="menu-item-dark-theme" onClick={()=>{
    toAbout()
}}>
 {currentPage!=='about'?<span><BsInfoCircle/> About Us</span>:<span className ="activeMenuItem-darker"><BsInfoCircle/> About Us</span>}
</span>

<span className ="menu-item-dark-theme">
{currentPage!=='solutions'?<span><BsGearWideConnected/> Our Solutions</span>:<span className ="activeMenuItem-darker"><BsGearWideConnected/> Our Solutions</span>}
</span>

<span className ="menu-item-dark-theme">
{currentPage!=='services'?<span><BsTools/> Services</span>:<span className ="activeMenuItem-darker"><BsTools/> Services</span>}
</span>

<span className ="menu-item-dark-theme">
{currentPage!=='products'?<span><BsCurrencyDollar/> Products</span>:<span className ="activeMenuItem-darker"><BsCurrencyDollar/> Products</span>}
</span>

<span className ="menu-item-dark-theme">
{currentPage!=='partnerships'?<span><BsPeople/> Parterships</span>:<span className ="activeMenuItem-darker"><BsPeople/> Parterships</span>}
</span>


< Dropdown  style ={{marginLeft:"10px", color:"green",cursor:"pointer"}}>
  <Dropdown.Toggle variant="" style ={{border:"1px rgb(7, 65, 7) dashed",background:"rgb(239, 243, 239)"}} className ="mt-2 mb-1 menu-dropdown"> < BsThreeDots /> More</Dropdown.Toggle>

  <Dropdown.Menu>
         <Dropdown.Item  >Resources <BsFolder style ={{marginLeft:"10px"}}/> </Dropdown.Item>
         <Dropdown.Item  >Careers <BsBag style ={{marginLeft:"10px"}}/></Dropdown.Item>
         <Dropdown.Item   >Contact Us <BsTelephonePlus style ={{marginLeft:"10px"}}/></Dropdown.Item>
</Dropdown.Menu>
</Dropdown>

{/* <div className =""><span className ="fs-5 mt-4 mb-2   text-dark themeicon"
           ><BsFillBrushFill className ="icon"/></span></div> */}




</div>:null}</div>
    )


    
}


export default Menu;