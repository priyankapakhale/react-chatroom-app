import React from 'react'

function Message(props) {
	let message 
	if(props.data.user === "userA") {
		message = "User A : "+props.data.message
	}
	else {
		message = props.data.message + " : User B"
	}

	return (
		<p>{message}</p>
	)
}

export default Message