import './css/body.css'
import { useState,useEffect,lazy,startTransition} from 'react';
import React from 'react';
import About from './bodyComponents/About';
import Footer from './bodyComponents/footer';
import Areas from './bodyComponents/Areas';


import { Bs1Circle, BsGearWideConnected } from 'react-icons/bs';
export default function Body(){
    const _Areas =lazy(()=>import('./bodyComponents/Areas'))
        
    


    const[currentItem ,setItem] = useState(1)
    const[width, setWidth] =useState(window.innerWidth)

    useEffect(()=>{
        const Areas = React.lazy(()=>import("./bodyComponents/Areas"))

        setTimeout(
            ()=>{
                setItem(2)
            },20000
        )
    })


    return(
        
         <div>


        {width>1000?<div>
        {currentItem===1?<div>
            <div className ="first-container">

                <div className =" right-container" style ={{flex:8}}>

                </div>
                

                <div  style ={{flex:2,borderBottomLeftRadius: "50%"}}>

                </div>

            </div>

            <div className = "_element">
                      <div>
                        <span style ={{color:"navy", fontSize:14}}>___________  
                        <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span>
                      </div>
                        <span>Connecting You to Value Growth in Agriculture through Tech-Driven Insights and Tools!</span>

                        {/* <div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
                        width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
                         padding:"12px 12px 12px 12px", }}>
                            View More
                        </div> */}
                    </div>
                    
                    <div className ="_carousel">
                    <div>
                    {currentItem!==1?<div className ="__element2" onClick={()=>
                    setItem(1)}>

                      

                        


                    </div>:null}

                    {currentItem===1?<div className ="__element3">

                        {/* <div className ="dot1">
                           
                        </div> */}

                        


                    </div>:null}
                    </div>

                    {currentItem!==2?<div style ={{marginLeft:18}} className ="__element2" onClick={()=>
                    setItem(2)}>

                       

                        


                    </div>:null}


                    {currentItem===2?<div className ="__element3" style ={{marginLeft:18}}>

                       

                        


                    </div>:null}
                    
                    
                    </div>

                    <Areas/>

         <Footer/>
        </div>:null}

        {currentItem===2?<About/>:null}

        </div>:null}


        {width<1000?
        <div>
           {currentItem===1?<div>
            {currentItem===1?<div className ='first-container-sm'> 


            <div className = "_element-sm">
                      <div>
                        <div>
                        <BsGearWideConnected color='darkgreen' size ={50}/>
                        </div>
                        <span style ={{color:"darkgreen", fontSize:23}}>___________  
                        <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span>
                      </div>
                        <span>Connecting You to Value Growth in Agriculture through Tech-Driven Insights and Tools!</span>
                       
                       
                    </div>


                    <div className ="_carousel-sm">
                    <div>
                    {currentItem!==1?<div className ="__element2-sm" onClick={()=>
                    setItem(1)}>

                      

                        


                    </div>:null}

                    {currentItem===1?<div className ="__element3-sm">

                        {/* <div className ="dot1">
                           
                        </div> */}

                        


                    </div>:null}
                    </div>

                    {currentItem!==2?<div style ={{marginLeft:18}} className ="__element2-sm" onClick={()=>
                    setItem(2)}>

                       

                        


                    </div>:null}


                    {currentItem===2?<div className ="__element3-sm" style ={{marginLeft:18}}>

                       

                        


                    </div>:null}
                    
                    
                    </div>
                    


            </div>:null}

        

            <Areas/>
            
           
            <Footer/>

           </div>:null}

           {currentItem===2?<About/>:null}

        </div>:null}

        </div>

        
    );
}