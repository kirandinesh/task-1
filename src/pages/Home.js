import React from 'react'
import "../styles/Home.css"
import Fortnite from "../images/fortnite.jpg"
import Img1 from "../images/img1.jpg"
import Img2 from "../images/img2.png"
import Img3 from "../images/img3.jpg"

function Home() {
  return (
    <div className='container'>
      <div className='website-title'>
      <h2>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h2>
      </div>

      <div>
        <img className="fornite-image"src={Fortnite}/>
      </div>

      <div className='game-quote'>
        <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>

      </div>
      <div className='Visitdiv'>
        <button className='VisitButton' >
          Visit website
        </button>
      </div>

      <div className='imgcontainer'>
        <div className='imgbox1'>
          <img className='img1'src={Img1}></img>
          <div className='imgtitle'> 
          <p> Explore large, destructible environments where no two games are ever the same.</p>
          </div>
 
        </div>
        <div className='imgbox1'>
          <img className='img1'src={Img2}></img>
          <div className='imgtitle'> 
          <p> Explore large, destructible environments where no two games are ever the same.</p>
          </div>
 
        </div>
        <div className='imgbox1'>
          <img className='img1'src={Img3}></img>
          <div className='imgtitle'> 
          <p> Explore large, destructible environments where no two games are ever the same.</p>
          </div>
 
        </div>

      </div>

      <div className='Contribution-box'>
        <h1>Our Contribution</h1>
      </div>
      <div></div>
      <div></div>
      
    </div>
  )
}

export default Home
