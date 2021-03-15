import React from 'react';
const images = [
	{
		id: 1,
		url: 'https://source.unsplash.com/200x200/?instagram',
		alt: 'image',
	},
	{
		id: 2,
		url: 'https://source.unsplash.com/200x200/?facebook',
		alt: 'facebook',
	},
	{
		id: 3,
		url: 'https://source.unsplash.com/200x200/?twitter',
		alt: 'twitter',
	},
	{
		id: 4,
		url: 'https://source.unsplash.com/200x200/?css',
		alt: 'css',
	},
	{
		id: 5,
		url: 'https://source.unsplash.com/200x200/?youtube',
		alt: 'youtube',
	},
	{
		id: 6,
		url: 'https://source.unsplash.com/200x200/?country',
		alt: 'country',
	},
	{
		id: 7,
		url: 'https://source.unsplash.com/200x200/?china',
		alt: 'china',
	},
	{
		id: 8,
		url: 'https://source.unsplash.com/200x200/?bars',
		alt: 'bars',
	},
	{
		id: 9,
		url: 'https://source.unsplash.com/200x200/?games',
		alt: 'games',
	},
	{
		id: 10,
		url: 'https://source.unsplash.com/200x200/?igi',
		alt: 'igi',
	},
];
const singleImage = images.map((data) => <img src={data.url} alt={data.alt} />);
const Instagram = () => {
	return (
		<>
			<div className='instagram'>
				<h1>instagram</h1>
				<div className='instagram__img'>{singleImage}</div>
			</div>
		</>
	);
};

export default Instagram;
