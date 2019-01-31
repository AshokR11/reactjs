import React ,{ Component } from 'react';
import login from '../images/about-1.jpg';

class SectionOne extends Component{
	render(){
		return(
			<section className="sectionOne">
				<div className="define-community">
					<div className="container">
						<div className="col-10 d-block mx-auto">
							<div className="row align-items-center">
								<div className="col-5">
									<img src={login} className="App-logo" alt="login" />
								</div>
								<div className="col-7">
									<div className="content-align">
										<p>AGORA defines community.
											A collective of entrepreneurial minds,
											from across the globe, and industry,
											united by shared values,
											powered by shared resource,
											driving long term business success,
											sustainability and stability.</p>
										<ul>
											<li>About us</li>
											<li>Purpose and vision</li>
											<li>Agora core values</li>
										</ul>
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

export default SectionOne;