import React from 'react'
import './Random.css'
import {BsPersonFill} from 'react-icons/bs'

const Random = () => {
    const [indianMainCourse, setIndianMainCourse] = React.useState([])

    const getIndianMainCourse = async () => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/random?cuisine=Indian&type=breakfast&apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=10`)
        const data = await resp.json()
        setIndianMainCourse(data.recipes)
        storeLocalData(data.recipes)
    }

    const storeLocalData = (data) => {
        localStorage.setItem('indian-breakfast', JSON.stringify(data))
    }

    const getLocalStoredData = () => {
        return JSON.parse(localStorage.getItem('indian-breakfast'))
    }

    React.useEffect(() => {
        let data = getLocalStoredData()
        if(data){
            setIndianMainCourse(data)  
        } else {
            getIndianMainCourse()
        }
    }, [])

    return (
        <div className='random-section-outer'>
            <h1>Trending picks</h1>
            <section className='random-section-inner'>
                {indianMainCourse.map(item=> {
                    return (
                        <article key={item.id} className='random-article'>
                            <img src={item.image} alt={item.title} />
                            <h1>{item.title}</h1>
                            <span><BsPersonFill /> x {item.servings}</span>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Random
