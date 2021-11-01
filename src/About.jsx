import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img13.svg"
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name='About Page' imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    )
}

export default About
