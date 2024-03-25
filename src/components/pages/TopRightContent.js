import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function TopRight(){

    const [showInfo, setShowInfo] = useState(1)
    return (
        <div>

{showInfo===1?<div style ={{display:"flex"}}>  
<div className ="_collective" style ={{flex:12}}>
<div className ="__animals" style ={{flex:8}}>
  
<div style ={{opacity:0}}>At AgVal Networks, we deeply value the power of collaboration.
 We believe that by combining our strengths with those of our esteemed partners, 
 we can address some of the most pressing challenges facing the agricultural sector in Africa.
  Our partners play an integral role in....</div>
  </div>

  <div className ="__lowerCollection" style ={{flex:8}}>

{/* <div className ="icon-container">

<BsInboxFill color='rgb(231, 232, 216)' size ={30}/> 
</div> */}

<div className ="submenu-heading">Products</div>

<div className ="_submenu">

Innovation meets agriculture. Our range of products is meticulously crafted to address the unmet needs of Africa's agriculture sector, ensuring sustainability, profitability, and growth at every step of the value chain.


<div  style ={{marginTop:"12px"}}>
<a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/products"> <span className='bnm'>Read More</span></a>

</div>

</div>
</div>

  </div>

  <div style ={{flex:1}} onClick={()=>{
    setShowInfo(2)
  }}>
            <div className ="right-btn" style ={{ width:"fit-content", height:"fit-content", padding:"18px"}}>
               <div ><BsArrowRight style ={{marginTop:"30%", marginLeft:"4%"}} size ={40} /></div>
            </div>
  </div>
  </div>:null}




  {showInfo===2?<div style ={{display:"flex"}}>  
<div className ="_collective" style ={{flex:12}}>
<div className ="__animals2" style ={{flex:8}}>
  
<div style ={{opacity:0}}> At AgVal Networks, we are committed to fortifying the agricultural value chain. 
                      Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
                      we aim to uplift Africa's agricultural sector, one solution at a time.</div>
  </div>

  <div className ="__lowerCollection" style ={{flex:8}}>

{/* <div className ="icon-container">

<BsInboxFill color='rgb(231, 232, 216)' size ={30}/> 
</div> */}

<div className ="submenu-heading">Services</div>

<div className ="_submenu">

At AgVal Networks, we are committed to fortifying the agricultural value chain. 
                      Through our blend of innovative technology, extensive industry insights, and a commitment to sustainable growth, 
                      we aim to uplift Africa's ....

<div  style ={{marginTop:"12px"}}>
<a
        className ="btn-view" 
 style ={{ border:"1px solid rgb(3, 59, 50)", 
width:"fit-content", borderRadius:"12px", fontSize:19, fontWeight:"bold",
 padding:"12px 12px 12px 12px", marginLeft:60}}
       href ="/services"> <span className='bnm'>Read More</span></a>

</div>

</div>
</div>

  </div>

  <div style ={{flex:1}}  onClick={()=>{
    setShowInfo(1)
  }}>
            <div className ="right-btn" style ={{ width:"fit-content", height:"fit-content", padding:"18px"}}>
               <div ><BsArrowLeft style ={{marginTop:"30%", marginLeft:"4%"}} size ={40} /></div>
            </div>
  </div>
  </div>:null}
        </div>
    )
}