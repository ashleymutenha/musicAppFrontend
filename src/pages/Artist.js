
// function to show Website Section of Search Music Artist's Information

import { BsArrowRight, BsCollectionPlay, BsLightning, BsMusicNote, BsMusicNoteList, BsMusicPlayerFill, BsPerson, BsPlusCircle, BsPlusSlashMinus, BsSoundwave, BsSpeakerFill, BsX } from "react-icons/bs"
import Header from "../components/Header"
import "../css/favouriteSongs.css"
import Waves from "../components/Waves"
import { useEffect, useState } from "react"
export default function Artist(){

    const [singer, getSinger] = useState()
    const [alreadyFav, setFav] = useState(false)
 

        

  // function to check if an artist is saved to user's favourites

  

    useEffect(()=>{
        getArtistInfo()
        
    },[])

// function to get Artist's Information

    function getArtistInfo(){
       const artist = localStorage.getItem('artist')


     
       const  url ="https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+artist+"&api_key=4c6a539445c920ae57b3868a7a8612ab&format=json"
        fetch(url,{
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
        }
        }).then((res)=>res.json()).
        then((_res)=>{
            getSinger(_res)
        })


        
    }

  

    return (
        <div>
            <Header/>
            <div className ="topContainer">
             <div style ={{display:"flex"}}>
            <div style ={{flex:8 , padding:"12px"}}>
                    <BsSpeakerFill size ={70} color ="brown" style={{opacity:0.7}}/>
                 </div>
                <div style ={{flex:3}}>
                    <div  className ="card" style ={{display:"flex", marginBottom:"10%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> Artist Info </div>
                      
                    </div>
                   
                </div>
                </div>
               

                <div className ="innerContent">

                    


                    <div style ={{display:"flex"}}>
                   <div  style ={{flex:4,
                    backgroundImage:"url('/servicesImages/pexels-jorge-fakhouri-filho-2701570.jpg')", 
                    width:"350px", backgroundSize:"cover"}}>

                   </div>

                   <div  style ={{flex:4, background:"beige", width:"320px",height:"fit-content", padding:"10px"}}>
                        {singer!=undefined?<h1 style ={{color:"rgb(37, 59, 37)"}} >{singer.artist.name}</h1>:null}

                        <div style ={{ background:"rgb(217, 220, 217)", height:"fit-content",width:"300px"}}>
                            <div style ={{padding:"8px"}}>
                            <div style ={{padding:"12px", 
                            height:"fit-content", width:"fit-content", borderRadius:"50%", background:"beige"}}>
                                 <BsMusicNote size ={30} color ="brown"/>
                            </div>
                            <div style ={{color:"darkgreen",textAlign:"center", fontSize:"30px", fontWeight:"bold" }}><span style ={{borderBottom:"2px solid goldenrod"}}>Top Tracks </span></div>
                            </div>
                            <div style ={{display:"flex", background:"rgb(22, 61, 40)"}} >
                               <div style ={{marginLeft:"30%", 
                               marginTop:"5%", fontSize:"28px", color:"beige", cursor:"pointer"}}

                               onClick={()=>{
                                window.location.replace("/artist-topTracks")
                               }}
                               
                               >Visit Page</div>
                               <div
                               style ={{
                               marginTop:"6%", marginLeft:"4%"}}>
                               <BsArrowRight size ={30} color="white"/>
                               </div>
                            </div>
                        </div>

                        <div style ={{ background:"rgb(217, 220, 217)", height:"fit-content",width:"300px", marginTop:"3%"}}>
                        <div style ={{padding:"8px"}}>
                        <div style ={{padding:"12px", 
                            height:"fit-content", width:"fit-content", borderRadius:"50%", background:"beige"}}>
                                 <BsMusicNoteList size ={30} color ="brown"/>
                            </div>

                            <div style ={{color:"darkgreen",textAlign:"center", fontSize:"30px", fontWeight:"bold" }}><span style ={{borderBottom:"2px solid goldenrod"}}>AIbums</span></div>
                              </div>
                            <div style ={{display:"flex",background:"rgb(22, 61, 40)", marginTop:"3%"}} >
                               <div style ={{marginLeft:"30%", 
                               marginTop:"5%", fontSize:"28px", color:"beige", cursor:"pointer"}}

                               onClick={()=>{
                                window.location.replace("/artist-topAlbums")
                               }}
                               
                               >Visit Page</div>
                               <div
                               style ={{
                               marginTop:"6%", marginLeft:"4%"}}>
                               <BsArrowRight size ={30} color="white"/>
                               </div>
                            </div>
                        </div>
                   </div>

                   <div style ={{flex:4, background:"lightgrey", padding:"8px", fontSize:"19px"}}>
                    <div style ={{fontSize:"30px", color:"brown", }}>Biography</div>
                           {singer!=undefined?<div>{singer.artist.bio.summary.split("<a")[0]}</div>:null}
                   </div>
                   </div>
                  
                </div>
            
                  <div> 


                  {alreadyFav==true?<div style ={{display:"flex"}}>
                        <div style ={{flex:6}}></div>

                        <div style ={{flex:6, background:"whitesmoke", 
                        padding:"9px", color:"black", fontSize:"27px", width:"fit-content"}}>
                            <BsLightning size ={40} color ="darkgreen"/>
                             Already saved to Favourites

                             <BsX sixe ={90} color ="brown" style ={{marginLeft:"2%"}} onClick={()=>{
                                setFav(false)
                             }}/>
                        </div>

                       
                    </div>:null}
              {singer!=undefined?<div style ={{display:"flex", padding:"16px"}}>
                       <div style ={{flex:10}}>

                       </div>

                       <div style ={{flex:2}}>

                       <div style ={{display:"flex",background:"beige", marginTop:"1%", width:"fit-content", padding:"12px"}} 
                       
                      onClick={()=>{
                       


                        let data ={"username":localStorage.getItem("username"),
    "artist":localStorage.getItem("artist"),
}


fetch('http://localhost:8000/api/saveFavArtist',{
    method:"POST",
    headers:{
        "content-type":"application/json",
        "accept":"application/json"
       
        
    },
    body:JSON.stringify(

       data
    )
}).then((response)=>response.json()).
then((res)=>{
    if(res.message =="success"){
        window.location.replace("/fav-artists")
    }

    if(res.message=="duplicate"){
        setFav(true)
    }
    
  
})



                      }}
                       
                       >
                               <div style ={{marginLeft:"3%", 
                               marginTop:"1%", fontSize:"28px", color:"black", cursor:"pointer"}}>Add to Favourites</div>
                               <div
                               style ={{
                               marginTop:"1%",}}>
                               <BsPlusCircle size ={30} color="green"/>
                               </div>
                            </div>
                             
                       </div>
                   
                  </div>:null}
                   </div>
            </div>

            <Waves/>
        </div>
    )
}