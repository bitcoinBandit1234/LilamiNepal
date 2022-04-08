import NavBar from "../../component/navbar/nav_bar.js";
import "./home_design.css"
import img1 from "../../assets/banner/banner-1.png";
import popular1 from "../../assets/ebay-images/antiques.png";
import popular2 from "../../assets/ebay-images/collectibles.jpg";
import popular3 from "../../assets/ebay-images/phone.jpg";
import popular4 from "../../assets/ebay-images/sell.jpg";
import popular5 from "../../assets/ebay-images/services.png";
import popular6 from "../../assets/ebay-images/watches.jpg";

function Home_page(){
    return(
        <>
        <NavBar />
        <section className="featured-section">
            <div className="featured-writting">
                <h2 className="f1-header">Find Your Next<span className="f1-span"> Deal!</span> </h2>
                <p className="f1-description"> Online Auction is where everyone goes to shop, sell,and give, while discovering variety and affordability.</p>
                <a className="f1-link" href="#">Get Started</a>
            </div>
            <div className="featured-image">
                <img src={img1}/>
            </div>
        </section>


        <div className="frontpagefull">
            <section className="popular-category-section">
                <h3>Explore popular categories</h3>
                <div className="popular-cat-list">
                    <div className="pop img-1" >
                        <img className="pop-image" src={popular1} alt=""/>
                        <p className="pop-title">antiques</p>
                    </div>
                    <div className="pop img-2">
                        <img className="pop-image" src={popular2} alt=""/>
                        <p className="pop-title">collectibles</p>
                    </div>
                    <div className="pop img-3">
                        <img className="pop-image" src={popular3} alt=""/>
                        <p className="pop-title">phones</p>
                    </div>
                    <div className= "pop img-4">
                        <img className="pop-image" src={popular4} alt=""/>
                        <p className="pop-title">sell</p>
                    </div>
                    <div className="pop img-5">
                        <img className="pop-image" src={popular5} alt=""/>
                        <p className="pop-title">services</p>
                    </div>
                    <div className="pop img-6">
                        <img className="pop-image" src={popular6} alt=""/>
                        <p className="pop-title">watches</p>
                    </div>
                </div>
            </section>
    </div>
</>

    );
}

export default Home_page;