// function to show Website Section of User's Favourite Albums and Artists Page


import { BsCassette, BsCassetteFill, BsCollectionFill, BsDiscord, BsMic, BsMusicNote, BsMusicNoteBeamed, BsMusicPlayerFill, BsSoundwave, BsSpeaker } from "react-icons/bs";
import Header from "../components/Header";
import Waves from "../components/Waves";
import "../css/favourites.css"
export default function MyFavourites(){

    // redirect to favourite Artist
    const toFavouriteArtists =()=>{
        window.location.replace("/fav-artists")
    }

    const toFavouriteAlbums =()=>{
        window.location.replace("/favourite-albums")
    }

    return(
        <div>
            <Header/>

            <div className ="_container">
                <div style ={{display:"flex"}}>

                 <div style ={{flex:8 , padding:"12px"}}>
                    <BsCollectionFill size ={70} color ="brown" style={{opacity:0.7}}/>
                 </div>
                <div style ={{flex:3}}>
                    <div  className ="card" style ={{display:"flex", marginBottom:"10%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"30px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}> My Favourites </div>
                      
                    </div>
                   
                </div>
                </div>

                 <div style ={{padding:"12px", display:"flex"}}>
                   
                <div className ="contentCard" style ={{display:"flex", flexDirection:'column'}}>
                     <div style ={{flex:8, marginTop:"2%"}}>
                     <div style ={{fontSize:"40px", color:"black", marginLeft:"3%", height:"fit-content",cursor:"pointer",
                     background:"beige", borderRadius:"12px", width:"fit-content", padding:"10px",opacity:0.7}}>
                          <div><BsMusicPlayerFill/></div>
                        Albums</div>
                        </div>

                        <div className ="goto" style ={{flex:2, fontSize:"30px",cursor:"pointer",
                         marginTop:"4%", padding:"12px", opacity :0.8, textAlign:"center"}}

                         onClick={
                            toFavouriteAlbums
                         }
                         
                         >
                         Open

                        </div>
                </div>

                <div className ="_contentCard" style ={{display:"flex", flexDirection:"column"}}>

                <div style ={{flex:8, marginTop:"2%"}}>
                     <div style ={{fontSize:"40px", color:"black", marginLeft:"3%", height:"fit-content",
                     background:"beige", borderRadius:"12px", width:"fit-content", padding:"10px",opacity:0.7}}>
                          <div><BsMusicNoteBeamed/></div>
                        Artists</div>
                        </div>

                        <div className ="goto" style ={{flex:2, fontSize:"30px",cursor:"pointer",
                         marginTop:"4%", padding:"12px", opacity :0.8, textAlign:"center"}}
                         onClick={toFavouriteArtists}
                         >
                         Open


                        </div>
                    </div>


                    
                </div>

            </div>

            <Waves/>
        </div>
    )
}