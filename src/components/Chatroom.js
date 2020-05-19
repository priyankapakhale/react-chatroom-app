import React from 'react'

function Chatroom() {
	return (
		<div className="main">
			<div>
				<input type="text" name="messageA" />
				<button>Send</button>
			</div>
			<div>
				<p>Chat window</p>
			</div>
			<div>
				<input type="text" name="messageA" />
				<button>Send</button>
			</div>
		</div>
	)
}

export default Chatroom