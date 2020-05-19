import React from 'react'
import Message from './Message'

class Chatroom extends React.Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {
		return (
			<div className="main">
				<div>
					<input type="text" name="messageA" />
					<button>Send</button>
				</div>
				<div>
					<p>Chat Window</p>
					<Message />
				</div>
				<div>
					<input type="text" name="messageA" />
					<button>Send</button>
				</div>
			</div>
		)
	}
	
}

export default Chatroom