import React from 'react';

export default function Avatar({image, isNew}) {
	return (
		<div className='avatar'>
			<img className='photo' src={image} alt="avatar" />
			{isNew && <span className='tag new'>New</span>}
		</div>
	)
}