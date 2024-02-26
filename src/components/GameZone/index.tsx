import './styles.scss'
import _, { words } from 'lodash'
import { useEffect, useState } from 'react'
import classnames from 'classnames'

import Menu from '../../assets/images/icon-menu.svg'
import Heart from '../../assets/images/icon-heart.svg'






const WordTile = ({letter, found}) => {


    //console.log(letter)
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

const GuessTile = ({letter, handleClick}) => {



    const [toggle, setToggle] = useState(false)



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

    useEffect(() => {


        

        console.log(data)
        
        const randomWordObj: String = data[Math.floor(Math.random() * data.length)]
    
        //console.log(`random word is ${randomWord}`)
        const Word :String[] = Array.from(randomWordObj['name'].toUpperCase())

        setMainWord(Word)
    }, [])


    const letters : String[] = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    const tracker = new Map()
    mainWord.forEach((char) => {
        tracker.set(char, 1)
    })
    
    const found = new Map()




    const [lol, setLol] = useState(found)
    const [wrongGuess, setWrongGuess] = useState(0)

   
    

    const handleClick = (letter) => {


        if(tracker.has(letter)){
            //lol.set(letter, 1)

            //console.log(found)
            const updatedFound = new Map(lol);
            updatedFound.set(letter, 1);
            setLol(updatedFound);
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
        return <GuessTile  letter={letter}  handleClick={handleClick}/>
    })



    return (
        <div className="container">


                <div className="d-flex justify-content-between">
                    <div>
                        <div>
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

            <div className="keyBoardGrid">
                {displayLetters}
            </div>
            

        </div>
    )

}



export default GameZone