import logo from './logo.svg';
import './App.css';
import BackGround from './assets/images/background-desktop.svg'
import Icon from './assets/images/logo.svg'
import Menu from './assets/images/icon-menu.svg'
import PlayButton from './assets/images/icon-play.svg'
import Intro from './components/Intro/index.tsx';
import Tutorial from './components/tutorial/index.tsx';
import Category from './components/Category/index.tsx'
import GameZone from './components/GameZone/index.tsx';
import {Routes, Route} from 'react-router-dom'
import Data from './data.json'
//import classnames

function App() {
  return (
    <div className="containerz pt-2" >

      {/* <image src={BackGround}>


      </image> */}
      {/* ///<img className="gameBackground" src={BackGround}/> */}

      {/* <div className="outerBox">

        <div className="innerBox">

          <div>
          <img src={Icon}/>

          </div>
         

         <div>
         <img src={PlayButton}/>
         </div>
          
          <button className="boxButton bg-blue text-white">HOW TO PLAY</button>

        </div>

      </div> */}

      {/* <Intro/> */}
      {/* <Tutorial/> */}
      {/* <Category/> */}

      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/tutorial" element={<Tutorial/>}/>
        <Route path="/category" element={<Category/>} />

        <Route path="/category/movies" element={<GameZone type={"Movies"} data={Data.categories.Movies}/>} />
        <Route path="/category/shows" element={<GameZone  type={"TV SHOWS"} data={Data.categories['TV Shows']}/>} />
        <Route path="/category/countries" element={<GameZone type={"Countries"}  data={Data.categories.Countries}/>} />
        <Route path="/category/cities" element={<GameZone type={"Caital Cities"}  data={Data.categories['Capital Cities']}/>} />
        <Route path="/category/animals" element={<GameZone type={"Animals"}  data={Data.categories.Animals}/>} />
        <Route path="/category/sports" element={<GameZone type={"Sports"} data={Data.categories.Sports}/>} />
        

      </Routes>
     {/* <GameZone/> */}
      
    </div>
  );
}

export default App;
