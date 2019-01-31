import React,{ Component } from 'react';
import logo from '../images/logo-e3501f6f.png';
import login from '../images/login.png';
import login1 from '../images/loginB.png';
import facebook from '../images/facebook.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      scroll: '',
	      loginImg: login,
	      signinHeader:false,
	      popupHeader:false,
	      menuToggle:''
	      
	    };
	  }

	componentWillMount() {
		window.addEventListener('scroll', this.scrollFunction);
	}

	scrollFunction=()=>{
		if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
			this.setState({
				scroll:'scroll',
				loginImg:login1
			});

		} else {
			this.setState({
				scroll:'',
				loginImg:login
			});
		}
	}
	handleclick=()=>{
		const {signinHeader}=this.state;
		this.setState({
			signinHeader:!signinHeader
		});
	}
	handleClickPopup=()=>{
		const { menuToggle}=this.state;
		if(menuToggle){
			this.setState({
				popupHeader:false,
				menuToggle:''
			});
		}
		else{
			this.setState({
				popupHeader:true,
				menuToggle:'menuToggle'
			});
		}
	}

	render(){
		const { scroll,loginImg, signinHeader,popupHeader,menuToggle } = this.state;
		return(
			<div className={["header",scroll].join(' ')}>
				<div className="container">
					<img src={logo} className="App-logo" alt="logo" />
					<div className="signin" onClick={this.handleclick}>
						<img src={loginImg} alt="login"/>
						{signinHeader ? <ul><li>sign in</li></ul>:''}
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</div>
					<div className="cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
					<div>
						<div className={["menu-toggle",menuToggle].join(' ')}  onClick={this.handleClickPopup}>
							<div className="hamburger1"></div>
							<div className="hamburger2"></div>
							<div className="hamburger3"></div>
						</div>
						{popupHeader ? (<div className="header-popup">
							<div className="popup-content">
								<ul className="heading">
									<li>About Us</li>
									<li>Ambassodors</li>
									<li>Events</li>
									<li>Speakers</li>
									<li>Membership</li>
									<li>Blog</li>
									<li>Partners</li>
									<li>Press</li>
								</ul>
								<ul className="social-link">
									<li><img src={facebook}  alt="facebook"/></li>
									<li><img src={twitter}  alt="twitter"/></li>
									<li><img src={linkedin}  alt="linkedin"/></li>
									<li><img src={insta}  alt="insta"/></li>
								</ul>
							</div>
							</div>) : ''}
					</div>
				</div>	
			</div>
			);
	}
}

export default Header;