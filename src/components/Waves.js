import '../css/waves.css'
import '../css/dots.css'
import { BsCCircle, BsMoonStars, BsStarHalf } from 'react-icons/bs';
import {BsClock,BsFacebook,BsTwitter,BsLinkedin,BsGoogle} from'react-icons/bs'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Waves(){



  const[width, setWidth] =useState(window.innerWidth)

  const year = new Date().getFullYear()


  const toLinkedIn =()=>{
  }
  const GoogleSearch =()=>{
  }
 

  var rt =['o','p']
  const op = 'kl'

  var count =0;

  while (count!=100){
      rt.push('l')
      count+=1
  }

  function checkIfEven(num){
    const result =(num/7).toString()
    if(result.indexOf(".")===-1){
      return true
    }
    else{
      return false
    }

  }

  function checkIfOctet(num){
      const result =(num/3).toString()
      if(result.indexOf(".")===-1){
        return true
      }
      else{
        return false
      }
 
    }


    return (
      <div>
      <div style ={{position:"relative",overflow:"hidden", height:"140px", background:"rgb(22, 61, 40)"}}>
       

        {width>=1000?<div style ={{height:"fit-content",display:"flex", flexWrap:"wrap"}}>
       

      <div className ="dotContainer" style ={{flex:2}}>
        {rt.map((r, index=index)=>
            {if (checkIfEven(index)){
                return(
            <div className="dot even">
                
            </div>
                )
            }

            if (checkIfEven(index)===false && checkIfOctet(index)==false)
               {
                return(
                <div className="dot ">
                
                </div>
                )

            }

            if ( checkIfOctet(index)==true && checkIfEven(index)===false )
            {
             return(
             
             <div className="dot octet">
              {/* <BsMoonStars color ="rgb(213, 194, 82)" size ={17}/> */}
             </div>

            
             )

         }


        }
            

           
        

        )}

        
          
       
      </div>
     </div>:null}
        <div>
      <div style ={{display:"flex",bottom:"4px", transform:"translate(0,-50%)",
        
        opacity:"0.7",position:"absolute",
        padding:"12px 12px 12px 12px",width:"100%",
        marginTop:"10px" , background:"rgb(22, 61, 40)"}}>
          <div style ={{flex:7}}>
          <BsCCircle color='white' size={25}/> <span style ={{fontSize:"20px", color:"white", marginLeft:"8px", marginTop:"2px"}}>Sound Inc  {year}</span>
        </div>

        <div style ={{flex:2, }}>


</div>
        </div>

       

        </div>

      
        </div>
      <div class="ocean" style ={{position:"relative"}}>
              <div class="wave"></div>
              {/* <div class="wave"></div>*/}
              <div class="wave"></div>  
            </div>  

        </div>
        
    )
}