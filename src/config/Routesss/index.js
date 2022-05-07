import React from 'react'

// import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CreateBlog, DetailBlog, Home, Login, Register } from '../../pages';


const Routesss = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/create-blog' element={<CreateBlog/>}/>
                <Route path='/detail-blog' element={<DetailBlog/>}/>
               
            </Routes>
        </Router>
    )
}

export default Routesss