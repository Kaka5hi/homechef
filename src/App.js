import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Favorite from './pages/Favorite';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer.js/Footer';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Searched from './pages/Searched';

const App = () => {
    return(
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/favorites' element={<Favorite />} />
                <Route path='/recipes/:type' element={<Recipes/>} />
                <Route path='/searched/:search' element={<Searched/>} />
                <Route path='/singleRecipe/:select' element={<SingleRecipe/>} />
            </Routes>
        <Footer />
        </BrowserRouter>
    )
};

export default App;
