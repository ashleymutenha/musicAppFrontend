import '../css/about.css'

import Body from '../Body'
import Footer from './footer'
import { useState,useEffect ,lazy, Suspense} from 'react'
import {BsMotherboard, BsMagic, BsFillEvStationFill, BsWind, BsGearWideConnected} from'react-icons/bs'
// import Areas from './Areas'
import Home from './home.js';

import {motion} from "framer-motion";
import Waves from './Waves.js'

const Areas = lazy(() => import('./Areas'));

export default function About(){

    const[currentItem ,setItem] = useState(2)
    const[showInfo, setInfo] =useState(0)
    const[width, setWidth] =useState(window.innerWidth)


    useEffect(()=>{

        setTimeout(
            ()=>{
            
             setItem(1)
    
            },35000
            );


        setTimeout(
          ()=>{
            setInfo(1)
          },6000
        )





     

       
    })


    return(

        <div>
        {width>1000?<div>
        

        {currentItem===2?<div>
            <div className ="about" style ={{padding: "16px 16px 16px 16px"}}>
                <div className ="_left-content " style ={{flex:3}}>
                  {/* <div className ="vegitable-info"  >
                    <img class ="left-image" src ="/servicesImages/technology4.jpg" width={400} height ={400}  alt ="vegetables"/>
                    </div> */}
                    

                </div>
                <div style ={{flex:3}} className ="_left-content">
                   
                      

                </div>

                <div style ={{flex:4}}>

                </div>

            </div>

            {/* <div className = "__element">
                      <div>
                       <BsMagic size ={50} color ="rgb(4, 29, 43)" style ={{opacity:0.4}}/>
                      </div>
                        <span>Our Mission</span>

                        <div style ={{fontSize:20,marginTop:10, fontWeight:"normal"}}>
                        AgVal Networks is dedicated to strengthening the links in the agricultural value chain..... 
                        </div>

                        <div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
                        width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
                         padding:"12px 12px 12px 12px", }}>
                            Read More
                        </div>


                      

                    </div> */}


                    <motion.div className = "leftside-content vegitable-info"
                      style ={{marginRight:"40px"}}
                      initial={{filter:"sepia(50%)", marginTop:"-200px",opacity:0.5,borderRadius:"50%", width:"fit-content", height:"fit-content" }}
                      animate={{filter:"sepia(0%)", marginTop:"0px",width:"30%",
                      opacity:0.8,borderRadius:"12px" ,padding: "16px 16px 16px 16px"
                      ,rotate:360,}}
                      transition={{duration:6}}
                      dragTransition={{ power: 0.2 }}
                  
                    
                    >
                      {/* <div>
                       <BsWind size ={80} className ="mother-fill"/>
                      </div> */}
                        {showInfo===1?<motion.div 
                         initial={{visibility:"hidden" }}
                         whileInView={{visibility:"visible" }}
                         transition={{duration:6,type: 'spring', restSpeed: 0.5}}
                        //  style ={{width:"30%"}}

                        >
                        {/* <span>Our Vision</span> */}

                        <div style ={{fontSize:27,marginTop:10, fontWeight:"bold"}}>

                        <div>
                     <BsMagic size ={50} color ="rgb(4, 29, 43)" style ={{opacity:0.4}}/>
                    </div>
                        Accelerating Agricultural Success through Innovation 
                        </div>

                      
                        </motion.div>:null}
                    </motion.div>


                   
                    
                    <div className ="__carousel">
                    <div>
                    {currentItem!==1?<div className ="__element2" onClick={()=>
                    setItem(1)}>

                       

                        


                    </div>:null}

                    {currentItem===1?<div className ="__element3">

                       

                        


                    </div>:null}
                    </div>

                    {currentItem!==2?<div style ={{marginLeft:18}} className ="__element2" onClick={()=>
                    setItem(2)}>

                       

                        


                    </div>:null}


                    {currentItem===2?<div className ="__element3" style ={{marginLeft:18}}>

                        

                        


                    </div>:null}
                    
                    
                    </div>
                    <Suspense>

                  {/* <Areas/> */}
                  </Suspense>
                  
        {/* <Footer/> */}
        </div>:null}
        {currentItem===1?<Home/>:null}
        </div>:null}


        {width<=1000?
        <div>
        {currentItem===2?
        <div>
        <div className='about-sm'
        >

<div >
<div className = "_element-sm" style ={{opacity:0.8}}>
<div>
  <div>
  <BsMagic color='goldenrod' size ={50}/>
  </div>

  <div style ={{fontSize:"30px", color:"green"}}>Our Mission</div>
  {/* <span style ={{color:"darkgreen", fontSize:23}}>___________  
  <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span> */}
</div>
  <span> AgVal Networks is dedicated to strengthening the links in the agricultural value chain..... </span>
  
  <div  style ={{marginTop:"12px"}}>
<a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/company"> <span className='bnm'>Read More</span></a>

</div>
 
</div>


<div className = "_element-sm" style ={{opacity:0.8}}>
<div>
  <div>
  <BsWind color='darkgreen' size ={50}/>
  </div>

  <div style ={{fontSize:"30px", color:"green"}}>Products</div>
  {/* <span style ={{color:"darkgreen", fontSize:23}}>___________  
  <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span> */}
</div>
  <span>Innovation meets agriculture. Our range of products is meticulously crafted to address the unmet needs of Africa's agriculture sector, ensuring sustainability, profitability ....
 </span>
 <div  style ={{marginTop:"12px"}}>
<a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/products"> <span className='bnm'>Read More</span></a>

</div>
 
</div></div>


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




       

        </div>


        
        <Suspense>

        <Areas/>
        </Suspense>
        
       <Footer/>
       <Waves/>
         </div>:null}
        
        
         {currentItem===1?<Home/>:null}
        </div>:null}




        </div>


    )
}