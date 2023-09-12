import { BsFillBoxFill, BsGearWide, BsGearWideConnected, BsMinecart, BsScrewdriver,BsTagFill, BsSpeedometer,BsFillBagHeartFill, BsFillBagFill, BsFillBandaidFill, BsFillCpuFill } from "react-icons/bs";
import { solutions } from "../../resources/info";
import Footer from "../Footer";
function Solutions(){
      const data =solutions
    return (<div style ={{marginTop:"120px",fontSize:"20px"}}>

         <div style ={{paddingLeft:10, paddingRight:10, paddingTop:10 ,paddingBottom:10,
         marginLeft:"4%", marginRight:"4%", borderRadius:12}}>
                               <div style ={{width:"fit-content",padding:"5px 5px 5px 5px",border:"1px lightgrey solid", borderRadius:"12px", }}>
                                <h4 style ={{color:"green"}}>Our Solutions</h4>
                               <div style ={{display:"flex",opacity:0.8 }}>
                                <div><BsSpeedometer className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", borderRight:"1px solid green", paddingRight:"2px"}}/></div>
                                <div><BsGearWideConnected className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", paddingLeft:"2px"}}/></div>
                               </div>
                               </div>
                <div className ="fs-3 content-heading "></div>

                <div>
                    <p style ={{fontFamily:"cursive"}}>{data.Introduction}</p>
                </div>


        </div>

          
        <div style={{background:"#397453"}}>
            <div class ="fs-3 " style ={{fontFamily:"cursive", marginLeft:"6%",color:"white", borderBottom:"1px solid darkgrey",width:"fit-content"}}> Some of Our Solutions Include:</div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"left",borderBottom:"1px solid darkgrey"}}>
        

        {data.problemAreas.map((solutionArea,key) =>{return <div  style={{background:"#397453",color:"black"}}>
           <div className ="mb-2 mt-2" style ={{border:"1px solid lightgrey", padding:"10px 10px 10px 10px", borderRadius:"12px",width:"600px",marginLeft:"30px",background:"hsl(90, 4%, 78%)"}}>

            <div style ={{marginLeft:"80%"}}>
            <BsFillCpuFill class ="fs-2" style={{color:"darkgreen", opacity:0.5}}/>
            </div>

           <span className ="fs-4 content-heading" style ={{color:"darkgreen"}}><span style ={{background:"hsl(90, 17%, 93%)", borderRadius:"50%", padding:"6px 15px 6px 15px",color:"black"}}>{key+1}</span> <span style ={{color:"darkgreen", marginLeft:"3%",borderBottom:"1px solid goldenrod"}}>{solutionArea.area}</span>
           </span>

           <div className = "home-description" style ={{fontFamily:"cursive"}}>
               <p><span className ="fs-4" style ={{color:"goldenrod"}}>Problem:</span> {solutionArea.problem}</p>
               <p><span className ="fs-4 mt-2" style ={{color:"darkgreen"}}>Solution:</span> {solutionArea.solution}</p>

            </div></div>
         
        </div>})}

    
        </div></div>
        <Footer/>
    </div>)

}

export default Solutions;