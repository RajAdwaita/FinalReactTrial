import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img5.svg"
import Common from './Common';

const Home = () => {
    return (
        <>

            <Common name='Home Page' imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    )
}

export default Home
