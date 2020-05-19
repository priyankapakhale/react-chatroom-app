import React from 'react'
import Message from './Message'

class Chatroom extends React.Component {
	constructor() {
		super()
		this.state = {
			messageA : "",
			messageB : ""
		}
	}

	handleChange(event) {

	}

	render() {
		return (
			<div className="main">
				<div>
					<input type="text" name="messageA" value={this.state.messageA} placeholder="User A types here"/>
					<button>Send</button>
				</div>
				<div>
					<p>Chat Window</p>
					<Message />
				</div>
				<div>
					<input type="text" name="messageA" value={this.state.messageB} placeholder="User B types here" />
					<button>Send</button>
				</div>
			</div>
		)
	}
	
}

export default Chatroom