import React from 'react'


function Message(props) {
	const styles = {
		backgroundColor : "white",
		minWidth : "50px"
	}
	
	if(props.data.user === "userA") {
		styles.alignSelf = "flex-start"
	}
	else {
		styles.alignSelf = "flex-end"
		styles.backgroundColor = "orange"
	}

	return (
		<div className="message" style={styles}>
			<p>{props.data.message}</p>
		</div>
	)
}

export default Message