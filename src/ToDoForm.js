import { useState } from 'react'

function ToDoForm({ addTask }) {
	const [userInput, setUserInput] = useState('')

	const handleChange = e => {
		setUserInput(e.currentTarget.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		addTask(userInput)
		setUserInput('')
	}
	const handleKeyPress = e => {
		if (e.key === ' ' || e.key === 'Enter') {
			handleSubmit(e)
			console.log(e)
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				value={userInput}
				type='text'
				onChange={handleChange}
				onKeyDown={handleKeyPress}
			/>
			<button>Save</button>
		</form>
	)
}

export default ToDoForm