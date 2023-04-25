import React, { useState } from 'react'
import './AppXY.css';

export default function AppXY() {
	const [pointer, setPointer] = useState([0, 0]);

	const handlePointer = (e) => {
		setPointer([e.clientX, e.clientY]);
	}

	return (
		<div className='container' onMouseMove={handlePointer}>
			<div className="pointer" style={{left : pointer[0], top: pointer[1]}} />
		</div>
	)
}