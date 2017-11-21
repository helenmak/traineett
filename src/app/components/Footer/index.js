import React, {Component} from 'react';

import style from "./style.scss";

export default class Footer extends Component {
	constructor() {
		super();
	}

	render(){
		return(
			<footer id="footer">
				<address>
					<table>
						<tbody>
							<tr><td>Mobile:</td><td>+38066-66-66-666</td></tr>
							<tr><td>Email:</td><td>mail@gmail.com</td></tr>
							<tr><td>Skype:</td><td>mySkypeAcc</td></tr>
						</tbody>
					</table>
				</address>
				<div className={style.footerLogo}>&lt;&#47;&gt;</div>
			</footer>
		)
	}

}