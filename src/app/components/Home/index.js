import React, {Component} from 'react';

import style from "./style.scss";

export default class Home extends Component {
	constructor() {
		super();
	}


	render(){
		
		return(
			<header id= "header">
				<div className = {style.upperMenu}>
					<span className = {style.logo}>&lt;&#47;&gt;</span>
					<nav>
						<ul>
							<li><a href="#header">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#skills">Skills</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>
				</div>
				<h1>NAME SURNAME</h1>
				<h2>FRONT-END DEVELOPER</h2>
			</header>
		)
	}

}
