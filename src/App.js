import logo from './logo.svg';
import './App.css';
import BackGround from './assets/images/background-desktop.svg'
import Icon from './assets/images/logo.svg'
import Menu from './assets/images/icon-menu.svg'
import PlayButton from './assets/images/icon-play.svg'
import Intro from './components/Intro/index.tsx';
import Tutorial from './components/tutorial/index.tsx';
import Category from './components/Category/index.tsx'
//import classnames

function App() {
  return (
    <div className="containerz" >

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
      <Category/>
     
      
    </div>
  );
}

export default App;
