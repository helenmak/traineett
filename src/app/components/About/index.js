import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import avatar from "./images/avatar.png";
import style from "./style.scss"

export default class About extends Component {
	constructor() {
		super();
	}

	render(){
		return(
			<section id="about">
				<div className={style.aboutSectionWrapper}>
					<h2>ABOUT</h2>
					<div className={style.wrapper}>
						<div className={style.aboutGoals}>
							<h3>Goals</h3>
							<p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.</p>
						</div>
						<div className={style.aboutAvatar}>
							<img src={avatar}/>
						</div>
						<div className={style.aboutDreams}>
							<h3>Dreams</h3>
							<p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.</p>
						</div>
					</div>
				</div>
			</section>
		)
	}

}