import React from 'react'
import { TextField } from '@mui/material'

export const TextFields = () => {
	return (
		<div>
			<TextField
				className='miui'
				id='outlined-basic'
				label='Outlined'
				variant='outlined'
			/>
			{/* <TextField id='filled-basic' label='Filled' variant='filled' />
			<TextField id='standard-basic' label='Standard' variant='standard' /> */}
		</div>
	)
}
