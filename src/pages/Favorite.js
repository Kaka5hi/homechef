import React from 'react'
import './Favorite.css'
import { Link } from 'react-router-dom'

const Favorite = () => {

    const [fav, setFav] = React.useState([])
    const [feed, setFeed] = React.useState(true)

    const getItem = () => {
        let data = JSON.parse(localStorage.getItem('favorite'))
        if(data === null) {
            return
        } else {
            setFav(data)
            setFeed(false)
        }

    }

    React.useEffect(()=> {
        getItem()
    },[])

    if(feed) {
        return(
            <section className='empty-section'>
                <h1>No recipe added to favorite</h1>
            </section>
        )
    } else {
        return (
            <section className='favorite-section'>
                {fav.map(item =>{
                    return(
                        <article key={item.id} id={item.id}>
                            <img src={item.image || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HE0OkemWw76VF0rZdBpDawpED87xlxUmDw&usqp=CAU`} alt={item.title} />
                            <div className="favorite-content">
                                <h1>{item.title}</h1>
                                <Link to={`/singleRecipe/${item.id}`}>View</Link>
                            </div>
                        </article>
                    )
                })}

            </section>
        )
    }
}

export default Favorite
