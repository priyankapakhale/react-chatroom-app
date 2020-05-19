import React from 'react'

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