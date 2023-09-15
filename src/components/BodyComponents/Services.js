import { services
 } from "../../resources/info";
 import { BsTools,BsScrewdriver,BsDice5Fill,BsMegaphone,BsFillDiscFill } from "react-icons/bs";
 import Footer from "../Footer";
function Services(){

    const data =services
    return (
    
    <div style ={{marginTop:"120px",fontSize:"20px",background:"#397453",}}>
        <div style ={{borderBottom:"1px solid lightgrey"}}>
  <div style ={{background:"white"}}>
<div style ={{paddingLeft:10, paddingRight:10, paddingTop:10 ,paddingBottom:10,
         marginLeft:"4%", marginRight:"4%", borderRadius:12,background:"#ffff",}}>
                               <div style ={{width:"fit-content",padding:"5px 5px 5px 5px",border:"1px lightgrey solid", borderRadius:"12px", }}>
                                <h4 style ={{color:"green"}}>Services</h4>
                               <div style ={{display:"flex",opacity:0.8 }}>
                                <div><BsTools className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", borderRight:"1px solid green", paddingRight:"2px"}}/></div>
                                <div><BsScrewdriver className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", paddingLeft:"2px"}}/></div>
                               </div>
                               </div>
                <div className ="fs-3 content-heading "></div>

                <div>
                    <p style ={{fontFamily:"cursive"}}>{data.Introduction}</p>
                </div>


                <div class ="fs-3 mt-3 " style ={{fontFamily:"cursive", marginLeft:"%",color:"darkgreen",width:"fit-content"}}> Our Services are outlined in detail below</div>



        </div></div>
        <div style ={{marginLeft:"40px", marginRight:"40px", marginTop:"8px"}}>
        {data.services.map((_service,key)=>{return <div class ="mb-2" style ={{border:"1px solid lightgrey", borderRadius:"12px", background:"#ffff",padding:"10px 10px 10px 10px"}}>
        <div style ={{display:"flex"}}>
        <div style ={{marginLeft:"1%", opacity:0.5}}>
           <BsFillDiscFill className ="fs-2" style ={{color:"goldenrod"}}/>
        </div>

        <div className="mb-2" style ={{marginLeft:"80%", opacity:0.5}}>
           <BsFillDiscFill className ="fs-2" style ={{color:"darkgreen"}}/>
        </div>
        </div>
        <div style ={{marginLeft:"4%"}} >
        <span className =" content-heading mt-2 mb-2" style ={{color:"darkgreen"}}><span style ={{background:"#ffff", borderRadius:"50%", padding:"6px 15px 6px 15px",color:"darkgreen", border:"2px dashed grey"}}>{key+1}</span> <span style ={{color:"darkgreen", marginLeft:"3%",borderBottom:"1px solid goldenrod"}}></span></span>
        </div>  
          <h3 class ="text-muted mt-2 ">{_service.service}</h3>
          {_service.description.map((description)=>{return<div>
            <h4 style ={{borderBottom:"1px solid goldenrod", width:"fit-content",color:"hsl(130, 25%, 40%)"}}>{description.heading}</h4>
            <p>{description.content}</p>
          </div>})}
        </div>})}</div>
    <div>

    </div></div>

      <Footer/>  
    </div>)
}

export default Services;