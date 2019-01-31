import React, { Component } from 'react';
import fb from '../images/fb.png';
import ins from '../images/ins.png';
import tw from '../images/tw.png';
import lin from '../images/lin.png';

class Footer extends Component{
	render(){
		return(
			<div className="footer">
				<div className="container">
					<div className="row topRow">
						<div className="col-10 mx-auto">
							<div className="row">
								<div className="col-4">
									<i className="fa fa-phone" aria-hidden="true"></i>
									<h5>talk to us</h5>
									<p>+44 (0) 7786522265</p>
								</div>
								<div className="col-4">
									<i className="fa fa-envelope" aria-hidden="true"></i>
									<h5>Email us</h5>
									<p>We would love to hear from you! </p>
								</div>
								<div className="col-4">
									<i className="fa fa-comments-o" aria-hidden="true"></i>
									<h5>we are social</h5>
									<ul>
										<li><img src={fb} alt="fb"/></li>
										<li><img src={tw} alt="tw"/></li>
										<li><img src={lin} alt="lin"/></li>
										<li><img src={ins} alt="ins"/></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row borderTop">
						<div className="col-10 mx-auto nxtRow">
							<ul>
								<li>privacy policy</li>
								<li>terms of use</li>
							</ul>
							<div className="para">
								<p>AGORA Group Limited is an appointed representative of
								 Thornbridge Investment Management LLP which is 
								authorised and regulated by the Financial Conduct Authority.</p>
								<span>© 2017 AGORA Group Limited. All rights reserved.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;