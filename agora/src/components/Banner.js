import React,{ Component } from 'react';
import img1 from '../images/Homepage-edited-1-1.jpg';

class Banner extends Component{
	render(){
		let style1 = {
	      backgroundImage: `url(${img1})`
	    };
		return(
			<section>
				<div className="Banner" style={style1}>
					<div className="banner-content container">
						<h1>Harnessing The Power Of The Collective</h1>
						<p>A Founders' Club that defines community</p>
					</div>	
				</div>
			</section>
		);
	}
}

export default Banner;