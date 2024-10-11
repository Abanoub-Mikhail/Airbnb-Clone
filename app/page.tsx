import Banner from "./Components/Banner";
import Explore from "./Components/Explore";
import Live from "./Components/Live";
import OutDoors from "./Components/OutDoors";
import Header from "./Components/header/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Banner/>
      <Explore/>
      <Live/>
      <OutDoors 
      img='https://images.unsplash.com/photo-1666803275923-0148c4b9ef77?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      title='The Greatest Outdoors'
      description='Wishlist Created by Airbnb'
      linkText='Get Inspired'
      />
    </main>

    <Footer/>
    
    </>
    
  );
}
