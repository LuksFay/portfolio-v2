import React from 'react'
import './navbar.scss';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import {fab} from '@fortawesome/free-brands-svg-icons';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

//<FontAwesomeIcon icon='fa-brands fa-github icon' /> 
//<FontAwesomeIcon icon='fa-brands fa-twitter icon' /> 
//library.add(fab);

const Navbar = ({menuOpen, setMenuOpen}) => {
	return(
		<>
			<div className={'navbar ' + (menuOpen && 'active')}> 
			
				<div className='wrapper'>
				
					<div className='left'>
					
						<a href='#intro' className='logo'>
							Portfolio.
						</a>
						
						<div className='itemContainer github-button'>
						 		<span>Check out my Github!</span>
						</div>
						
						<div className='itemContainer twitter-button'>
								<span>Here's my Twitter, follow me!</span>
						</div>
						
					</div>
					
					<div className='right'>
						<div className='hamburguer' onClick={() => setMenuOpen(!menuOpen)}>
							<span className='line1'></span>
							<span className='line2'></span>
							<span className='line3'></span>	
						</div>
					</div>
					
				</div>
				
			</div>
		</>
	);
};

export default Navbar;
