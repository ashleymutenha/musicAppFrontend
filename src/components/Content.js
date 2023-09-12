
import Home from "./BodyComponents/Home";
import AboutUs from "./BodyComponents/AboutUs";
import Solutions from "./BodyComponents/Solutions";
import Products from "./BodyComponents/Products";
function Content(){


    const  currentPage = sessionStorage.getItem('currentPage')

return (

    <div>
        {currentPage ==='home'|| currentPage===null?<Home />:null}
        {currentPage ==='about'?<AboutUs/>:null}

        {currentPage ==='solutions'?<Solutions/>:null}

        {currentPage ==='products'?<Products/>:null}
    </div>
)
}

export default Content;