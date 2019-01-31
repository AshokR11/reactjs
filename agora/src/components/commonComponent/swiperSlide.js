import React, { Component } from 'react';

class SlideSwiper extends Component{
	render(){
		const { img,header,paragraph,spanHeader } = this.props;
		return(
			<div className="swiper-slide">
			<div>
				<img src={img} className="swiper-image" alt="login" />
				<div className="slide-info">
					<span>{spanHeader}</span>
					<div className="slide-value">
						<h4>
							{header}
						</h4>
						<p>{paragraph}</p>
					 </div>
				</div>
			</div>
			</div>
			);
	}
}

export default SlideSwiper;
