import ReactDOM from "react-dom/client";

const Header= () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://yt3.googleusercontent.com/ytc/AIdro_naJ5pFQzX0oakS9ECVgd4fs3GG4uwIGJUNTu14gqz8Mg=s900-c-k-c0x00ffffff-no-rj" alt="Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img src="https://b.zmtcdn.com/data/pictures/chains/6/1906/7f1786f705196dffb0a91b1ec25f8cdb_featured_v2.jpg" alt="res-img" id="res-img"/>
            <h4 id="heading">Nazeers</h4>
            <p>Biryani,North Indian</p>
            <p>4.4 stars</p>
            <p>38minutes delivery </p>
        </div>
    )
}

const Body= () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout= () =>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

