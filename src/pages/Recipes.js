import React from 'react'
import {Link, useParams} from 'react-router-dom'
import './Recipes.css'

const Recipes = () => {

    const [cuisine, setCuisine] = React.useState([])

    let param = useParams()

    const getCuisineRecipe = async (type) => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${type}&apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=12`)
        const data = await resp.json()
        setCuisine(data.results);
    }

    React.useEffect(()=> {
        getCuisineRecipe(param.type);
    }, [])

    return (
        <section className='cuisine-recipes'>
            {cuisine.map(item => {
                return (
                    <article className="recipe" key={item.id}>
                        <img src={item.image || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HE0OkemWw76VF0rZdBpDawpED87xlxUmDw&usqp=CAU`} alt={item.title} />
                        <div className="recipe-info">
                            <h2>{item.title}</h2>
                            <Link to={`/singleRecipe/${item.id}`}>View</Link>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Recipes
