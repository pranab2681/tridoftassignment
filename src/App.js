import Header from './components/Header';
import NCarousel from './components/NCarousel';
import '../node_modules/flickity/css/flickity.css';
import './components/assets/style.min.css';
import Episode from './components/Episode';
import RandomText from './components/RandomText';
import TrendingLooks from './components/TrendingLooks';
import Stories from './components/Stories';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
function App() {
	return (
		<div>
			<Header />
			<NCarousel />
			<Episode />
			<RandomText />
			<TrendingLooks />
			<Stories />
			<Instagram />
			<Footer />
		</div>
	);
}

export default App;
