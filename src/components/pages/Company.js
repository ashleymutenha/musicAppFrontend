import { BsBookmark, BsCashStack, BsDatabase, BsMotherboardFill, BsPeople, BsPiggyBank } from 'react-icons/bs'
import '../css/company.css'
import { homeInfo } from '../../resources/info'
import Footer from '../bodyComponents/footer'
import Header from '../Header'
import Waves from '../bodyComponents/Waves'


import { useState } from 'react'
export default function Company(){

    const data = homeInfo
    const[width, setWidth] =useState(window.innerWidth)


return(

    <div>
       <Header/>
       {width>=1000?<div style={{display:"flex"}}>

       <div className ="lowerContent" style ={{flex:3}}>
            <div style ={{textAlign:"center", fontSize:"30px",marginTop:"10px", marginBottom:"8px"
           }}><span style ={{ borderBottom:"2px solid goldenrod"}}>Our Vision</span></div>
        <p style ={{fontSize:"18px"}}>
            {homeInfo.Vision}
        </p>


     
        </div>
        <div className ="topContent" style ={{flex:6}}>
           
       <div style ={{display:"flex", height:"550px", flex:8}}>

     
        
         <div className = "element" style ={{flex:6, marginTop:"1%", padding:"12px"}}>
                      <div>
                     
                      </div>
                        {/* <span>Maximum Efficiency, Sustainability, and Profitability </span> */}

                   
                    </div>


                    <div style ={{flex:3}}>
                    <div  className ="card" style ={{display:"flex", marginBottom:"30%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> Mission and Vision </div>
                      
                    </div>

            </div>

                    </div>

                  

        <div className ="topContent-bottom" style ={{flex:6, background:"khaki", opacity:0.2}}>

            {/* <div style ={{marginRight:"8rem",width:"20rem"}}>
                
                <div style ={{marginLeft:"5.5rem"}}><BsCashStack size ={50} color ="white"/></div>
                <div style ={{marginTop:"3px",color:"rgb(232, 226, 122)", fontSize:"30px",marginLeft:"2rem"}}>Value For Money</div>

                <div style ={{marginTop:"5px",color:"#ffff", fontSize:"18px"}}>Turn to us for all your 
                agricultural needs and be guaranteed of exceptional value for your investment</div>

               
            </div> */}


            {/* <div style ={{width:"20rem" }}>
                
                <div style ={{marginLeft:"5.5rem"}}><BsPeople size ={50} color ="white"/></div>
                <div style ={{marginTop:"3px",color:"rgb(232, 226, 122)", fontSize:"30px",marginLeft:"2rem"}}>Partner with us</div>

                <div style ={{marginTop:"5px",color:"#ffff", fontSize:"18px"}}>Interested in our work and want to partner?</div>
                <div style ={{marginTop:"3px",color:"#ffff", fontSize:"18px"}}>Feel free to contact us</div>
               
            </div> */}

        </div>

        </div>
        </div>:null}



        {width<1000?<div><div className ="topContent-sm">
        <div className = "element" style ={{flex:8, marginTop:"5%"}}>
                      <div>
                     
                      </div>
                       

                   
                    </div>

       

        </div>

        <div className ="lowerContent" style ={{flex:3}}>
            <div style ={{textAlign:"center", fontSize:"30px",marginTop:"10px", marginBottom:"8px"
           }}><span style ={{ borderBottom:"2px solid goldenrod"}}>Our Vision</span></div>
        <p style ={{fontSize:"18px"}}>
            {homeInfo.Vision}
        </p>


     
        </div>


        </div>
        
        :null}





      

        <div className ="mission" style ={{background:"#ffff"}} >

           
            <div className ="pictureGallery" style ={{flex:6}}>

            {width>=1000?<div style ={{flex:1, background:"rgb(20, 55, 38)", opacity:0.8,
                  height:"fit-content",
                
                color:"#ffff", fontSize:"26px", padding:"12px 12px 12px 12px",}}>

Africa with an excellent Agricultural Value Chain

                </div>:null}


                {width<1000?<div style ={{flex:1, background:"rgb(20, 55, 38)", opacity:0.8,
                  height:"fit-content",
                
                color:"#ffff", fontSize:"16px", padding:"12px 12px 12px 12px",}}>

Africa with an excellent Agricultural Value Chain

                </div>:null}

                

            <div style ={{flex:20 }}> 
                <img class ="__left-image" src ="/servicesImages/farm2.jpg"  style ={{}}  alt ="vegetables"/>
                </div>

               

            </div>


            
            <div >

            </div>
        


        <div  style = {{flex:5, borderTop:"2px solid rgb(20, 55, 38)"
          }}>
                       <div style ={{textAlign:"center", fontSize:"30px",marginTop:"10px", marginBottom:"8px"
           }}><span style ={{ borderBottom:"2px solid goldenrod"}}>Our Mission</span></div>

                    

         <div style ={{ marginLeft:"10px"}}>{data.Mission.map((_data,key)=>{

             

               if (typeof(_data.paragraph)!=='string'){

                return <p id ={key} style ={{marginLeft:"10px",fontSize:"18px"}}>

              

                
                <strong style ={{color:"rgb(22, 52, 20)"}}>{_data.paragraph.keyPoint}</strong> {_data.paragraph.explanation}</p>
             }

             if (typeof(_data.paragraph)==='string') 
             {

                return <p id ={key} style ={{fontSize:"18px"}}>

               

                
                {_data.paragraph}</p>
             }
             return null
            })}
             </div>
                    
             
        </div>
        </div>

        <Footer/>
        <Waves/>
      
        
    </div>
)


}