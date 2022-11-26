import React from 'react'
import './Search.css'
import {BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router'

const Search = () => {

    const [input, setInput] = React.useState('')
    const navigate = useNavigate()

    const searchRecipe = (e) => {
        e.preventDefault()
        navigate(`/searched/${input}`)
        setInput('')
    }

    return (
        <section className="search-section">
            <form onSubmit={searchRecipe}>
                <input 
                    type="text"
                    autoComplete="off"
                    placeholder="Something cooking in your mind? Search it.."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <BsSearch />
            </form>
        </section>
    )
}

export default Search
