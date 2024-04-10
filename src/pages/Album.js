
// function to show Website Section of Search Music Album's Information
import { BsAlexa, BsArrowRight, BsCalendar2DateFill, BsHeadset, BsHeadsetVr, BsMusicNoteBeamed, BsPlusCircle, BsSoundwave, BsSpeaker } from "react-icons/bs";
import Header from "../components/Header";
import "../css/album.css"
import { useState,useEffect } from "react";
export default function Album(){

    const album = localStorage.getItem('album')

    const artist =localStorage.getItem('artist')

    const [albumInfo, setAlbumInfo] = useState()



    useEffect(()=>{
        getAlbumInfo()
    })

 

    function getAlbumInfo(){
        fetch("https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4c6a539445c920ae57b3868a7a8612ab&artist="+artist+"&album="+album+"&format=json",{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }).then((res)=>res.json())
        .then((response)=>{
            console.log(response)

            setAlbumInfo(response)
        })
    }

    return (
        <div>

            <Header/>

            <div className="_content">

           {albumInfo!=undefined?<div className ="_content-card">

{/* <div  style={{flex:8, backgroundImage:" url('./servicesImages/pexels-cottonbro-studio-6875119.jpg')", 
height:"", width:"370px", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
    
</div> */}

<div  style={{ padding:"10px", background:"rgb(228, 233, 229)",width:"fit-content", flex:2}}>

 {albumInfo!=undefined?<div style ={{color:"navy", fontSize:"30px", fontWeight:"bold"}}>{albumInfo.album.name}</div>:null}

  <div style ={{padding:"10px", width:"230px", 
  height:"fit-content", borderRadius:"12px",background:"whitesmoke" , marginTop:"8%"}}>
    <BsCalendar2DateFill color ="darkgreen" size ={30}/>
   <div style ={{fontSize:"23px", fontWeight:"bold",color:"rgb(88, 13, 68)"}}>Release Date</div>
    <div style ={{padding:"3px", background:"rgb(226, 243, 227)", width:"fit-content", height:"fit-content", borderRadius:"12px"}}>
   {/* {albumInfo.album.wiki.published!=null?<h5>{albumInfo.album.wiki.published}</h5>:<h5></h5>} */}
   </div>
  </div>


  <div style ={{padding:"10px", width:"230px", 
  height:"fit-content", borderRadius:"12px",background:"whitesmoke" , marginTop:"8%"}}>
    <BsMusicNoteBeamed color ="darkgreen" size ={30}/>
   <div style ={{fontSize:"23px", fontWeight:"bold",color:"rgb(88, 13, 68)"}}>Artist</div>

   {albumInfo!=undefined?<div style ={{padding:"3px", background:"khaki", width:"fit-content", height:"fit-content", borderRadius:"12px", fontSize:"23px"}}
                       
                        >
                         {albumInfo.album.artist}
                       </div>:null}
  
  </div>


  <div style ={{padding:"10px", width:"230px", 
  height:"fit-content", borderRadius:"12px",background:"whitesmoke" , marginTop:"8%"}}>
    <BsHeadset color ="darkgreen" size ={30}/>
   <div style ={{fontSize:"23px", fontWeight:"bold",color:"rgb(88, 13, 68)"}}>Listen to Album </div>

   <div style ={{padding:"3px", background:"khaki", width:"fit-content", height:"fit-content", borderRadius:"12px", fontSize:"23px"}}
                        onClick={()=>{
                            window.open(albumInfo.album.url)
                        }}
                        >
                         Visit Url <BsArrowRight/>
                       </div>
  
  </div>

   
</div>


{albumInfo.album.tracks.track!=undefined?<div style ={{padding:"10px",flex:2, background:"beige", width:"fit-content" }}>

<div style ={{color:"green", fontSize:"27px", fontWeight:"bold", marginTop:"3%"}}>Tracks</div>
 <div style ={{display:"flex", flexWrap:"wrap", justifyContent:"flex-start"}}>
{albumInfo.album.tracks.track.map((track)=>{return <div style ={{padding:"10px", width:"230px", 
  height:"fit-content", borderRadius:"12px",background:"whitesmoke" ,marginRight:"2%", marginTop:"2%" }}>
    <BsSoundwave size ={40} color ="brown"/>
   <div style ={{fontSize:"23px", fontWeight:"bold",color:"rgb(88, 13, 68)"}}>{track.name} </div>
    
   <div style ={{fontSize:"18px", fontWeight:"bold",color:"green", marginTop:"5%"}}>Listen to Song </div>
   <div style ={{padding:"3px", background:"khaki", width:"fit-content", height:"fit-content", borderRadius:"12px", fontSize:"23px"}}
                        onClick={()=>{
                            window.open(track.url)
                        }}
                        >
                         Visit Url <BsArrowRight/>
                       </div>
  
  </div>})}

 </div>

</div>:null}

</div>:null}

<div style ={{background:"whitesmoke", padding:"10px", width:"fit-content",
height:"fit-content", fontSize:"23px", fontWeight:"bold", margin:"12px", borderRadius:"12px", cursor:"pointer"}}

onClick={()=>{
    let data ={"username":localStorage.getItem("username"),
    "artist":localStorage.getItem("artist"),
    "album":localStorage.getItem("album")
}


fetch('http://localhost:8000/api/saveFavAlbum',{
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
    // if(res.message =="success"){
    //     window.location.replace("/fav-artists")
    // }
    console.log(res)
})

console.log(data)
}}

> Save to Favourites <BsPlusCircle color ="navy" size ={40}/></div>

            </div>


        </div>
    )
}