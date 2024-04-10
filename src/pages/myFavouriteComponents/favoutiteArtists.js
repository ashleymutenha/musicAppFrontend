// function to show Website Section of Favourite Artists
import { BsCollectionPlay, BsMotherboard, BsMusicNote, BsMusicNoteList, BsMusicPlayerFill, BsPerson, BsSoundwave, BsSpeakerFill } from "react-icons/bs"
import Header from "../../components/Header"
import "../../css/favouriteSongs.css"
import Waves from "../../components/Waves"
import { useEffect, useState } from "react"
export default function FavouriteArtists(){

    const [faves, setFaves] =useState([])

    useEffect(()=>{
        getFavArtists()
    })

    //api call to get user's saved favourite artists
    function getFavArtists(){

        fetch('http://localhost:8000/api/getFavArtists',{
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
                    <BsSpeakerFill size ={70} color ="brown" style={{opacity:0.7}}/>
                 </div>
                <div style ={{flex:3}}>
                    <div  className ="card" style ={{display:"flex", marginBottom:"10%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}>  Favourite Artists </div>
                      
                    </div>
                   
                </div>
                </div>
                

                <div className ="innerContent" style ={{flexWrap:"wrap"}}>
                   
                   {faves.map((fave)=>{return <div style ={{display:"flex", marginRight:"3%", marginTop:"2%"}}>
                   <div  style ={{flex:4,
                    backgroundImage:"url('/servicesImages/pexels-martin-lopez-2240771.jpg')", 
                    width:"200px", backgroundSize:"cover", height:"400px"}}>

                   </div>

                   <div  style ={{flex:4, background:"beige", width:"320px",height:"400px", }}>
                   
                   <div style ={{padding:"8px", background:"rgb(60, 51, 81)", height:"fit-content",}}>
                            <div style ={{padding:"12px", 
                            height:"fit-content", width:"fit-content", borderRadius:"50%", background:"beige"}}>
                                 <BsMusicNote size ={20} color ="brown"/>
                            </div>
                            <h2 style ={{color:"beige"}} >{fave.artist}</h2> 
                            </div>


                        <div style ={{padding:"8px",marginTop:"15%", background:"rgb(217, 220, 217)", height:"fit-content"}}>
                            <div style ={{padding:"12px", 
                            height:"fit-content", width:"fit-content", borderRadius:"50%", background:"beige"}}>
                                 <BsMusicNoteList size ={20} color ="brown"/>
                            </div>

                            <div style ={{background:"rgb(121, 32, 99)", padding:'9px', borderRadius:"12px", marginTop:"3%", cursor:"pointer"}}
                             onClick={()=>{
                                localStorage.setItem('artist', fave.artist)
                                window.location.replace("/artist")


                             }}
                            >
                                <BsMotherboard size ={40} color ="whitesmoke" opacity={0.8}/>
                            <h2 style ={{color:"white"}} >View Details</h2> 
                            </div>
                                                   </div>

                       
                   </div>
                   </div>})}
                


                </div>
            </div>

            <Waves/>
        </div>
    )
}