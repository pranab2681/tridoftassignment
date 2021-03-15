import React from 'react';
import Flickity from 'react-flickity-component';

const flickityOptions = {
	prevNextButtons: false,
	contain: false,
	draggable: true,
	wrapAround: false,
	fullscreen: true,
	groupCells: false,
	autoPlay: false,
	pauseAutoPlayOnHover: true,
	lazyLoad: 2,
};
const NCarousel = () => {
	return (
		<div>
			<Flickity
				className={'carousel'}
				elementType={'div'}
				options={flickityOptions}>
				<img
					src='https://source.unsplash.com/1920x300/?abstract'
					alt='abstract'
				/>
				<img src='https://source.unsplash.com/1920x300/?water' alt='abstract' />
				<img src='https://source.unsplash.com/1920x300/?cars' alt='abstract' />
				<img
					src='https://source.unsplash.com/1920x300/?building'
					alt='abstract'
				/>
				<img
					src='https://source.unsplash.com/1920x300/?keyboard'
					alt='abstract'
				/>
			</Flickity>
		</div>
	);
};

export default NCarousel;
