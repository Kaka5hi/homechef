import React from 'react'
import './Category.css'
import data from '../../data'
import {Link} from 'react-router-dom'

const Category = () => {
    return (
        <section className='category-section'>
            <h1>Pick from your favorite cuisines</h1>
            <section className="category-list">
                {data.map((item, index) => {
                    return (
                        <article className='category' key={index}>
                            <img src={item.img} alt={item.name} />
                            <Link to={`/recipes/${item.name}`}>{item.name}</Link>
                        </article>
                    )
                })}
            </section>
        </section>
    )
}

export default Category
