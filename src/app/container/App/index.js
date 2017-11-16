import React, {Component} from 'react';

import Home from '../../components/Home';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

import style from "./style.scss";

let scores = [
	{ name: "HTML5", level: 8},
	{ name: "CSS3", level: 5},
	{ name: "JavaScript", level: 10},
	{ name: "ReactJS", level: 8 },
	{ name: "AngularJS", level: 8 },
]
				
export default class App extends Component {
	render(){
		return(
			<div className={style.app}>
				<Home/>
				<main>
					<About/>
					<hr/>
					<Skills scores={scores}/>
					<hr/>
					<Contact/>
				</main>
				<Footer/>
			</div>
		)
	}
}