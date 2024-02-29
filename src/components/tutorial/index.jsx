import './styles.scss'
import _ from 'lodash'
import Back from '../../assets/images/icon-back.svg'
import {Link} from 'react-router-dom'




export const Nav = ({title}) => {


    return (
        <div className="d-flex justify-content-between">

        <div>
        <Link to="/">
                        <img src ={Back}/>
                        </Link>
        </div>
                       
                    <h1 className="tutorialTitle">{title}</h1>
                    <div className="d-none d-lg-block"></div>
                    </div>
    )
}

const Card = ({title, id, desc}) => {



    return (
        <div className="card">
            <h2 className="number text-blue mb-4">{id}</h2>

            <h3 className="cardTitle text-darknavy mb-5">{title}</h3>

            <p className="desc">{desc}</p>

        </div>
    )
}

const Tutorial = () => {


    const data = [
        {
            id: '01',
            title : 'CHOOSE A CATEGORY',
            desc: 'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.'
        },
        {
            id: '02',
            title : 'GUESS LETTERS',
            desc: 'Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.'
        },
        {
            id: '03',
            title : 'WIN OR LOSE',
            desc : 'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.'
        }
    ]





    const displayCards = _.map(data, (item) => {

        return <Card  {...item}/>
    })





    return (
        <div className="container">

       <Nav title={"How To Play"}/>


            <div className="d-lg-flex justify-content-lg-between">

                {displayCards}
            </div>

        </div>
    )
}


export default Tutorial