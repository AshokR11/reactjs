import React,{ Component } from 'react';

class CommonCollective extends Component{
	render(){
		const { thumbnail , Name} = this.props;
		return(
			<div className="swiper-slide swiperSlide">
				<div className="ownImg">
					<img src={thumbnail} alt="founder" />
					<div className="insideHeading">
						<h6>{Name}</h6>
					</div>
				</div>
			</div>
		)
	}
}

export default CommonCollective;