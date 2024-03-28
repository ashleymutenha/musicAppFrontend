import '../css/body.css'
import { useState,useEffect,lazy, Suspense} from 'react';
import React from 'react';
import About from './About';
import Footer from './footer';
// import Areas from './bodyComponents/Areas';
import { Bs1Circle, BsGearWideConnected, BsInboxFill } from 'react-icons/bs';
import Waves from './Waves';
import TopRight from '../pages/TopRightContent';
import {motion} from 'framer-motion'

const Areas = lazy(() => import('./Areas'));

export default function Home(){
    // const _Areas =lazy(()=>import('./Areas'))

    const [backgrounds, setBackgrounds] = useState(["url('/servicesImages/pexels-farm.jpg')","url('/servicesImages/pexels-market.jpg')", 
    "url('/servicesImages/humanFarmer1.jpg')" ,"url('/servicesImages/pexels-tomatoes.jpg')", 
    "url('/servicesImages/corn.jpg')","url('/servicesImages/crops.jpg')","url('/servicesImages/pexels-greenhouse2.jpg')",
    "url('/servicesImages/pexels-oranges.jpg')","url('/servicesImages/pexels-maize.jpg')","url('/servicesImages/pexels-vegetables.jpg')"])   
       var background = Math.ceil(Math.random()*(9-0)+0)
        
    


    const[currentItem ,setItem] = useState(1)
    const[width, setWidth] =useState(window.innerWidth)
    const [decorator, showDecorator] =useState(false)


    useEffect(()=>{
        // const Areas = React.lazy(()=>import("./bodyComponents/Areas"))

        setTimeout(
            ()=>{
                setItem(2)
            },50000
        )

        setTimeout(
            ()=>{
             showDecorator(true)
            },46000
          )



       
    })


    return(
        
         <div>


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

        </div>:null}


        {width<1000?
        <div>
           {currentItem===1?<div>
            {currentItem===1?<div className ='first-container-sm' style ={{backgroundImage:backgrounds[background]}} > 


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