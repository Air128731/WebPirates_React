import * as React from 'react'
import '../css/project.css'
import '../css/animations.css';

import Navbar from './Navbar';
import MainSlide from './MainSlide';
import LogoClouds from './LogoCluds';
import ShowCaseTabs from './ShowCaseTabs';
import WorkflowTabs from './WorkflowTabs';
import Pricing from './Pricing';
import Idea from './Idea';
import Contact from './Contact';
import Footer from './Footer';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing () {
    return (
      <div className="App">
        <Navbar />
        <MainSlide />
        <LogoClouds />
        <ShowCaseTabs />
        <WorkflowTabs />
        <Pricing />
        <Idea />
        <Contact />
        <Footer />
      </div>
    );
}

export default Landing;
