import React, { useState } from 'react'
import './AppXY.css';

export default function AppXY() {
	const [pointerXY, setPointerXY] = useState([0, 0]);

	return (
		// <div className='container' onMouseMove={handlePointer}>
		<div className='container' onPointerMove={(e) => {
			setPointerXY([e.clientX, e.clientY]);
		}}>
			<div className="pointer" style={{transform: `translate(${pointerXY[0]}px, ${pointerXY[1]}px)`}} />
		</div>
	)
}