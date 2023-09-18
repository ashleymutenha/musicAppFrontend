import {  BsDice5Fill,BsBag,BsBagFill } from "react-icons/bs";
import { products } from "../../resources/info";
import Footer from "../Footer";
function Products(){

     const data = products

    return (
        <div style ={{marginTop:"120px",fontSize:"20px",background:"#397453"}}>
            <div style ={{padding:"5px 5px 5px 5px", borderTop:"null",background:"#ffff"}}>
            <div class ="mb-2" style ={{width:"fit-content",padding:"5px 5px 5px 5px",border:"1px lightgrey solid", borderRadius:"12px",marginLeft:"5%",marginTop:"40px" }}>
                                <h4 style ={{color:"green"}}>Products</h4>
                               <div style ={{display:"flex",opacity:0.8 }}>
                                <div><BsBag className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod", borderRight:"1px solid green", paddingRight:"8px"}}/></div>
                                <div><BsBagFill className ="fs-1 mt-1"   style ={{borderRadius:"",color:"goldenrod",paddingLeft:"5px"}}/></div>
                               </div>
                               </div> 
            <div style ={{paddingLeft:10, paddingRight:10, paddingTop:10 ,paddingBottom:10,
         marginLeft:"4%", marginRight:"4%", borderRadius:12}}>
                    <div>
                    <p style ={{fontFamily:"cursive"}}>{data.Introduction}</p>
                  </div>
            </div>

            
            
            
            
            
            
            </div>
           
           <div style ={{border:"1px solid lightgrey", marginTop:"20px", marginLeft:"20px", marginRight:"20px", marginBottom:"20px", borderRadius:"12px",background:"#ffff", padding:"8px 8px 8px 8px" }}>
           <div class ="fs-3 " style ={{fontFamily:"cursive", marginLeft:"6%",color:"darkgreen", borderBottom:"1px solid darkgrey",width:"fit-content"}}> Our Products:</div>

            <ul className ="list-group list-group-flush bg-white home-content">
       
                    
       {data.products.map((product,key)=>{return<li className ="list-group-item"   >

        <div style ={{marginLeft:"80%", opacity:0.5}}>
           <BsDice5Fill className ="fs-2" style ={{color:"darkgreen"}}/>
        </div>
         
          <span className ="fs-4 content-heading" style ={{color:"darkgreen"}}><span style ={{background:"#ffff", borderRadius:"50%", padding:"6px 15px 6px 15px",color:"darkgreen", border:"2px dashed goldenrod"}}>{key+1}</span> <span style ={{color:"darkgreen", marginLeft:"3%",borderBottom:"1px solid goldenrod"}}></span>
                
          </span>
          <span className ="fs-3">{product.product}</span>

          <div className = "home-description">
              <p><span style ={{color:"darkgreen"}}>Description:</span><span style ={{marginLeft:"12px"}}>{product.description}</span> </p>
           </div>

           <div className = "home-description">
              <p><span style ={{color:"goldenrod"}}>Key Feature:</span><span style ={{marginLeft:"12px"}}>{product.feature}</span> </p>
           </div>
        
       </li>})}
       </ul>
       </div>
       <Footer/>
       </div>
    )
}

export default Products;