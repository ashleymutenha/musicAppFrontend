
import{BsCCircleFill,BsTriangleFill,} from 'react-icons/bs'
function Footer(){
    var year = new Date().toString().substring(11,15);
    
    const toTop = ()=>{
       window.scrollTo(0, 0);
    }
  
    return (
        <div>
        <div className = " footer">
         <div style ={{display:"flex"}}>
  
         <div>
        <div className ="footer-copyright" style ={{borderBottom:"1px solid hsl(66, 66%, 73%)",padding:"5px 5px 5px 5px"}}>
        <BsCCircleFill className ="fs-4 footer-icon" />  <strong className ="fs-5 footer-year"> Agval Networks {year}</strong>
        </div>

        <div style ={{marginTop:"",paddingBottom:10, paddingLeft:10,paddingRight:10,border:"", borderRadius:"12px"}}>
            {/* <span>Contact Us</span> */}
            <div className ="fs-5  mt-1" style ={{marginLeft:"25px", color:"#ffff", opacity:0.5}}>
        
            Connecting You to Value Growth in Agriculture through Tech-Driven Insights and Tools!
            </div>

        </div>

        
        </div>

        <div onClick={()=>toTop()} class ="fs-3 mt-4 backtotop" style ={{color:"lightgrey", marginLeft:"20px", border:"1px solid lightgrey", padding:"5px 5px 5px 5px", 
        borderRadius:"12px", height:"fit-content"}}><BsTriangleFill/> Top of the Page</div>
        </div></div>

        </div>
    )
}

export default Footer;