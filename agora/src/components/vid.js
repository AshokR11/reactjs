import React,{ Component } from 'react';
import img1 from '../images/vid.jpg';

class Vid extends Component{
	render(){
		let style1 = {
	      backgroundImage: `url(${img1})`
	    };
		return(
			<section>
				<div className="vid-sec" style={style1}>
					<div className="vid-link">
						<button>
							<div>
								<i className="fa fa-play" aria-hidden="true"></i>
							</div>
						</button>
						<h4>Watch Event Videos</h4>
					</div>
				</div>
			</section>
			);
	}
}

export default Vid;	
