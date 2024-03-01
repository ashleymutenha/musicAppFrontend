import { Ratio } from 'react-bootstrap'
import { useState } from 'react'
import '../css/dots.css'
import { keyboard } from '@testing-library/user-event/dist/keyboard'
export default function Dots(){

    const[width, setWidth] =useState(window.innerWidth)

 
    var rt =['o','p']
    const op = 'kl'

    var count =0;

    while (count!=400){
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
        const result =(num/13).toString()
        if(result.indexOf(".")===-1){
          return true
        }
        else{
          return false
        }
   
      }


    return (
        <div className ="dotContainer">
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
             
             </div>
             )

         }


        }
            

           
        

        )}
          

        </div>
    )
}