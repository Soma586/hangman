import Icon from '../../assets/images/logo.svg'
import Menu from '../assets/images/icon-menu.svg'
import PlayButton from '../../assets/images/icon-play.svg'
//import Ico from '../../'
import { Link } from 'react-router-dom'



const Intro = () => {




    return (
    
        <div className="outerBox">

        <div className="innerBox">
       
          <div>

           
                <img src={Icon}/>
          

          </div>
         

         <div>
         <img src={PlayButton}/>
         </div>
          

          <Link to="/tutorial">
          <button className="boxButton bg-blue text-white">HOW TO PLAY</button>
          </Link>
        </div>

      </div>
    )

}



export default Intro