import React from 'react';

const stories = [
	{
		_id: 1,
		date: '23rd January 2021',
		author: 'John Doe',
		title: 'Auspicious Dates to start work in the new lunar year',
		summary:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a hic vel dicta! Sunt fugit incidunt facere quidem nostrum quo',
		imgSrc: 'https://source.unsplash.com/800x800/?articles',
	},
	{
		_id: 2,
		date: '25th January 2021',
		author: 'Thomas Willson',
		title: 'Useful tips to walking down the aisle with your dog',
		summary:
			'Omnis magni atque adipisci aut quod obcaecati, laboriosam veniam. Illo nesciunt minima officia debitis iste facilis esse',
		imgSrc: 'https://source.unsplash.com/800x800/?music,edm',
	},
	{
		_id: 3,
		date: '21st February 2021',
		author: 'styelweddings',
		title: '8 hipster wedding venues in singapore',
		summary:
			'Ut harum distinctio molestias incidunt adipisci praesentium nulla repudiandae pariatur ad eligendi porro',
		imgSrc: 'https://source.unsplash.com/800x800/?macbook',
	},
];

const singleStory = stories.map((data) => (
	<div className='story' key={data._id}>
		<div className='story__header'>
			<div className='story__header__date'>{data.date}</div>
			<span>|</span>
			<div className='story__header__author'>{data.author}</div>
		</div>
		<div className='story__title'>{data.title}</div>
		<div className='story__summary'>
			{data.summary} - by <em>{data.author}</em>
		</div>
		<div className='story__img'>
			<img src={data.imgSrc} alt={data.title} />
		</div>
	</div>
));
const Stories = () => {
	return (
		<>
			<div className='storyContainer'>
				<h1>latest stories</h1>
				{singleStory}
			</div>
		</>
	);
};

export default Stories;
