import React, { Component } from 'react';
import post1 from '../images/1.jpg';
import post2 from '../images/2.jpg';
import post3 from '../images/3.jpg';
import post4 from '../images/4.jpg';
import post5 from '../images/5.jpg';
import post6 from '../images/6.jpg';
import post7 from '../images/7.jpg';
import Swiper from 'react-id-swiper';
import SwiperSlide from './commonComponent/swiperSlide';
import { map } from 'lodash';

class ViewPort extends Component{

	constructor(props) {
      super(props);
      this.state = {
      	activeLabel:[{thumbnail:post1,
						 title:"Womens Hour",
						 description:"An invite only breakfast to kick off the programme that AGORA will be rolling across 2018/19, supported by Rathbones.",
						 type:"event",
						 time:"Tue, 4 September 08:30"
						},
						{thumbnail:post2,
						 title:"Meet the Gang Lunch",
						 description:"Curated lunches for the gang to get to know each other",
						 type:"event",
						 time:"Wed, 5 September 12:30"
						},
						{thumbnail:post3,
						 title:"The Power of Sharing, To Enhance Mental Wellbeing",
						 description:"How we can use the collective power of people and their experiences to enhance and support wellbeing and success in life.",
						 type:"event",
						 time:"Thu, 6 September 19:30"
						},
						{thumbnail:post4,
						 title:"Curious Lunch",
						 description:"An invite only lunch bringing together like-minded people, this is the route into AGORA membership.",
						 type:"event",
						 time:"Tue, 18 September 12:30"
						},
						{thumbnail:post5,
						 title:"Drinks with our new Parter",
						 description:"Join us for drinks at The Century Club for a chance to meet some of the Gang and the Centurions.",
						 type:"event",
						 time:"Tue, 18 September 18:00"
						},
						{thumbnail:post6,
						 title:"Oslo Innovation Week: Building Shit That Matters",
						 description:"Giving a platform and voice to businesses that are focused on delivering impact + change, profit + purpose.",
						 type:"event",
						 time:"Wed, 26 September 09:00"
						},
						{thumbnail:post7,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"event",
						 time:"Wed, 21 November 19:00"
						}]
      }
  	}
	render(){
		const { activeLabel } = this.state;
		const params = {
			slidesPerView: 3,
	      navigation: {
	        prevEl: '.swiper-button-prev',
	        nextEl: '.swiper-button-next'
	      },
	      renderPrevButton: () => <button className="swiper-button-prev buttonRight">
	      				<i className="fa fa-angle-left" aria-hidden="true"></i></button>,
	      renderNextButton: () => <button className="swiper-button-next buttonLeft">
	      				<i className="fa fa-angle-right" aria-hidden="true"></i></button>
	    };
		return(
			<section className="viewport">
				<div className="view-port">
					<div className="container text-center">
						<div className="row">
							<div className="col-6 d-block mx-auto">
								<h2>Viewpoint</h2>
								<p>Bringing you reactive, on point,
								 of the moment news,
								 discussions and interviews from
								  within the business community.</p>
							</div>
						</div>
						<Swiper {...params}>
							
							{!!activeLabel && map(activeLabel, (slide, i) => {
								return <SwiperSlide
										img={slide['thumbnail']}
										header={slide['title']}
										key={i}
										paragraph={slide['description']}
										spanHeader={slide['time']}/>
							})}
						</Swiper>
					</div>
				</div>
			</section>
		);
	}

}

export default ViewPort;