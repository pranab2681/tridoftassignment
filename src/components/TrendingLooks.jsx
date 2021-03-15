import React from 'react';
import GetThemNowShop from './GetThemNowShop';

const images = [
	{
		id: 1,
		source: 'https://source.unsplash.com/500x500/?grass',
		altData: 'grass',
	},
	{
		id: 2,
		source: 'https://source.unsplash.com/500x500/?water',
		altData: 'water',
	},
	{
		id: 3,
		source: 'https://source.unsplash.com/500x500/?building',
		altData: 'building',
	},
	{
		id: 4,
		source: 'https://source.unsplash.com/500x500/?bike',
		altData: 'bike',
	},
];
const singelImage = images.map((data) => (
	<div className='singleImg' key={data.id}>
		<img src={data.source} alt={data.altData} />
	</div>
));
const TrendingLooks = () => {
	return (
		<div className='trending'>
			<div className='trendingLooks'>
				<h1>Trending looks</h1>
				<div className='trendingImgContainer'>{singelImage}</div>
				<div className='more-Looks'>
					<button className='moreLooks'>More Looks</button>
				</div>
			</div>
			<div className='randomImg'>
				<div className='secondimgdiv'>
					<img src='https://source.unsplash.com/700x300/?logo' alt='paper' />
					<GetThemNowShop />
				</div>
			</div>
		</div>
	);
};

export default TrendingLooks;
