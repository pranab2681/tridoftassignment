import React from 'react';
import SocialAcc from './SocialAcc';

const specialList = [
	{
		id: 1,
		imgSource: 'https://source.unsplash.com/200x100/?temple',
		altTag: 'temple',
		caption: "Style: Wedding's present 'A garden city...'",
		url: '#',
	},
	{
		id: 2,
		imgSource: 'https://source.unsplash.com/200x100/?fruit',
		altTag: 'fruit',
		caption: 'How to: style longer bangs',
		url: '#',
	},
	{
		id: 3,
		imgSource: 'https://source.unsplash.com/200x150/?village',
		altTag: 'village',
		caption: 'In good company launches first',
		url: '#',
	},
	{
		id: 4,
		imgSource: 'https://source.unsplash.com/200x150/?smoke',
		altTag: 'smoke',
		caption: 'win beauty hampers by KLARITY worth $1.5....',
		url: '#',
	},
	{
		id: 5,
		imgSource: 'https://source.unsplash.com/200x100/?jwellery',
		altTag: 'jwellery',
		caption: 'today tang: a face to watch in 2017',
		url: '#',
	},
];
const offerCard = specialList.map((data) => (
	<div key={data.id} className='main_dontMiss'>
		<div className='dontMiss__imgContainer'>
			<img src={data.imgSource} alt={data.altTag} />
		</div>
		<a href={data.url} className='dontMiss__aTag'>
			<div className='dontMiss__aTag__title'>{data.caption} &rarr;</div>
		</a>
	</div>
));
const DontMiss = () => {
	return (
		<>
			<div className='dontMiss'>
				<h1>don't miss</h1>
				{offerCard}
			</div>
			<SocialAcc />
		</>
	);
};

export default DontMiss;
