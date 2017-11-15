import React, {Component} from 'react';

import style from "./style.scss";

export default class Contact extends Component {
	constructor() {
		super();
		this.state = { name: "",
						    email: "",
						    message: "" 
						 };
							
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
	 	this.setState({[event.target.name]: event.target.value});
		console.log(`You have entered ${event.target.value} into "${event.target.name[0].toUpperCase()}${event.target.name.substring(1) }" field`)
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log("You submitted the form");
	}


	render(){
		return(
			<section id="contact">
				<div className={style.contactsSectionWrapper}>
					<h2>CONTACT</h2>
					<div className = {style.contactsWrapper}>
						<div className = {style.contacts}>
							<div>Phone number: <span>+38066-66-66-666</span></div>
							<div>Email: <span>mail@gmail.com</span></div>
							<div>Skype: <span>mySkypeAcc</span></div>
						</div>
						<form className="contactForm" onSubmit={this.handleSubmit}>
							<input type="text" name="name" id="name" placeholder = "Name" 
								value={this.state.name} onChange= {this.handleChange} />
							<input type="email" name="email" id="email" placeholder = "Email"
								value={this.state.email} onChange= {this.handleChange} />
							<textarea name="message" id="message" placeholder = "Send a message"
								value={this.state.message} onChange= {this.handleChange} />
							<button name="send">Send</button>

						</form>
					</div>
				</div>
			</section>
		)
	}

}