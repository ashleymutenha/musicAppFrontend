
import Home2 from "./BodyComponents/Home2";
import AboutUs from "./BodyComponents/AboutUs";
function Welcome(){


    const  currentPage = sessionStorage.getItem('currentPage')

return (

    <div>
        {currentPage ==='home'|| currentPage===null?<Home2 />:null}
        {currentPage ==='about'?<AboutUs/>:null}
    </div>
)
}

export default Welcome;