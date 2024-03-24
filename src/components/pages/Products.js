import Header from "../Header"
import "../css/products.css"
import { products } from "../../resources/info";
import { BsBasket, BsBricks, BsCommand } from "react-icons/bs";
import { useState } from "react";
import Footer from "../bodyComponents/footer";
import Waves from "../bodyComponents/Waves";
export function Products(){
   const data = products
   const [width, setWidth] =useState(window.innerWidth)
    return (

        <div>
            <Header/>
            <div className ="upperSegment">

            <div style ={{flex:6}}>

<div className ="card"  style ={{ height:"100%",background:"rgb(255, 254, 254)", opacity:0.7, fontSize:"26px", color:"black",}}>
<div  style ={{ padding:"12px 12px 12px 12px"}}>

<div>
<BsBricks size ={50} color ='darkgreen' style ={{opacity:0.8}} />
</div>
Innovation meets agriculture. Our range of products is meticulously crafted to address the unmet needs of Africa's agriculture sector, ensuring sustainability,
profitability, and growth at every step of the value chain.
</div>



</div>
</div>

            {width>=1000?<div className ="left-segment" style ={{flex:2}}></div>:null}

            <div style ={{flex:2}}>

{width>=1000?<div  className ="card" style ={{display:"flex", marginBottom:"30%",
     background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
    <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
   <div className ="_card3" ></div>
   </div>
   <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> Products</div>
  
</div>:null}


</div>


                


                
            </div>


            <div className="_flexBox" style ={{display:"flex", flexWrap:"wrap",flexDirection:"column", background:"whitesmoke"}}>


             {data.products.map((product,key)=><div class ={product.class1} style ={{flex:3}}>
                <div style ={{display:"flex", flexDirection:"column", borderTop:"1px solid lightgrey"}}>

                    
                    <div className ={product.class1} style ={{flex:8,  fontSize:"33px"}}>

                    <div style ={{marginLeft:"5%", height:"60px", width:"60px",
                         borderRadius:"50%", padding:"10px", background:"beige", opacity:0.8,
                         textAlign:"center", marginTop:"5%", fontSize:"22px"}}><div style ={{marginTop:"14%", marginBottom:"30%"}}>{key+1}</div></div>

                       <div style ={{marginTop:"10%", marginLeft:"5%",width:"30%"}}>
                        <div style ={{background:"#fdfff5", color:"black", padding:"12px", borderRadius:"12px", opacity:0.8, width:"fit-content"}}>
                        {product.product}</div>
                        </div>
                    </div>

                    {/* <div style ={{flex:8}} className ={product.class}></div> */}
                </div>
                <div style ={{marginLeft:"20px",marginRight:"20px", marginBottom:"20px", marginTop:"10%"}}>
                   <div style ={{textAlign:"center", fontSize:"28px"}}>
                    </div>
                    <div class ="card" style ={{padding:"12px", background:"#fdfff5", opacity:0.9}}>
                    <div style ={{marginTop:"1%"}}>
                      <div style ={{fontSize:"22px"}}> <span style ={{color:"darkgreen"}}>Description:</span>

                      <span style ={{marginLeft:"4%", }}>{product.description}</span>
                      
                      </div>
                    </div>

                    <div style ={{marginTop:"1%"}}>
                      <div style ={{fontSize:"22px"}}> <span style ={{color:"goldenrod"}}>Key Feature:</span>

                      <span style ={{marginLeft:"4%"}}>{product.feature}</span>
                      
                      </div>
                    </div>
                    </div>
                    </div>
             </div>)}


            </div>
            <Footer/>
            <Waves/>

            </div>
    )
}