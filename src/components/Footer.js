
import{BsCCircleFill, BsFacebook, BsLinkedin} from 'react-icons/bs'
function Footer(){
    return (
        <div>
        <div className = " footer">
          
        <div className ="footer-copyright" style ={{marginLeft:"40%"}}>
        <BsCCircleFill className ="fs-4 footer-icon" />  <strong className ="fs-5 footer-year"> Agval Networks 2023</strong>
        </div>

        <div style ={{marginTop:"",paddingBottom:10, paddingLeft:10,paddingRight:10,border:"",width:"200px", borderRadius:"12px"}}>
            {/* <span>Contact Us</span> */}
            <div>
                <BsFacebook className ="fs-3" style ={{color:"lightgrey"}}/>
                <BsLinkedin className ="fs-3" style ={{color:"lightgrey", marginLeft:"4%"}}/>
            </div>

        </div>

        
        
        </div>

        </div>
    )
}

export default Footer;