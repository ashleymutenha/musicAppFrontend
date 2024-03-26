import { BsBook, BsCompassFill } from "react-icons/bs";
import Header from "../Header";
import "../css/aboutus.css"
import Footer from "../bodyComponents/footer";
import Waves from "../bodyComponents/Waves";
import { useState } from "react";
export default function AboutUs(){


    const[width, setWidth] =useState(window.innerWidth)


    return(
        <div>
            <Header/>
           {width>=1000? <div style ={{display:"flex"}}>
            <div className ="lower" style ={{flex:5}}>
            <div style ={{textAlign:"center", fontSize:30, marginBottom:"1%"
            }}><span style ={{ borderBottom:"2px solid goldenrod"}}>Company History</span> </div>
            Founded in 2021, AgVal Networks (PTY) LTD has quickly emerged as a leading provider of services that strengthen the agricultural value chain. Our approach emphasizes the development of strategic information transmission services that add value to all stakeholders, from farmers to policy makers. With a strong presence in Botswana, our mission is to accelerate 
            Africa's economic growth and upliftment of its people by supporting the agricultural industry.
            </div>
            <div className="__top-content" style ={{flex:6}}>
               <div style ={{flex:7}}></div>

               <div style ={{flex:3}}>
               <div  className ="card" style ={{display:"flex", marginBottom:"30%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> About Us </div>
                      
                    </div>
               </div>


            </div>

           
            </div>:null}



            {width<1000? <div style ={{}}>
          
            <div className="__top-content" style ={{flex:6}}>
               <div style ={{flex:7}}></div>

               <div style ={{flex:3}}>
               <div  className ="card" style ={{display:"flex", marginBottom:"30%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> About Us </div>
                      
                    </div>
               </div>


            </div>


            <div className ="lower" style ={{flex:5}}>
            <div style ={{textAlign:"center", fontSize:30, marginBottom:"1%"
            }}><span style ={{ borderBottom:"2px solid goldenrod"}}>Company History</span> </div>
            Founded in 2021, AgVal Networks (PTY) LTD has quickly emerged as a leading provider of services that strengthen the agricultural value chain. Our approach emphasizes the development of strategic information transmission services that add value to all stakeholders, from farmers to policy makers. With a strong presence in Botswana, our mission is to accelerate 
            Africa's economic growth and upliftment of its people by supporting the agricultural industry.
            </div>

           
            </div>:null}

           

            {width>=1000?<div style ={{display:"flex" ,background:"#ffff"}}>
                   <div style ={{flex:4,background:"rgb(241, 242, 237)",padding:"10px"}}>
                    <div class ="flag"></div>
                      <div style ={{fontSize:28,borderBottom:"2px solid darkgreen", width:"fit-content"}}>Agval Networks in Botswana</div>
                      <div>
                      AgVal Networks has a strong footprint in Botswana. Our headquarters in Gaborone serve as the hub for our extensive operations, and our registered entity in Zimbabwe reflects our commitment to expanding our reach. We have identified three core unmet needs in our market and have initiated strategies to address them through innovative tools and platforms. Our short-term plans include developing various platforms and tools for farmers,
                       governments, and other stakeholders in the agricultural value chain.
                      </div>
                   </div>

                   <div style ={{flex:4,background:"rgb(220, 226, 185)",padding:"10px"}}>
                    <div style ={{ marginBottom: "3%", opacity:0.7}}>
                        <BsCompassFill size ={130}color ="rgb(72, 108, 58)"/>
                    </div>
                   <div style ={{fontSize:28,borderBottom:"2px solid darkgreen", width:"fit-content"}}>AgVal's Strategic Direction</div>

                   With a multifaceted approach, AgVal Networks aims to be a global leader in the agricultural value chain. Our goals are vast yet focused, from providing data-generating equipment to offering consultancy services that bridge the gaps in agriculture. We believe in innovation, research, and supporting youth through internships and promoting technologies for improved farm management. Our work with WFP and our collaboration with
                    AON demonstrate our commitment to providing real solutions to real problems.
                     
                   </div>

                   <div style ={{flex:4,background:"rgb(223, 233, 219)", padding:"10px"}}>
                   <div class ="climapp"></div>

                   <div style ={{fontSize:28,borderBottom:"2px solid darkgreen", width:"fit-content"}}>ClimApp Technologies Division</div>

                   Our Climate Services division, ClimApp Technologies, specializes in providing 
                   climate services to users in the agricultural value chain, such as farmers. 
                   This includes expanding to provide instrumentation to support climate services 
                   like weather stations, as well as support for stakeholders in the cold supply chain. 
                   ClimApp Technologies has its dedicated focus and is developing its own website to cater 
                   to specialized needs in climate services.
                   </div>
            </div>:null}


            {width<1000?<div style ={{}}>
                   <div style ={{flex:4,background:"rgb(241, 242, 237)",padding:"10px"}}>
                    <div class ="flag"></div>
                      <div style ={{fontSize:28,borderBottom:"2px solid darkgreen", width:"fit-content"}}>Agval Networks in Botswana</div>
                      <div>
                      AgVal Networks has a strong footprint in Botswana. Our headquarters in Gaborone serve as the hub for our extensive operations, and our registered entity in Zimbabwe reflects our commitment to expanding our reach. We have identified three core unmet needs in our market and have initiated strategies to address them through innovative tools and platforms. Our short-term plans include developing various platforms and tools for farmers,
                       governments, and other stakeholders in the agricultural value chain.
                      </div>
                   </div>

                   <div style ={{flex:4,background:"rgb(220, 226, 185)",padding:"10px"}}>
                    <div style ={{ marginBottom: "3%", opacity:0.7}}>
                        <BsCompassFill size ={130}color ="rgb(72, 108, 58)"/>
                    </div>
                   <div style ={{fontSize:28,borderBottom:"2px solid darkgreen", width:"fit-content"}}>AgVal's Strategic Direction</div>

                   With a multifaceted approach, AgVal Networks aims to be a global leader in the agricultural value chain. Our goals are vast yet focused, from providing data-generating equipment to offering consultancy services that bridge the gaps in agriculture. We believe in innovation, research, and supporting youth through internships and promoting technologies for improved farm management. Our work with WFP and our collaboration with
                    AON demonstrate our commitment to providing real solutions to real problems.
                     
                   </div>

                   <div style ={{flex:4,background:"rgb(223, 233, 219)", padding:"10px"}}>
                   <div class ="climapp"></div>

                   <div style ={{fontSize:28,borderBottom:"2px solid darkgreen", width:"fit-content"}}>ClimApp Technologies Division</div>

                   Our Climate Services division, ClimApp Technologies, specializes in providing 
                   climate services to users in the agricultural value chain, such as farmers. 
                   This includes expanding to provide instrumentation to support climate services 
                   like weather stations, as well as support for stakeholders in the cold supply chain. 
                   ClimApp Technologies has its dedicated focus and is developing its own website to cater 
                   to specialized needs in climate services.
                   </div>
            </div>:null}

            {width>=1000?<div style ={{display:"flex"}}>
                <div class ="director" style ={{flex:6}}>
                    
                </div>
                <div style ={{flex:6, background:"whitesmoke", padding:"10px"}}>

                <span style ={{fontStyle:"italic"}}>"I am proud to lead AgVal Networks in our pursuit to innovate and enhance the agricultural value chain. With our focus on meteorological data management, agrometeorological data dissemination, and market discovery for farmers, we are committed to addressing the under-served needs in our target market. Our journey is guided by the ethos of creating robust business solutions that not only support the industry but also contribute to the larger goal of uplifting 
                the people of Africa. Together, we shall reach new heights."</span> – Dr. Tamuka Magadzire

                <div style ={{marginTop:"3%"}}>
                       <div style ={{fontSize:"23px",textAlign:"center", marginBottom:"1%"}}><span style ={{ borderBottom:"2px solid darkgreen"}}>Director Profile</span></div>

                       <div>
                       With a PhD in Agrometeorology Dr. Tamuka Magadzire is an experienced scientist specializing in data analysis for early warning, policy, and action. He has co-authored articles in climatology and food security, led the development of software applications for agrometeorological analyses, and provided training across multiple countries. As a Member of the Board of Trustees for the African Mountain Research Foundation, and a co-founding member of the Knowledge Impact Network’s African Solutions Impact Circle, Dr. Magadzire embodies a commitment to sustainable agriculture and social impact. His leadership at AgVal Networks is driven by innovation and a vision for agricultural advancement.
                       </div>

                </div>
                </div>

            </div>:null}


            {width<1000?<div style ={{}}>
                <div className ="director-sm" style ={{flex:8}}>
                    
                </div>
                <div style ={{flex:4, background:"whitesmoke", padding:"10px"}}>

                <span style ={{fontStyle:"italic"}}>"I am proud to lead AgVal Networks in our pursuit to innovate and enhance the agricultural value chain. With our focus on meteorological data management, agrometeorological data dissemination, and market discovery for farmers, we are committed to addressing the under-served needs in our target market. Our journey is guided by the ethos of creating robust business solutions that not only support the industry but also contribute to the larger goal of uplifting 
                the people of Africa. Together, we shall reach new heights."</span> – Dr. Tamuka Magadzire

                <div style ={{marginTop:"3%"}}>
                       <div style ={{fontSize:"23px",textAlign:"center", marginBottom:"1%"}}><span style ={{ borderBottom:"2px solid darkgreen"}}>Director Profile</span></div>

                       <div>
                       With a PhD in Agrometeorology Dr. Tamuka Magadzire is an experienced scientist specializing in data analysis for early warning, policy, and action. He has co-authored articles in climatology and food security, led the development of software applications for agrometeorological analyses, and provided training across multiple countries. As a Member of the Board of Trustees for the African Mountain Research Foundation, and a co-founding member of the Knowledge Impact Network’s African Solutions Impact Circle, Dr. Magadzire embodies a commitment to sustainable agriculture and social impact. His leadership at AgVal Networks is driven by innovation and a vision for agricultural advancement.
                       </div>

                </div>
                </div>

            </div>:null}

            <div className ="lowest">
            <div style ={{display:"flex"}}>
            {width>=1000?<div style ={{width:"60px", height:"60px", borderRadius:"50%", background:"goldenrod", marginBottom:"2%", opacity:0.2}}>

            </div>:null}

            {width>=1000?<div style ={{width:"60px", height:"60px", marginLeft:"80%", borderRadius:"50%", background:"darkgreen", marginBottom:"2%", opacity:0.2}}>
             
            </div>:null}
            </div>
            <div style ={{ fontSize:30, marginBottom:"1%"
            }}><span style ={{ borderBottom:"2px solid goldenrod"}}>Our Current and Future Plans:</span> </div>
           Our current and future plans are shaped by the needs of our market. Whether developing risk assessment tools, providing services to governments, or expanding our meteorological instruments, 
           we are determined to make a lasting impact and provide value for our clients.

           <div style ={{marginTop:"2%"}}>
           
           Thank you for visiting our About Us page. To learn more about our services or get in touch with us, please contact us on info@agvalnetworks.com
           </div>
            </div>
            <Footer/>
            <Waves/>
        </div>
    )
}