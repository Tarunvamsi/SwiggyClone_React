import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" alt="logo" src="https://t3.ftcdn.net/jpg/01/10/15/24/360_F_110152426_L5NOFHFAug9uH4jCKVQZ36mdq043i99t.jpg"></img>
            </div>
            <div className="nav-items"> 
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>

            </div>

        </div>
    );
};


const RestaurantCard = ()=>{
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ob54qvppyosq4haqtkit" />
            <h3>Meghana foods</h3>
            <h4>Biryani,NorthIndian</h4>
            <h5>4.3 stars</h5>
            <h5>38 minutes ETA</h5>

        </div>
    )
};

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                

            </div>
        </div>
    )

};
const AppLayout = () =>{
    return (
    <div className = "app">
        <Header></Header>
        <Body></Body>
    </div>
    );

}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);