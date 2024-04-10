
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from './pages/Authentication';
import UserPage from './pages/UserPage';
import MyFavourites from './pages/MyFavourites';
import FavouriteSongs from './pages/myFavouriteComponents/favoutiteArtists';
import SongDetails from './pages/myFavouriteComponents/favouriteAlbums';
import Artist from './pages/Artist';
import FavouriteArtists from './pages/myFavouriteComponents/favoutiteArtists';
import { TopTracks } from './pages/artistComponents/TopTracks';
import { TopAlbums } from './pages/artistComponents/TopAlbums';
import Album from './pages/Album';
import FavouriteAlbums from './pages/myFavouriteComponents/favouriteAlbums';




function App() {
  return (
    
  
    <div style ={{overflow:"hidden"}}>




     <BrowserRouter>

           <Routes>
            <Route path ="/" element  ={<Authentication/>}/>
            <Route path ="/home"  element  ={<UserPage/>}/>
            <Route path ="/favourites" element ={<MyFavourites/>}/>
            <Route path ="/song-details" element ={<SongDetails/>}/>
            <Route path ="/fav-artists" element ={<FavouriteArtists/>}/>
            <Route path ="/artist" element ={<Artist/>}/>
            <Route path ="/artist-topAlbums"  element ={<TopAlbums/>}/>
            <Route path ="/artist-topTracks"  element ={<TopTracks/>}/>
            <Route path ="/album"  element ={<Album/>}/>

            <Route path ="/favourite-albums"  element ={<FavouriteAlbums/>}/>

           </Routes>
        </BrowserRouter> 

   



        

      


        

     
  
    </div>
  );
}

export default App;
