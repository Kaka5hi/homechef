import React from 'react'
import Category from '../components/Category/Category'
import Random from '../components/Random/Random'
import Search from '../components/Search/Search'

const Explore = () => {
    return(
        <main>
            <Search />
            <Category />
            <Random />
        </main>
    )
}

export default Explore