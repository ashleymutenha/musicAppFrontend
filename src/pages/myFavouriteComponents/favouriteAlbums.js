// function to show Website Section of User Favourite Albums

import { BsCollectionPlay, BsMusicNote, BsMusicNoteList, BsMusicPlayerFill, BsPerson, BsSoundwave, BsSpeakerFill } from "react-icons/bs"
import Header from "../../components/Header"
import "../../css/favouriteSongs.css"
import Waves from "../../components/Waves"
import { useState,useEffect } from "react"
export default function FavouriteAlbums(){


    const [faves, setFaves] =useState([])

    useEffect(()=>{
        getFavAlbums()
    })


    function getFavAlbums(){

        fetch('http://localhost:8000/api/getFavAlbums',{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "accept":"application/json"  
            },

            body:JSON.stringify({"username":localStorage.getItem("username")})
        }).then((res)=>res.json()).
        then((response)=>{
            if(response.message=="success"){
                setFaves(response.data)
            }

            console.log(faves)

        })


    }



    return (
        <div>
            <Header/>
            <div className ="topContainer">
             <div style ={{display:"flex"}}>
            <div style ={{flex:8 , padding:"12px"}}>
                    <BsSoundwave size ={70} color ="brown" style={{opacity:0.7}}/>
                 </div>
                <div style ={{flex:3}}>
                    <div  className ="card" style ={{display:"flex", marginBottom:"10%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> Favourite Albums </div>
                      
                    </div>
                   
                </div>
                </div>
                

               <div className ="innerContent">
                {faves!=undefined?<div style ={{display:"flex", flexWrap:"wrap"}}>
               {faves.map((fave)=>{return <div style ={{display:"flex", marginRight:"10px"}}>
                   <div  style ={{flex:4,display:"flex",flexDirection:"column",
                    backgroundImage:"url('/servicesImages/pexels-arturo-a-14466246.jpg')", 
                    width:"200px", backgroundSize:"cover"}}>
                        <div style ={{flex:8}}> </div>

                        <div style ={{flex:1, background:"whitesmoke", padding:"12px", 
                        fontSize:"30px", fontWeight:"bold", cursor:"pointer"}}

                        onClick={()=>{
                            localStorage.setItem('artist',fave.artist)
                            localStorage.setItem('album',fave.album)

                            window.location.replace("/album")
                        }}
                        
                        >
                            Learn More
                        </div>

                   </div>

                   <div  style ={{flex:4, background:"beige",width:"320px",height:"400px", padding:"10px"}}>
                        <h1 style ={{color:"rgb(37, 59, 37)"}} >Album Details</h1>

                        <div style ={{padding:"8px", background:"rgb(217, 220, 217)", height:"fit-content",width:"300px"}}>
                            <div style ={{padding:"12px", 
                            height:"fit-content", width:"fit-content", borderRadius:"50%", background:"beige"}}>
                                 <BsMusicNote size ={30} color ="brown"/>
                            </div>
                            <div style ={{color:"darkgreen",textAlign:"center", fontSize:"30px", fontWeight:"bold" }}><span style ={{borderBottom:"2px solid goldenrod"}}>Artist</span></div>
                            <div style ={{fontSize:"27px"}}>{fave.artist}</div>
                        </div>

                        <div style ={{padding:"8px", background:"rgb(217, 220, 217)", height:"fit-content",width:"300px", marginTop:"3%"}}>
                        <div style ={{padding:"12px", 
                            height:"fit-content", width:"fit-content", borderRadius:"50%", background:"beige"}}>
                                 <BsMusicNoteList size ={30} color ="brown"/>
                            </div>

                            <div style ={{color:"darkgreen",textAlign:"center", fontSize:"30px", fontWeight:"bold" }}><span style ={{borderBottom:"2px solid goldenrod"}}>AIbum</span></div>
                            <div style ={{fontSize:"27px"}}>{fave.album}</div>
                        </div>
                   </div>
                   </div>})}
                </div>:null}
                </div>
            </div>

            <Waves/>
        </div>
    )
}