import React, {Component} from 'react';

import style from "./style.scss";

export default class Footer extends Component {
	constructor() {
		super();
	}

	render(){
		return(
			<footer id="footer">
				<table className={style.footerContacts}>
				<tbody>
					<tr><td>Mobile:</td><td className = {style.footerContact}>+38066-66-66-666</td></tr>
					<tr><td>Email:</td><td className = {style.footerContact}>mail@gmail.com</td></tr>
					<tr><td>Skype:</td><td className = {style.footerContact}>mySkypeAcc</td></tr>
				</tbody>
				</table>
				<div className={style.footerLogo}>&lt;&#47;&gt;</div>
			</footer>
		)
	}

}