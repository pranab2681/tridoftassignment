import React, { useState } from 'react';

const Header = () => {
	const logo = 'Logo';

	const [isActive, setActive] = useState(false);

	const handleToggle = () => {
		setActive(!isActive);
	};
	return (
		<>
			<nav className='navbar'>
				<a href='/' className='logo'>
					{logo}
				</a>
				<i className='fa fa-bars' onClick={handleToggle}></i>
				{/* Navigation menus */}
				<div className={`bar ${isActive ? 'show' : null}`}>
					<div className='topBar'>
						<form>
							<i className='fa fa-search'></i>
							<input type='text' placeholder='Search' />
						</form>
						<a href='#' className='btn'>
							post a look
						</a>
						<a href='#' className='btn'>
							login/register
						</a>
					</div>
					<ul className='bottomBar'>
						<li>
							<a href='#' className='navMenu'>
								flaunt
							</a>
						</li>
						<li>
							<a href='#' className='navMenu'>
								read
							</a>
						</li>
						<li>
							<a href='#' className='navMenu'>
								watch
							</a>
						</li>
						<li>
							<a href='#' className='navMenu'>
								shop
							</a>
						</li>
						<li>
							<a href='#' className='navMenu'>
								style:wedding
							</a>
						</li>
						<li>
							<a href='#' className='navMenu lastMenu'>
								charity auction
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;
