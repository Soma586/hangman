import Data from '../../data.json'
import _ from 'lodash'
import './styles.scss'




interface CardTypesProps {

    type : string
}


const CardType = ({type} : CardTypesProps) => {



    return ( 
        <div className="categoryType bg-blue">


            <p className="type text-white">{type}</p>


        </div>
    )
}

const Category = () => {


    const x = Object.keys(Data.categories)

    const displayType = _.map(x, (item) => {

        return  <CardType type = {item} />
    })
    

    return (
        <div className="container">
            <h1>Pick a Category</h1>




            <div className="d-flex flex-wrap justify-content-between">

            {displayType}
            </div>

           





        </div>
    )

}



export default Category