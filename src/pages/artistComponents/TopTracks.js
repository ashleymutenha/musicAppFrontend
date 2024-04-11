import { Bs123, BsActivity, BsAlexa, BsArrowLeft, BsArrowRight, BsBricks, BsHeadset } from "react-icons/bs";
import Header from "../../components/Header";

import '../../css/topTracks.css'

// import { topTracks } from "../../resources/info";
import Waves from "../../components/Waves";
import { useEffect, useState } from "react";

export function TopTracks(){

    const[topTracks, setTracks] = useState();

    useEffect(()=>{
        getTopTracks()
    })


    function getTopTracks(){
        const artist = localStorage.getItem('artist')


        fetch("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+artist+"&api_key=4c6a539445c920ae57b3868a7a8612ab&format=json",{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }).then((res)=>res.json())
        .then((response)=>{

            setTracks(response)


        })

    }

    return (
        <div>
            <Header/>

            <div style ={{display:"flex", background:"lightgrey"}}>
            <div style ={{flex:8 , padding:"12px"}}>
                    <BsActivity size ={70} color ="green" style={{opacity:0.7}}/>
                 </div>
                <div style ={{flex:3}}>
                    <div  className ="card" style ={{display:"flex", marginBottom:"10%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"23px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}>  {localStorage.getItem('artist') }/ Top Tracks</div>
                      
                    </div>
                   
                </div>
                </div>
            {topTracks!=undefined?<div className ="topSegment">

                {topTracks.toptracks.track.map((track)=>{return <div className ="content-card">

                    <div  style={{flex:3, backgroundImage:" url('./servicesImages/pexels-esranur-kalay-12342980.jpg')", 
                    height:"", width:"370px", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                        
                    </div>

                    <div  style={{flex:4, padding:"10px", background:"rgb(228, 233, 229)",width:"fit-content"}}>

                     <div style ={{color:"brown", fontSize:"30px", fontWeight:"bold"}}>{track.name}</div>

                      <div style ={{padding:"10px", width:"230px", 
                      height:"fit-content", borderRadius:"12px",background:"whitesmoke" , marginTop:"8%"}}>
                        <BsAlexa color ="darkgreen" size ={30}/>
                       <div style ={{fontSize:"23px", fontWeight:"bold",color:"rgb(88, 13, 68)"}}>Play Count</div>
                        <div style ={{padding:"3px", background:"rgb(226, 243, 227)", width:"fit-content", height:"fit-content", borderRadius:"12px"}}>
                       <h5>{track.playcount}</h5>
                       </div>
                      </div>


                      <div style ={{padding:"10px", width:"230px", 
                      height:"fit-content", borderRadius:"12px",background:"whitesmoke" , marginTop:"8%"}}>
                        <BsHeadset color ="darkgreen" size ={30}/>
                       <div style ={{fontSize:"23px", fontWeight:"bold",color:"rgb(88, 13, 68)"}}>Listen to This Song</div>
                        <div style ={{padding:"3px", background:"khaki", width:"fit-content", height:"fit-content", borderRadius:"12px", fontSize:"23px"}}
                        onClick={()=>{
                            window.open(track.url)
                        }}
                        >
                         Visit Url <BsArrowRight/>
                       </div>
                      </div>

                       
                    </div>

                </div>})}

            </div>:null}
            <Waves/>
        </div>
    )
}