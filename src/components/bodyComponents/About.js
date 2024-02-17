import '../css/about.css'

import Body from '../Body'
import Footer from './footer'
import { useState,useEffect } from 'react'
import {BsMotherboard, BsMagic, BsFillEvStationFill, BsWind, BsGearWideConnected} from'react-icons/bs'
import Areas from './Areas'
export default function About(){

    const[currentItem ,setItem] = useState(2)
    const[showInfo, setInfo] =useState(0)
    const[width, setWidth] =useState(window.innerWidth)


    useEffect(()=>{

        setTimeout(
            ()=>{
            
             setInfo(1)
    
            },10000
            )

        setTimeout(
        ()=>{
         setItem(1)
         

        },20000
        )
    })


    return(

        <div>
        {width>1000?<div>
        

        {currentItem===2?<div>
            <div className ="about">
                <div className ="_left-content " style ={{flex:3}}>
                  <div className ="vegitable-info"  >
                    <img class ="left-image" src ="/servicesImages/wheatField.jpg" width={400} height ={400}  alt ="vegetables"/>
                    </div>
                    

                </div>
                <div style ={{flex:3}} className ="_left-content">
                   
                      

                </div>

                <div style ={{flex:4}}>

                </div>

            </div>

            <div className = "element">
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


                      

                    </div>


                    {showInfo===1?<div className = "leftside-content vegitable-info">
                      {/* <div>
                       <BsWind size ={80} className ="mother-fill"/>
                      </div> */}
                        <span>Our Vision</span>

                        <div style ={{fontSize:20,marginTop:10, fontWeight:"normal"}}>
                        At AgVal Networks, we envision a future where the agricultural value chain in Africa ....
                        </div>

                        <div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
                        width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
                         padding:"12px 12px 12px 12px", marginLeft:60}}>
                            Read More
                        </div>
                    </div>:null}


                   
                    
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
        <Areas/>
        <Footer/>
        </div>:null}
        {currentItem===1?<Body/>:null}
        </div>:null}


        {width<=1000?
        <div>
        {currentItem===2?
        <div>
        <div className='about-sm'
        >

<div >
<div className = "_element-sm">
<div>
  <div>
  <BsMagic color='goldenrod' size ={50}/>
  </div>

  <div style ={{fontSize:"30px", color:"green"}}>Our Mission</div>
  {/* <span style ={{color:"darkgreen", fontSize:23}}>___________  
  <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span> */}
</div>
  <span> AgVal Networks is dedicated to strengthening the links in the agricultural value chain..... </span>
  
  <div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
                        width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
                         padding:"12px 12px 12px 12px", marginLeft:60}}>
                            Read More
                        </div>
 
</div>


<div className = "_element-sm" >
<div>
  <div>
  <BsWind color='darkgreen' size ={50}/>
  </div>

  <div style ={{fontSize:"30px", color:"green"}}>Our Vission</div>
  {/* <span style ={{color:"darkgreen", fontSize:23}}>___________  
  <span style ={{marginLeft:18}}>COMMITTED TO SUCCESS</span></span> */}
</div>
  <span>At AgVal Networks, we envision a future where the agricultural value chain in Africa ....
 </span>
  
  <div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
                        width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
                         padding:"12px 12px 12px 12px", marginLeft:60}}>
                            Read More
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


        

        <Areas/>
       <Footer/>
         </div>:null}
        
        
       {currentItem==1?<Body/>:null}
        </div>:null}




        </div>


    )
}