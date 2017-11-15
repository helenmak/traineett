import React, {Component} from 'react';

import style from "./style.scss";

export default class Skills extends Component {
	constructor() {
		super();
	}

	fillWithRounds(quant){
		let divs = [];
		this.props.scores.forEach((score, num)=>{
			let rounds=[];
			for(let i = 1; i <= quant; i++){
				if(i<=this.props.scores[num].level) {
					rounds.push(<span className = {style.filledRound} key = {'filled_round'+i}></span>)
				} else {
					rounds.push(<span className = {style.emptyRound} key = {'empty_round'+i}></span>)
				}
			}
			
		divs.push(<div key = {this.props.scores[num].name} >{rounds}</div>)
			
		})
		return divs;
		
	}

	render(){
		return(
			<section id="skills">
				<div className={style.skillsSectionWrapper}>
					<h2>SKILLS</h2>
					<div className = {style.wrapper}>
						<div className = {style.skillsName}>
							<span>HTML5</span>
							<span>CSS3</span>
							<span>JavaScript</span>
							<span>ReactJS</span>
							<span>AngularJS</span>
						</div>
						<div className = {style.skillsScores}>
							{this.fillWithRounds(10)}
						</div>
					</div>
				</div>
			</section>
		)
	}

}