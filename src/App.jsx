import React from 'react'
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import {useState} from 'react';


const App = ()=>{
	const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    	<div className='app'>
    		
    		<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    		<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    		
    		<div className='sections'>
    			<Intro />
    			<Portfolio />
    			<Works/>
    			<Testimonials/>
    			<Contact />
    		</div>
    		
    	</div>
    </>
  );
};

export default App;
