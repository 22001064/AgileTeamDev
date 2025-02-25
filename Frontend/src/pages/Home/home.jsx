import React from 'react'
import Header from '../../Components/header'

const Home = () => {
  return (
    <>        
        <Header title={"Home"} curPage={"Home"}/>
        <div className='home-area'>
            <h1>Here can be something very beautiful, like Carousel, Slogan, Photo gallery</h1>
        </div>
    </>
  );
}

export default Home