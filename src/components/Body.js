import './css/body.css'
import { useState,useEffect,lazy, Suspense} from 'react';
import React from 'react';
import About from './bodyComponents/About';
import Footer from './bodyComponents/footer';
import Header from './Header';
import Waves from './bodyComponents/Waves';
// import Areas from './bodyComponents/Areas';
import { Bs1Circle, BsGearWideConnected, BsInboxFill } from 'react-icons/bs';
import {motion} from "framer-motion";

import TopRight from './pages/TopRightContent';


const Areas = lazy(() => import('./bodyComponents/Areas'));

export default function Body(){
    const _Areas =lazy(()=>import('./bodyComponents/Areas'))
    const [backgrounds, setBackgrounds] = useState(["url('/servicesImages/pexels-farm.jpg')","url('/servicesImages/pexels-market.jpg')", 
    "url('/servicesImages/humanFarmer1.jpg')" ,"url('/servicesImages/pexels-tomatoes.jpg')", 
    "url('/servicesImages/farmer.jpg')","url('/servicesImages/pexels-greenhouse2.jpg')",
    "url('/servicesImages/pexels-oranges.jpg')","url('/servicesImages/pexels-agric1.jpg')","url('/servicesImages/pexels-vegetables.jpg')"])        
       
       var background = Math.ceil(Math.random()*(8-0)+0)

    // if(background==5 && background<0){
    //     background =0;
    // }

    console.log("index",background)
    console.log("length",backgrounds.length)

    const[currentItem ,setItem] = useState(1)
    const[width, setWidth] =useState(window.innerWidth)
    const [decorator, showDecorator] =useState(false)

    useEffect(()=>{
        const Areas = React.lazy(()=>import("./bodyComponents/Areas"))

        setTimeout(
            ()=>{
                setItem(2)
            },22000
        )

        setTimeout(
          ()=>{
           showDecorator(true)
          },18000
        )


      
       


       
    })


    return(
        
         <div >
        
        <Header />
       
        {width>1000?<div>
            {currentItem===1?<div >
           <div 
            
            className ="first-container" style ={{backgroundImage:backgrounds[background]}} >

               
                

                <div  style ={{flex:5}}>

                <div className = "_element"  style ={{padding:"18px", width:"60%"}}>
                      <div>
                        <span style ={{color:"darkgreen", fontSize:18}}>___________  
                        <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span>
                      </div>
                        <span>Connecting You to Value Growth in Agriculture through Tech-Driven Insights and Tools!</span>

                       
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
                
              

                </div>

                <div className =" right-container" style ={{flex:6}}>
                 <TopRight/>
                </div>

            </div>

            {/* <div className = "_element">
                      <div>
                        <span style ={{color:"darkgreen", fontSize:18}}>___________  
                        <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span>
                      </div>
                        <span>Connecting You to Value Growth in Agriculture through Tech-Driven Insights and Tools!</span>

                       
                    </div> */}


                  


                    {decorator===true?<motion.div className = "_decorator" style ={{display:"flex", opacity:0.8, overflow:"hidden"}}

                    initial={{marginLeft:"-200px"}}

                    animate ={{marginLeft:"1200px"}}

                    transition={{duration:3}}
                    >
                      <div style ={{width:"4px", height:"680px", background:"beige", marginRight:"10px" }}>
                             <span style ={{opacity:0}}>m</span>
                      </div>
                      <div style ={{width:"4px", height:"680px", background:"beige",marginRight:"10px"  }}>
                             <span style ={{opacity:0}}>m</span>
                      </div>


                      <div style ={{width:"4px", height:"680px", background:"beige", }}>
                             <span style ={{opacity:0}}>m</span>
                      </div>
                    </motion.div>:null}
                    
                  
                   
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