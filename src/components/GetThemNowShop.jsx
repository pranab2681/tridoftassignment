import React from 'react';
import DontMiss from './DontMiss';
const images = [
	{
		id: 1,
		imageSrc: 'https://source.unsplash.com/500x500/?water',
		alt: 'water',
	},
	{
		id: 2,
		imageSrc: 'https://source.unsplash.com/500x500/?handbag',
		alt: 'handbag',
	},
	{
		id: 3,
		imageSrc: 'https://source.unsplash.com/500x500/?laptop',
		alt: 'laptop',
	},
	{
		id: 4,
		imageSrc: 'https://source.unsplash.com/500x500/?food',
		alt: 'food',
	},
	{
		id: 5,
		imageSrc: 'https://source.unsplash.com/500x500/?pen',
		alt: 'pen',
	},
	{
		id: 6,
		imageSrc: 'https://source.unsplash.com/500x500/?cpu',
		alt: 'cpu',
	},
	{
		id: 7,
		imageSrc: 'https://source.unsplash.com/500x500/?shop',
		alt: 'shop',
	},
	{
		id: 8,
		imageSrc: 'https://source.unsplash.com/500x500/?map',
		alt: 'map',
	},
	{
		id: 9,
		imageSrc: 'https://source.unsplash.com/500x500/?camera',
		alt: 'camera',
	},
	{
		id: 10,
		imageSrc: 'https://source.unsplash.com/500x500/?apple',
		alt: 'apple',
	},
];
const singleImageDiv = images.map((data) => (
	<div className='singleImg' key={data.id}>
		<img src={data.imageSrc} alt={data.alt} />
	</div>
));
const GetThemNowShop = () => {
	return (
		<>
			<div className='getThemNowShop'>
				<div className='title'>
					Get them now <br /> <span>shop</span>
				</div>
				<div className='imageHolder'> {singleImageDiv}</div>
			</div>
			<DontMiss />
		</>
	);
};

export default GetThemNowShop;
