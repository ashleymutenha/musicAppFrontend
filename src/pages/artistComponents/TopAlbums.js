import { BsCollectionFill } from "react-icons/bs";
import Header from "../../components/Header";
import "../../css/topAlbums.css"
import Waves from "../../components/Waves";
import { useEffect, useState } from "react";
export function TopAlbums(){


  const[topAlbums, setAlbums] = useState();

  useEffect(()=>{
      getTopAlbums()
  })


  function getTopAlbums(){
      const artist = localStorage.getItem('artist')


      fetch("https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+artist+"&api_key=4c6a539445c920ae57b3868a7a8612ab&format=json",{
          headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
          }
      }).then((res)=>res.json())
      .then((response)=>{

          setAlbums(response)

          console.log(topAlbums)

      })

  }
    
    return(
        <div>
          <Header/>


          <div className ="topCont">


          <div style ={{display:"flex"}}>
            <div style ={{flex:8 , padding:"12px"}}>
                    <BsCollectionFill size ={70} color ="brown" style={{opacity:0.7}}/>
                 </div>
                <div style ={{flex:3}}>
                    <div  className ="card" style ={{display:"flex", marginBottom:"10%",
                         background:"whitesmoke", color:"black", opacity:0.7, fontSize:"23px", flexDirection:"row",border:"0px"}}>
                        <div className ="card" style ={{width:"80px", background:"transparent", border:"0px",flex:1, border:"0px"}}>
                       <div className ="_card3" ></div>
                       </div>
                       <div style ={{flex:6, padding:"12px 12px 12px 12px"}}>  {localStorage.getItem('artist') }/ Top Albums</div>
                      
                    </div>
                   
                </div>
                </div>


             {topAlbums!=undefined?<div style ={{display:"flex", flexWrap:"wrap"}}>
            {topAlbums.topalbums.album.map((album)=>{return <div className="_card-content" style ={{marginRight:"2%", marginTop:"2%"}}>
                <div style ={{flex:4}}></div>
                <div style ={{flex:8, fontSize:"40px", color:"beige", marginLeft:"15%"}}>{album.name}</div>


                <div style ={{flex:2, background:"brown", padding:"12px", cursor:"pointer"}}>
                     <div  style ={{color:"white", fontSize:"23px", textAlign:"center"}}

                     onClick={()=>{
                      localStorage.setItem('album',album.name)

                      window.location.replace("/album")
                     }}
                     
                     >
                        View Details
                     </div>
                </div>

            </div>})}
            </div>:null}

          </div>

          <Waves/>
        </div>
    )
}