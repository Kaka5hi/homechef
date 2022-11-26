import React from 'react'
import {useParams} from 'react-router-dom'
import './SingleRecipe.css'
import {BsPersonFill} from 'react-icons/bs'

const SingleRecipe = () => {

    const [singleRecipe, setSingleRecipe] = React.useState([])
    const [display, setDisplay] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [msg, setMsg] = React.useState(false)

    let param = useParams()

    const getSingleRecipe = async (id) => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_FOOD_API_KEY}`)
        const data = await resp.json()
        setSingleRecipe(data);
        setLoading(false)
    }

    const showIngredients = () => {
        setDisplay(prevState => !prevState)
    }

    const addToFav = () => {
        const oldRecipes = JSON.parse(localStorage.getItem('favorite'))
        if(oldRecipes === null) {
            localStorage.setItem('favorite', JSON.stringify([singleRecipe]))
            callMsg()
        } else{
            let isAdded = isRecipeAlreadyAdded(singleRecipe.id)
            if(isAdded) {
                alert('already in favorite')
            } else {
                let newList = [...oldRecipes,singleRecipe]
                localStorage.setItem('favorite', JSON.stringify(newList))
                callMsg()
            }
        }
    }

    const isRecipeAlreadyAdded = (id) => {
        let data = JSON.parse(localStorage.getItem('favorite')).find(item => item.id === id)
        if(data) {
            return true
        } else {
            return false
        }
    }

    const callMsg = () => {
        setMsg(true)
        setTimeout(() => {
            setMsg(false)
        }, 3000);
    }

    React.useEffect(() => {
        getSingleRecipe(param.select);
    }, [])

    if (loading) {
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className='single-recipe' key={singleRecipe.id} id={singleRecipe.id}>
                <section className='single-recipe-details'>
                    <img src={singleRecipe.image} alt={singleRecipe.title} />
                    <article className='ingredients'>
                        <h1 className='title'>{singleRecipe.title}</h1>
                        <p className='time'>Time required to make: <span>{singleRecipe.readyInMinutes}</span>min</p>
                        <p className='serves'>Servings: <BsPersonFill /> x <span>{singleRecipe.servings}</span></p>
                        <button onClick={showIngredients}>{display ? `Hide ingredients` : `Show Ingredients`}</button>
                        <ul>    
                            {display && singleRecipe.extendedIngredients.map(el=> <li key={el.id}>{el.name}</li>)}
                        </ul>
                        <button onClick={addToFav}>Add to favorite</button>
                            <p>{msg ? 'Added to favorite' : ''}</p>
                    </article>
                </section>

                <section className='instructions'>
                    <span>instructions</span>
                    <article dangerouslySetInnerHTML={{__html:`${singleRecipe.instructions}`}} />
                </section>
            </div>
        )
    }
}

export default SingleRecipe
