// function to show Website Section' Authentication Page

import { BsGoogle, BsLock, BsLockFill } from "react-icons/bs"
import "../css/authentication.css"
import { Axios } from "axios"
export default function Authentication(){
    // function to redirect to backend's google Authentication Page
    const signIn = ()=>{

        window.location.replace("http://localhost:8000/auth/google")
    }

    return (

        <div>

            <div className ="loginForm">
                <div style ={{marginLeft:"30%", borderRadius:"50%", 
                padding:"14px", background:"lightgrey", height:"80px", width:"80px"}}>
                    <BsLockFill size ={50} color ="darkgreen"/>
                    </div>

                <div style={{marginTop:"3%", fontWeight:"bold", fontSize:"28px", padding:'0'}}>Authentication</div>
                
                <div style ={{borderTop:"2px solid lightgrey", padding:"10px"}}>
                <div onClick={signIn} className ="loginbutton" style ={{display:"flex", padding:"12px", background:"rgb(20, 55, 38)", borderRadius:"12px",  }}>
                 <div style ={{flex:2}}><BsGoogle size ={25} color="white"/></div>

                 <div  style ={{marginLeft:"4%", fontSize:"15px", color:"beige", flex:8,width:"40%"}}>Sign in with google</div>

                </div>
                </div>

            </div>
        </div>
    )
}