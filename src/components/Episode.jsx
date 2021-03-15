import React from 'react';

const Episode = () => {
	return (
		<>
			<div className='episode'>
				<div className='firstEpisode'>
					<h1>Tv Episode 46: Fragnance of Love</h1>
					<div className='firstimgdiv'>
						<img
							src='https://source.unsplash.com/700x900/?laptop'
							alt='episode'
						/>
					</div>
				</div>
				<div className='secondEpisode'>
					<div className='secondimgdiv'>
						<img
							src='https://source.unsplash.com/300x300/?speaker'
							alt='speaker'
						/>
					</div>
					<div className='secondimgdiv'>
						<img src='https://source.unsplash.com/300x300/?phone' alt='phone' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Episode;
