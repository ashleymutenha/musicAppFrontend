//home page where user is shown upon completing authentication

import { BsArrowRight, BsMusicNoteBeamed, BsMusicNoteList, BsMusicPlayerFill, BsSearch, BsSoundwave } from "react-icons/bs";
import Header from "../components/Header";
import "../css/userpage.css"

import {Swiper, SwiperSlide} from 'swiper/react'

import { A11y, Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Waves from "../components/Waves";
import { useEffect, useState } from "react";


export default function UserPage(){

   
    
    // function to get user's username from redirected url
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      } 
   
    }



    const [trendingTracks, setTrendingTracks] = useState([])

   const  username =getQueryVariable("username")


    localStorage.setItem('username', username)


    // google.mashups.properties['username'].

    useEffect(()=>{
        getTrendingSongs()
    })
    const toService =()=>{

    }
//redirect to User's Favourite Albums and Artist's Page
    const toFavourites =()=>{
        
        window.location.replace("/favourites")
    }


   

// function to get trending songs shown on home Page
    async function getTrendingSongs() {

        await fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=4c6a539445c920ae57b3868a7a8612ab&format=json',{
            headers:{"Accept":"application/json",
             "Content-Type":"application/json"
        }
        }).then((res)=>res.json()).
        then((_res)=>{
            let tracks =[]
            let count =0
            setTrendingTracks(_res.tracks.track)
          
           console.log(getTop5Tracks())
        })
    }
     

    function getTop5Tracks(){
        let tracks =[]
        let count =0;
        while(count<6){
            tracks.push(trendingTracks[count])
         count+=1
        }
        return tracks
    }
   
    
    return(
        <div>
          <Header/>

          <div className ="upperSection">

          </div>

         {getTop5Tracks().length!=0? <div className ="lowerSection" style ={{background:"whitesmoke"}}>
            <div style ={{display:"flex"}}>
                <div style ={{flex:1, padding:"20px"}}>
            <BsSoundwave size = {40}  color ="brown"/>
            </div>

            <div style ={{flex:6, fontSize:"38px", color:"rgb(20, 55, 38)", fontWeight:"bold" , padding:"20px"}}>
            Trending Songs
            </div>
            </div>
             <div style ={{ }}>
            <Swiper modules={[Navigation,Pagination,A11y,Scrollbar,Autoplay]} 
                    pagination={{clickable:true}}
                    scrollbar={{draggable:true}}
                    slidesPerView={3}
                    spaceBetween={"0px"}
                
                    autoplay ={{delay:6000}}
                    style ={{
                       
                    "--swiper-scrollbar-bg-color": "gray",
                    "--swiper-scrollbar-drag-bg-color": "beige",
                    "--swiper-pagination-bullet-inactive-color": "white",
                    "--swiper-pagination-bullet-inactive-opacity": 0.9,
                }}
                    effect='fade'
                    
                    >
                     {getTop5Tracks().map((track)=>{return (<SwiperSlide >
                    <div className ="mat" style ={{display:"flex", backgroundImage:'url(./servicesImages/mj.jpg)'}}>
                 
                        <div style ={{flex:6}}>
                        <div className ="card" style ={{width:"fit-content", padding:"12px 12px 12px 12px", marginTop:"5%", marginBottom:"30%",
                         background:"rgb(52, 81, 59)", color:"whitesmoke", opacity:0.9, fontSize:"18px"}}>
                        {track!=undefined?<span>{track['name']}</span>:null}

                        </div>
                            
                            <div style ={{marginTop:"3%", borderRadius:"12px", background:"beige", padding:"13px"}}>
                                <h4>Artist</h4>

                                {track!=undefined?<div style ={{color:"brown", fontSize:"26px"}}>{track.artist.name}</div>:null}
                            </div>


                        <div style ={{marginTop:"20%"}}  className ="view-more" onClick ={()=>toService(0)}>
                             View More
                        </div>

                       

                        </div>

                        <div style ={{flex:6}}>



</div>

                        


                    </div>
                    </SwiperSlide>)})}

                   
                     <SwiperSlide >

                   
                     </SwiperSlide>
                     
                    </Swiper>
                    </div>
            
          </div>:null}
          <Waves/>


          <div className = "upperSectionContent" style ={{padding:"20px", display:"flex", flexDirection:"column"}}>
               <div style ={{display:"flex", marginLeft:"20%"}}>
                  <div style ={{width:"fit-content", padding:"12px", background:"rgb(22, 61, 40)", height:"60px"}}><BsSearch size ={30} color ="#ffff"/></div>
                  <div><input type ="text" className ="form-controller" placeholder ="Search Artist" name ="artist" style ={{width:"400px",height:"60px", fontSize:"20px"}}
                   onChange={(e)=>{
                      localStorage.setItem('artist', e.target.value)
                   }}
                  /></div>
                  <div style ={{background:"beige", padding:"12px", width:"fit-content", fontSize:"19px", cursor:"pointer"}}

                  onClick={()=>{
                    window.location.replace("/artist")
                  }}
                 
                  >Search</div>
               </div>
            <div style ={{padding:"15px", background:"whitesmoke", borderRadius:"12px", width:"fit-content",
             height:"fit-content",marginTop:"3%", marginLeft:"20%",opacity:0.9}}>

                <div><h3>Search Album</h3></div>
               <div style ={{display:"flex", }}>
                  <div style ={{width:"fit-content", padding:"12px", background:"rgb(22, 61, 40)", height:"60px"}}><BsSearch size ={30} color ="#ffff"/></div>
                  <div><input type ="text" className ="form-controller" placeholder ="Enter Artist" style ={{width:"400px",height:"60px", fontSize:"20px"}}
                     onChange={(e)=>{
                        localStorage.setItem('artist', e.target.value)
                     }}
                  /></div>
                  </div>


                  <div style ={{display:"flex",marginTop:"2%" }}>
                  <div style ={{width:"fit-content", padding:"12px", background:"rgb(22, 61, 40)", height:"60px"}}><BsSearch size ={30} color ="#ffff"/></div>
                  <div><input type ="text" className ="form-controller" placeholder ="Enter Album" style ={{width:"400px",height:"60px", fontSize:"20px"}}
                     onChange={(e)=>{
                        localStorage.setItem('album', e.target.value)
                     }}
                  /></div>
                  </div>


                   
                  <div style ={{background:"brown", padding:"12px", width:"fit-content", fontSize:"19px",cursor:"pointer", marginTop:'2%', color:"white"}}
                  
                  onClick={()=>{
                    window.location.replace("/album")
                  }}
                  
                  >Search</div>

              
              
               </div>


               </div>

              <div style = {{ display:"flex", position:"absolute", top:"46%", left:"64%"}}>
               
               <div style ={{display:"flex", flex:2, width:"fit-content", marginTop:"3rem",}}>
                  <div className ="myFavourites">
                     <div style ={{flex:8, }} className= "upperTop" >
                        <div style ={{padding:"9px"}}>
                            <BsMusicNoteList size ={40} color ="gold" opacity={0.9}/>
                        </div>
                        <div style ={{marginLeft:"2%", color:"whitesmoke",fontWeight:"bold" }}><span style ={{fontSize:"34px"}}>My Favourites</span></div>
                     </div>


                     <div className ="bottomTop" style ={{flex:2, padding:"2px"}}>

                     <div style ={{display:"flex"}} onClick={toFavourites}>
                               <div style ={{marginLeft:"30%", 
                               marginTop:"5%", fontSize:"28px", color:"beige"}}>Visit Page</div>
                               <div
                               style ={{
                               marginTop:"6%", marginLeft:"4%"}}>
                               <BsArrowRight size ={30} color="white"/>
                               </div>
                            </div>
                     </div>
                            
                  </div>
               </div>
               </div>

          </div>
        
    )

}