import React from 'react';
import './intro.scss'
import { init } from 'ityped'
import {useEffect, useRef} from 'react'

const Intro = () => {
	
	const textRef = useRef()

	useEffect(()=>{
		init(textRef.current, {
		showCursor: true,
		backDelay: 1500,
		backSpeed: 60,
		strings: ['JavaScript Developer', 'Crypto blogger', 'Smart Contract Developer'],
		});
	},[])

	return(
		<>
			<div className='intro' id='intro'>
				<div className='left'>
					<div className='imgContainer'>
						<img src='assets/man.png' alt=''/>
					</div>
				</div>
				<div className='right'>
					<div className='wrapper'>
						<h2>Hi there, I'm</h2>
						<h1>Lucas Picco</h1>
						<h3>Freelance <span ref={textRef}></span></h3>
					</div>
					<a href='#portfolio'>
						<img src='assets/down.png' alt=''/>
					</a>
				</div>
			</div>
		</>
	);
};

export default Intro;
