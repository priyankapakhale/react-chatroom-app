import React from 'react'
import Message from './Message'

class Chatroom extends React.Component {
	constructor() {
		super()
		this.state = {
			messageA : "",
			messageB : "",
			user : "",
			chat : []
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleUserAClick = this.handleUserAClick.bind(this)
		this.handleUserBClick = this.handleUserBClick.bind(this)
	}

	handleChange(event) {
		const {name, value} = event.target
		this.setState({
			[name] : value
		})
	}

	handleUserAClick() {

	}

	handleUserBClick() {

	}

	render() {
		return (
			<div className="main">
				<div>
					<input 
						type="text" 
						name="messageA" 
						onChange={this.handleChange}
						value={this.state.messageA} 
						placeholder="User A types here"/>
					<button onClick={this.handleUserAClick}>Send</button>
				</div>
				<div>
					<p>Chat Window</p>
					<Message />
				</div>
				<div>
					<input 
						type="text" 
						name="messageB" 
						onChange={this.handleChange}
						value={this.state.messageB} 
						placeholder="User B types here" />
					<button onClick={this.handleUserBClick}>Send</button>
				</div>
			</div>
		)
	}
	
}

export default Chatroom