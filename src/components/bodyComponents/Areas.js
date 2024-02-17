import '../css/areas.css'
import {  BsCollection, BsCpuFill, BsInboxesFill, BsPeopleFill } from 'react-icons/bs'
import { useState } from 'react';
export default function Areas(){
    const[width, setWidth] =useState(window.innerWidth)

    // var[showPictures, setPictures] = useState(true)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setPictures(!showPictures);
    //     }, 30000)
    // })

    return(
      
        <div className ="_container" style ={{borderTop:"1px solid rgb(222, 200, 149)" }}>
            <BsCollection color ="rgb(222, 200, 149)" size ={70} style ={{opacity:0.8}}/>
            <div className='_heading' ></div>
            {width>1000?<div className ="areas">
                <div className ="firstSlide collective">
                <div className ="crop">
                  
                </div>

                <div className ="lowerCollection">

                      <div className ="icon-container">

                      <BsCpuFill color='rgb(231, 232, 216)' size ={40}/> 
                      </div>

                      <div className ="submenu-heading">Services</div>

                      <div className ="submenu">

                      At AgVal Networks, we are committed to fortifying the agricultural value chain. 
                      Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
                      we aim to uplift Africa's agricultural sector, one solution at a time.


                      <div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
                        width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
                         padding:"12px 12px 12px 12px", marginLeft:60}}>
                            Read More
                        </div>

                      </div>
                </div>

                </div>
                 
                {/* <div className ="collective">
                <div className ="goats secondSlide">
                  
                </div>


                <div className ="lowerCollection">

<div className ="icon-container">

<BsMotherboardFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Our Solutions</div>

<div className ="submenu">

Our comprehensive solutions are not just individual products or services, 
but integrated responses tailored to address these multifaceted challenges.
By marrying cutting-edge technology with deep industry knowledge, we present a suite of solutions designed to empower...


<div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
  width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
   padding:"12px 12px 12px 12px", marginLeft:60}}>
      Read More
  </div>

</div>
</div>

                </div> */}


                <div className ="collective">
                <div className ="basket">
                  
                </div>

                <div className ="lowerCollection">

<div className ="icon-container">

<BsPeopleFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Partnerships</div>

<div className ="submenu">

At AgVal Networks, we deeply value the power of collaboration.
 We believe that by combining our strengths with those of our esteemed partners, 
 we can address some of the most pressing challenges facing the agricultural sector in Africa.
  Our partners play an integral role in....
  

<div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
  width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
   padding:"12px 12px 12px 12px", marginLeft:60}}>
      Read More
  </div>

</div>
</div>



                </div>
                
                <div className ="collective">
                <div className ="animals">
                  
                  </div>

                  <div className ="lowerCollection">

<div className ="icon-container">

<BsInboxesFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Products</div>

<div className ="submenu">

Innovation meets agriculture. Our range of products is meticulously crafted to address the unmet needs of Africa's agriculture sector, ensuring sustainability, profitability, and growth at every step of the value chain.


<div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
  width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
   padding:"12px 12px 12px 12px", marginLeft:60}}>
      Read More
  </div>

</div>
</div>
                  </div>

            </div>:null}


{width<=1000?<div className ="areas2">

<div className ="collective">
<div className ="crop ">
  
</div>

<div className ="lowerCollection">

<div className ="icon-container">

<BsCpuFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Services</div>

<div className ="submenu">

At AgVal Networks, we are committed to fortifying the agricultural value chain. 
Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
we aim to uplift Africa's agricultural sector, one solution at a time.


<div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
  width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
   padding:"12px 12px 12px 12px", marginLeft:60}}>
      Read More
  </div>

</div>
</div>
</div>

{/* <div className ="collective">
<div className ="goats">
  
</div>
</div> */}

<div className ="collective">
<div className ="basket">
  
</div>

<div className ="lowerCollection">

<div className ="icon-container">

<BsPeopleFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Partnerships</div>

<div className ="submenu">

At AgVal Networks, we deeply value the power of collaboration.
 We believe that by combining our strengths with those of our esteemed partners, 
 we can address some of the most pressing challenges facing the agricultural sector in Africa.
  Our partners play an integral role in....
  

<div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
  width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
   padding:"12px 12px 12px 12px", marginLeft:60}}>
      Read More
  </div>

</div>
</div>
</div>

<div className ="collective">
<div className ="animals">
  
  </div>

  <div className ="lowerCollection">

<div className ="icon-container">

<BsInboxesFill color='rgb(231, 232, 216)' size ={40}/> 
</div>

<div className ="submenu-heading">Products</div>

<div className ="submenu">

Innovation meets agriculture. Our range of products is meticulously crafted to address the unmet needs of Africa's agriculture sector, ensuring sustainability, profitability, and growth at every step of the value chain.


<div className ="btn-view" style ={{marginTop:8, border:"1px solid rgb(3, 59, 50)", 
  width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
   padding:"12px 12px 12px 12px", marginLeft:60}}>
      Read More
  </div>

</div>
</div>

  </div>

</div>:null}

        </div>
       
       
       )}
