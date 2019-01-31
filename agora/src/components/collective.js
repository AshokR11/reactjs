import React,{ Component } from 'react';
import bground1 from '../images/colle1.jpg';
import bground2 from '../images/coll2.png';
import Artboard from '../images/Artboard-6.jpg';
import Ben from '../images/Ben.png';
import Cal from '../images/cal.jpg';
import Cha from '../images/cha.jpg';
import Chris from '../images/chris.jpg';
import Dan from '../images/dan.png';
import Drew from '../images/drew.jpg';
import Emily from '../images/emily.jpg';
import Harriot from '../images/harriot.jpg';
import Kiko from '../images/kiko.jpg';
import Luci from '../images/luci.jpg';
import Nancy from '../images/nancy.jpg';
import Oli from '../images/oli.jpg';
import Sam from '../images/sam.jpg';
import Serena from '../images/serena.jpg';
import Simon from '../images/simon.jpg';
import Swiper from 'react-id-swiper';
import CommonCollective from './commonComponent/commonCollective';
import { map } from 'lodash';


class Collective extends Component{

	constructor(props) {
      super(props);
      this.state = {
      	activeCollective:'alpha',
      	backGround:bground1,
      	sliderCollective:[
							{"thumbnail":Artboard,
							"Name":"Tessa Packard"},

							{"thumbnail":Ben,
							"Name":"Ben Keene"},

							{"thumbnail":Cal,
							"Name":"Cal Wansborough"},

							{"thumbnail":Cha,
							"Name":"Charlotte Pearce"},

							{"thumbnail":Chris,
							"Name":"Chris Donnelly"},

							{"thumbnail":Dan,
							"Name":"Dan Murray"},

							{"thumbnail":Drew,
							"Name":"Drew Michael"},

							{"thumbnail":Emily,
							"Name":"Emily Forbes"},

							{"thumbnail":Harriot,
							"Name":"Harriot Pleydell Bouverie"},

							{"thumbnail":Kiko,
							"Name":"Kiko Matthews"},

							{"thumbnail":Luci,
							"Name":"Luciana Carvalho Se"},

							{"thumbnail":Nancy,
							"Name":"Nancy Fechnay"},

							{"thumbnail":Oli,
							"Name":"Oli Barrett"},

							{"thumbnail":Sam,
							"Name":"Sam Miller"},

							{"thumbnail":Serena,
							"Name":"Serena Oppenheim"},

							{"thumbnail":Simon,
							"Name":"Simon Rayner-Langmead"},
						 ]
      }
    }  
	handleClick(val){
		if(val==='x'){
			this.setState({
				activeCollective: val,
				backGround:bground2
			})
		}
		if(val==='alpha'){
			this.setState({
				activeCollective: val,
				backGround:bground1
			})
		}
	}

	render(){
		const { sliderCollective } = this.state;
		const params = {
			slidesPerView: 'auto',
			loop: true,
	    }
		let style1 = {
	      backgroundImage: `url(${this.state.backGround})`
	    };
		return(
			<section className="collective" style={style1}>
				<div className="container">
					<div className="col-10 d-block mx-auto">
						<h3>Choose your Collective</h3>
						<ul>
							<li onClick={this.handleClick.bind(this, 'alpha')}>Agora Alpha</li>
							<li onClick={this.handleClick.bind(this, 'x')}>Agora X</li>
						</ul>
						<div className="inside-coll">
							<div className="row">
							{this.state.activeCollective==='alpha' ?
								(<React.Fragment>
									<div className="content-coll col-5">
									<span><i className="fa fa-angle-down"></i></span>
									<h4>AGORA puts its members at the helm.
									 To become part of AGORA collective,
									 you need a referral from an existing member.</h4>
									 <p>ALPHA is the pool of early stage business Founders.
									  It exists to support Founders,
									  to propel them towards long term stability and success.</p>
								</div>
								<div className="col-4">
									<div className="fullWidth">
										<Swiper {...params}>
											{!!sliderCollective && map(sliderCollective,(val,i)=>{
												return <CommonCollective
													thumbnail={val["thumbnail"]}
													Name={val["Name"]}
													key={i}/>
											})}
										</Swiper>	
									</div>
								</div>
								</React.Fragment>) : ''}
							{this.state.activeCollective==='x' ?
								(<React.Fragment>
									<div className="content-coll col-5 right">
									<span><i className="fa fa-angle-down"></i></span>
									<h4>AGORA puts its members at the helm.
									 To become part of AGORA collective,
									 you need a referral from an existing member.</h4>
									 <p>AGORA X is the pool of later stage business Founders.
									  It is an exclusive group that have and are building world class companies,
									  and provides them with a global trusted network of contacts, advice and funds.</p>
								</div>
								<div className="col-4">
									<div className="fullWidth">
										<Swiper {...params}>
											{!!sliderCollective && map(sliderCollective,(val,i)=>{
												return <CommonCollective
													thumbnail={val["thumbnail"]}
													Name={val["Name"]}
													key={i}/>
											})}
										</Swiper>	
									</div>
								</div>
								</React.Fragment>) : ''}
							</div>
						</div>
					</div>
				</div>
			</section>
			);
	}
}

export default Collective;