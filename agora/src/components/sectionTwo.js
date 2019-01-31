import React,{ Component } from 'react';
import event1 from '../images/Post-Instagram-Template-6.png';
import event2 from '../images/Post-Instagram-Template-1.png';
import event3 from '../images/Post-Instagram-Template-1-1.png';
import event4 from '../images/Post-Instagram-Template-2.png';
import event5 from '../images/Post-Instagram-Template.png';
import event6 from '../images/img-6.png';
import event7 from '../images/img-7.jpg';
import partner1 from '../images/partner1.jpg';
import partner2 from '../images/partner2.jpeg';
import partner3 from '../images/partner3.jpg';
import partner4 from '../images/partner4.png';
import partner5 from '../images/partner5.png';
import partner6 from '../images/partner6.png';
import speakers1 from '../images/speakers1.jpg';
import speakers2 from '../images/speakers2.png';
import speakers3 from '../images/speakers3.jpg';
import Swiper from 'react-id-swiper';
import SwiperSlide from './commonComponent/swiperSlide';
import { map } from 'lodash';

class SectionTwo extends Component{
	constructor(props) {
      super(props);
      this.state = {
      	activeLabel:'event',
      	sliderValues:[{thumbnail:event1,
						 title:"Womens Hour",
						 description:"An invite only breakfast to kick off the programme that AGORA will be rolling across 2018/19, supported by Rathbones.",
						 type:"event",
						 time:"Tue, 4 September 08:30"
						},
						{thumbnail:event2,
						 title:"Meet the Gang Lunch",
						 description:"Curated lunches for the gang to get to know each other",
						 type:"event",
						 time:"Wed, 5 September 12:30"
						},
						{thumbnail:event3,
						 title:"The Power of Sharing, To Enhance Mental Wellbeing",
						 description:"How we can use the collective power of people and their experiences to enhance and support wellbeing and success in life.",
						 type:"event",
						 time:"Thu, 6 September 19:30"
						},
						{thumbnail:event4,
						 title:"Curious Lunch",
						 description:"An invite only lunch bringing together like-minded people, this is the route into AGORA membership.",
						 type:"event",
						 time:"Tue, 18 September 12:30"
						},
						{thumbnail:event5,
						 title:"Drinks with our new Parter",
						 description:"Join us for drinks at The Century Club for a chance to meet some of the Gang and the Centurions.",
						 type:"event",
						 time:"Tue, 18 September 18:00"
						},
						{thumbnail:event6,
						 title:"Oslo Innovation Week: Building Shit That Matters",
						 description:"Giving a platform and voice to businesses that are focused on delivering impact + change, profit + purpose.",
						 type:"event",
						 time:"Wed, 26 September 09:00"
						},
						{thumbnail:event7,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"event",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:partner1,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"partner",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:partner2,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"partner",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:partner3,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"partner",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:partner4,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"partner",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:partner5,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"partner",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:partner6,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"partner",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:speakers1,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"speaker",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:speakers2,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"speaker",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:speakers3,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"speaker",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:speakers3,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"speaker",
						 time:"Wed, 21 November 19:00"
						},
						{thumbnail:speakers3,
						 title:"Start Ups & Vino: Members Meet Investors",
						 description:"In memory of Start Ups & Vino (the pre-cursor to Agora)... I am going to be hosting an annual evening to celebrate the successes of the gang, and also to give you members an opportunity to meet with investors (both VCs and angels).",
						 type:"speaker",
						 time:"Wed, 21 November 19:00"
						}]
      }
  }

	handleClick=(label)=>{
		this.setState({
			activeLabel: label
		})
	}
	
	render(){
		const { events, sliderValues, activeLabel} = this.state;
		const params = {
			slidesPerView: 'auto',
	    }
		return(
			<section className="SectionTwo">
				<div className="action-in">	
					<div className="container text-center">
						<div className="row">
							<div className="col-6 d-block mx-auto">
								<h2>AGORA IN ACTION</h2>
								<p>Knowledge is power, content is king and time is money:
									 the AGORA event series has been created to provide access
									  to and engagement with a like-minded network,
									 and bite-sized learning of high value.
									 They are diverse in their format, rich in 
									 content and guaranteed fun.
								</p> 
							</div>
						</div>
						<div>
							<ul>
								<li onClick={this.handleClick.bind(this, 'event')}>Our events</li>
								<li onClick={this.handleClick.bind(this, 'partner')} className="partnere">Our partners</li>
								<li onClick={this.handleClick.bind(this, 'speaker')} className="speakers">Our speakers</li>
							</ul>
							<div className="activeContent">
								<div className="active-swiper">
									<div className="swiper-wrapper">
									{ this.state.activeLabel === 'event' ? (<Swiper {...params}>
										{!!sliderValues && map(sliderValues, (slide, i) => {
											if(slide['type']===activeLabel){
											return <SwiperSlide
													img={slide['thumbnail']}
													header={slide['title']}
													key={i}
													paragraph={slide['description']}
													spanHeader={slide['time']}/>
											}	
										})}
									</Swiper>) : ''}
									{ this.state.activeLabel === 'partner' ? (<Swiper {...params}>
										{!!sliderValues && map(sliderValues, (slide, i) => {
											if(slide['type']===activeLabel){
											return <SwiperSlide
													img={slide['thumbnail']}
													header={slide['title']}
													key={i}
													paragraph={slide['description']}/>
											}	
										})}
									</Swiper>) : ''}
									{ this.state.activeLabel === 'speaker' ? (<Swiper {...params}>
										{!!sliderValues && map(sliderValues, (slide, i) => {
											if(slide['type']===activeLabel){
											return <SwiperSlide
													img={slide['thumbnail']}
													header={slide['title']}
													key={i}
													paragraph={slide['description']}/>
											}	
										})}
									</Swiper>) : ''}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default SectionTwo;