import { useState } from "react"
import { Link} from 'react-router-dom'
import './styles.scss'







const Modal = ({handleMenu, status, handleRestart = null }) => {



    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            
            <div className="modal-body modal-body-extra">

                <h2 className="modalTitle">{status}</h2>


                {status === 'PAUSED' ? 
                 (<button className="menuButton mb-4" onClick={handleMenu}> CONTINUE</button>)

                 :

                 (<button className="menuButton mb-4" onClick={handleRestart}>PLAY AGAIN!</button>)
            }
             


                <Link to="/category">
              <button className="menuButton mb-4"> NEW CATEGORY</button>
              </Link>


                <Link to="/">
                <button className="menuButton">QUIT GAME</button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    )

}


export default Modal