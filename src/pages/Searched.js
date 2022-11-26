import React from 'react'
import './Searched.css'
import {Link, useParams} from 'react-router-dom'

const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = React.useState([])
    let param = useParams()

    const getSearchedRecipes = async(type) => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${type}&apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=15`)
        const data = await resp.json()
        setSearchedRecipes(data.results);
    }

    React.useEffect(() => {
        getSearchedRecipes(param.search);
    },[])

    return (
        <div>
            <section className="searched-section">
                <span><Link to='/explore'>Go back</Link></span>
                <div className="searched-section-container">
                    {searchedRecipes.map(item =>{
                        return (
                            <article className="recipe" key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <div className="recipe-info">
                                    <h2>{item.title}</h2>
                                    <Link to={`/singleRecipe/${item.id}`}>View</Link>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Searched
