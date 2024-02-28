import Data from '../../data.json'
import _ from 'lodash'
import './styles.scss'
import {Link} from 'react-router-dom'




interface CardTypesProps {

    type : string
}


const CardType = ({type} : CardTypesProps) => {


    let map = new Map()


    map.set("Movies", '/category/movies')
    map.set("TV Shows", '/category/shows')
    map.set('Countries', '/category/countries')
    map.set('Captial Cities', '/category/cities')
    map.set('Animals', '/category/animals')
    map.set('Sports', '/category/sports')


    return ( 

        <Link to={map.get(type)}>
        <div className="categoryType bg-blue">


            <p className="type text-white">{type}</p>


        </div>
        </Link>
    )
}

const Category = () => {

//should each categoy be it's own route? the most simple ways i can think about it
//the route will dynamically change, i would need to do more research on how to solve this
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