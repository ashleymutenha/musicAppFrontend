import './css/body.css'
import { useState,useEffect,lazy, Suspense} from 'react';
import React from 'react';
import About from './bodyComponents/About';
import Footer from './bodyComponents/footer';
import Header from './Header';
import Waves from './bodyComponents/Waves';
// import Areas from './bodyComponents/Areas';
import { Bs1Circle, BsGearWideConnected } from 'react-icons/bs';
import {motion} from "framer-motion";


const Areas = lazy(() => import('./bodyComponents/Areas'));

export default function Body(){
    const _Areas =lazy(()=>import('./bodyComponents/Areas'))
        
    


    const[currentItem ,setItem] = useState(1)
    const[width, setWidth] =useState(window.innerWidth)

    useEffect(()=>{
        const Areas = React.lazy(()=>import("./bodyComponents/Areas"))

        // setTimeout(
        //     ()=>{
        //         setItem(2)
        //     },22000
        // )


      
       


       
    })


    return(
        
         <div >

        <Header/>
        {width>1000?<div>
            {currentItem===1?<div >
           <div 
            
            className ="first-container" >

               
                

                <div  style ={{flex:1,borderBottomLeftRadius: "50%"}}>

                </div>

                <div className =" right-container" style ={{flex:11}}>

</div>

            </div>

            <div className = "_element">
                      <div>
                        <span style ={{color:"darkgreen", fontSize:14}}>___________  
                        <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span>
                      </div>
                        <span>Connecting You to Value Growth in Agriculture through Tech-Driven Insights and Tools!</span>

                        {/* <div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
                        width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
                         padding:"12px 12px 12px 12px", }}>
                            View More
                        </div> */}
                    </div>


                    <div className = "_decorator" style ={{display:"flex", opacity:0.8, overflow:"hidden", marginLeft:"-200px"}}>
                      <div style ={{width:"10px", height:"680px", background:"beige", marginRight:"10px" }}>
                             <span style ={{opacity:0}}>m</span>
                      </div>
                      <div style ={{width:"10px", height:"680px", background:"beige",marginRight:"10px"  }}>
                             <span style ={{opacity:0}}>m</span>
                      </div>


                      <div style ={{width:"10px", height:"680px", background:"beige", }}>
                             <span style ={{opacity:0}}>m</span>
                      </div>
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
                   
        </div>:null}

        {currentItem===2?<div><About/></div>:null}

<Suspense>

<Areas/>
</Suspense>



<Footer/>
<Waves/>
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

        
            <Suspense>

            <Areas/>
            </Suspense>
            
            
           
            <Footer/>
            <Waves/>
           </div>:null}

           {currentItem===2?<About/>:null}

        </div>:null}

        </div>

        
    );
}