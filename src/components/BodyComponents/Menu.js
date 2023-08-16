
import {BsHouse} from 'react-icons/bs'
import {BsGearWideConnected} from'react-icons/bs'
import {BsTools,BsInfoCircle} from'react-icons/bs'
import {BsPeople} from'react-icons/bs'
import {BsCurrencyDollar,BsThreeDots,BsBag,BsTelephonePlus,BsFolder,BsFillBrushFill} from'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown';

function Menu(){

   const theme  = localStorage.getItem('theme')
    function toHome(){
       localStorage.setItem('currentPage',"home")
       window.location.reload(true)
     
   }

   


    function toAbout(){
       localStorage.setItem('currentPage',"about")
       window.location.reload(true)
      console.log()
     }


    return (
        <div>
        {theme ==='light' || theme ===null ?<div className ="menu" >
            <span className ="menu-item" onClick={()=>{
                toHome()
            }}>
               <BsHouse/> Home
            </span>

            <span className ="menu-item" onClick={()=>{
                toAbout()
            }}>
               <BsInfoCircle/> About Us
            </span>

            <span className ="menu-item">
               <BsGearWideConnected/> Our Solutions
            </span>

            <span className ="menu-item">
               <BsTools/> Services
            </span>

            <span className ="menu-item">
               <BsCurrencyDollar/> Products
            </span>

            <span className ="menu-item">
               <BsPeople/> Parterships
            </span>

            
            < Dropdown  style ={{marginLeft:"10px", color:"green",cursor:"pointer"}}>
              <Dropdown.Toggle variant="" style ={{border:"1px rgb(7, 65, 7) dashed",background:"rgb(239, 243, 239)"}} className ="mt-2 mb-1 menu-dropdown"> < BsThreeDots /> More</Dropdown.Toggle>

              <Dropdown.Menu>
                     <Dropdown.Item  >Resources <BsFolder style ={{marginLeft:"10px"}}/> </Dropdown.Item>
                     <Dropdown.Item  >Careers <BsBag style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item   >Contact Us <BsTelephonePlus style ={{marginLeft:"10px"}}/></Dropdown.Item>
      </Dropdown.Menu>
            </Dropdown>

           

            
        </div>:null}

{theme ==="dark"?<div className ="menu dark-theme" >
<span className ="menu-item-dark-theme" onClick={()=>{
    toHome()
}}>
   <BsHouse/> Home
</span>

<span className ="menu-item-dark-theme" onClick={()=>{
    toAbout()
}}>
   <BsInfoCircle/> About Us
</span>

<span className ="menu-item-dark-theme">
   <BsGearWideConnected/> Our Solutions
</span>

<span className ="menu-item-dark-theme">
   <BsTools/> Services
</span>

<span className ="menu-item-dark-theme">
   <BsCurrencyDollar/> Products
</span>

<span className ="menu-item-dark-theme">
   <BsPeople/> Parterships
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