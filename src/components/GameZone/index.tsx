import './styles.scss'
import _, { words } from 'lodash'
import { useEffect, useState } from 'react'
import classnames from 'classnames'

import Menu from '../../assets/images/icon-menu.svg'
import Heart from '../../assets/images/icon-heart.svg'
import Modal from '../Modal'






const WordTile = ({letter, found}) => {

    return  (

        found.has(letter) ? (
        <div className="wordTile">

            <p>{letter}</p>
        </div> ) : (

            <div className="emptyTile bg-darknavy">

            </div>
        )
    )
}

const GuessTile = ({letter, handleClick, restart}) => {



    const [toggle, setToggle] = useState(false)

    useEffect(() => {

        setToggle(false)
    }, [restart])



    const tileClick = () => {

        if(!toggle){

            setToggle(true)
            handleClick(letter)
        }
    }

    return ( 

        <button onClick={tileClick} className={classnames(!toggle ? "keyBoardTile" : 'keyDisabled')}>
            <p>{letter}</p>

        </button>
    )

}


const GameZone = ({type,data}) => {



   
    const [mainWord, setMainWord] = useState([])

    const [restart, setRestart] = useState(0)
    const [winCount, setWinCount] = useState('')

    useEffect(() => {


        

        console.log(data)
        
        const randomWordObj: String = data[Math.floor(Math.random() * data.length)]
    
        //console.log(`random word is ${randomWord}`)
        const Word :String[] = Array.from(randomWordObj['name'].toUpperCase())


        const count = randomWordObj['name'].replace(/\s/g, '')

        setWinCount(count)
        setMainWord(Word)
        
    }, [restart])


    const letters : String[] = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    const tracker = new Map()
    mainWord.forEach((char) => {
        tracker.set(char, 1)
    })
    
    const found = new Map()




    const [lol, setLol] = useState(found)
    const [wrongGuess, setWrongGuess] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [youWon, setWon] = useState(false)
   
    



    const handleWinCondition = () =>{


        let copy = Array.from(winCount.toUpperCase())


        let filter = _.filter(copy, (char) => {

            return !lol.has(char)
        })

        if(filter.length === 1){
            setWon(true)
            
        }
    }

    const handleClick = (letter) => {


        if(tracker.has(letter)){
            //lol.set(letter, 1)

            //console.log(found)
            const updatedFound = new Map(lol);
            updatedFound.set(letter, 1);
            setLol(updatedFound);
            handleWinCondition()
        }else{

            setWrongGuess(prev => prev + 1)
            
        }


    }

    const displayWord = _.map(mainWord, (letter) => {


        if(letter === " "){
            return <div style={{width : 112, height : 126}}></div>
        }else{
            return <WordTile letter={letter} found={lol}/>
        }
            
    })

    const displayLetters = _.map(letters, (letter) => {
        return <GuessTile  letter={letter}  handleClick={handleClick} restart={restart}/>
    })



    const handleRestart = () => {


        setRestart(prev => prev +1)
        setWrongGuess(0)
        setWon(false)

        let empty = new Map()
        setLol(empty)
    }

    const handleMenu = () => {

        setShowMenu(!showMenu)

    }

    return (
        <div className="container">

            

                <div className="d-flex justify-content-between">
                    <div>
                        <div onClick={handleMenu}>
                        <img src={Menu}/>
                        </div>
                       

                        <h2 className="text-white">{type}</h2>
                    </div>

                    <div>


                        <img src={Heart}/>
                    </div>
                </div>


                <div className="wordGrid">
                    {displayWord}

                </div>

                {/* <button onClick={handleMenu}>test</button> */}
                {showMenu && <Modal handleMenu={handleMenu} status={"PAUSED"}/>}
                {wrongGuess === 8 && <Modal handleMenu={handleMenu} handleRestart={handleRestart} status={"You Lose"}/> }
                {youWon && <Modal handleMenu={handleMenu} handleRestart={handleRestart} status={"You Win"}/>}

            <div className="keyBoardGrid">
                {displayLetters}
            </div>
            

        </div>
    )

}



export default GameZone