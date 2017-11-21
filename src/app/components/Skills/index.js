import React, {Component} from 'react';

import style from "./style.scss";

export default class Skills extends Component {
	constructor() {
		super();
	}

	fillSkills(quant){
		let skills = [];
		this.props.scores.forEach((score, num)=>{
			let rounds=[];
			for(let i = 1; i <= quant; i++){
				if(i<=score.level) {
					rounds.push(<div className = {style.filledRound} key = {'filled_round'+i}></div>)
				} else {
					rounds.push(<div className = {style.emptyRound} key = {'empty_round'+i}></div>)
				}
			}
			
		skills.push(<div className = {style.skill} key = {score.name}> 
				<span className = {style.skillName} key = {score.name + "_name"}> {score.name} </span>
				<div className = {style.skillAssessment} key = {score.name + "_level"}> {rounds} </div>
				</div>)
			
		});

		return skills;
	}

	render(){
		return(
			<section id="skills">
				<div className={style.skillsSectionWrapper}>
					<h2>SKILLS</h2>
					<div className = {style.skillsWrapper}>
						{this.fillSkills(10)}
					</div>
				</div>
			</section>
		)
	}

}

