import{BsFacebook,BsLinkedin,BsMoonStarsFill,BsBag,
    BsFolder,BsTelephonePlus,BsJustify,BsHouse,BsInfoCircle,BsGearWideConnected, BsTools, BsCurrencyDollar, BsPeople} from 'react-icons/bs'
import {useState,useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';




function MiniMenu(){

    const theme  = localStorage.getItem('theme')


    function toHome(){
        sessionStorage.setItem('currentPage',"home")
        window.location.reload(true)
      
    }
 
    
     function toAbout(){
        sessionStorage.setItem('currentPage',"about")
        window.location.reload(true)
      }
 


    const[width,setWidth] =useState(window.innerWidth)

   useEffect(()=>{
      setWidth(window.innerWidth)
   },[width])



   function changethemetoDark(){
     
    localStorage.setItem('theme','dark')
    window.location.reload(true)
}


function changethemetoLight(){
 
    localStorage.setItem('theme','light')
    window.location.reload(true)
}

    return (
        <div style ={{width:width+20}}>
       {theme ==='light' || theme ===null?
        <div class ="bg-white">
          <BsFacebook className ="fs-2 mt-2 fb-icon" style ={{marginLeft:"10px"}}/>
          <BsLinkedin className ="fs-2 linkedin-icon mt-2" style ={{marginLeft:"10px"}}/>
          <BsMoonStarsFill className ="fs-2 mt-2" style ={{marginLeft:"8rem"}} onClick={()=>{changethemetoDark()}}/>


          < Dropdown  style ={{marginLeft:"10px", color:"green",cursor:"pointer"}}>
              <Dropdown.Toggle variant="" style ={{border:"1px rgb(7, 65, 7) dashed",background:"rgb(239, 243, 239)"}} className ="mt-2 mb-1 menu-dropdown"> < BsJustify /> Menu</Dropdown.Toggle>

              <Dropdown.Menu>
                     <Dropdown.Item  onClick={()=>{toHome()}}>Home <BsHouse style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item   onClick={()=>{toAbout()}}>About Us <BsInfoCircle style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item  >Our Solutions <BsGearWideConnected style ={{marginLeft:"10px"}}/> </Dropdown.Item>
                     <Dropdown.Item  >Services <BsTools style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item   >Products <BsCurrencyDollar style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item  >Parterships  <BsPeople style ={{marginLeft:"10px"}}/> </Dropdown.Item>
                     <Dropdown.Item  >Resources <BsFolder style ={{marginLeft:"10px"}}/> </Dropdown.Item>
                     <Dropdown.Item  >Careers <BsBag style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item   >Contact Us <BsTelephonePlus style ={{marginLeft:"10px"}}/></Dropdown.Item>
      </Dropdown.Menu>
            </Dropdown>
        </div>:null}


        {theme==="dark"?<div class ="dark-theme">
          <BsFacebook className ="fs-2 mt-2 fb-icon" style ={{marginLeft:"10px"}}/>
          <BsLinkedin className ="fs-2 linkedin-icon mt-2" style ={{marginLeft:"10px"}}/>
          <BsMoonStarsFill className ="fs-2 mt-2 themeLightIcon" style ={{marginLeft:"8rem"}} onClick={()=>{changethemetoLight()}}/>


          < Dropdown  style ={{marginLeft:"10px", color:"green",cursor:"pointer"}}>
              <Dropdown.Toggle variant="" style ={{border:"1px rgb(7, 65, 7) dashed",background:"rgb(239, 243, 239)"}} className ="mt-2 mb-1 menu-dropdown"> < BsJustify /> Menu</Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item  onClick={()=>{toHome()}}>Home <BsHouse style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item   onClick={()=>{toAbout()}}>About Us <BsInfoCircle style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item  >Our Solutions <BsGearWideConnected style ={{marginLeft:"10px"}}/> </Dropdown.Item>
                     <Dropdown.Item  >Services <BsTools style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item   >Products <BsCurrencyDollar style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item  >Parterships  <BsPeople style ={{marginLeft:"10px"}}/> </Dropdown.Item>
                     <Dropdown.Item  >Resources <BsFolder style ={{marginLeft:"10px"}}/> </Dropdown.Item>
                     <Dropdown.Item  >Careers <BsBag style ={{marginLeft:"10px"}}/></Dropdown.Item>
                     <Dropdown.Item   >Contact Us <BsTelephonePlus style ={{marginLeft:"10px"}}/></Dropdown.Item>
      </Dropdown.Menu>
            </Dropdown>
        </div>:null}
        </div>
    )

}


export default MiniMenu;