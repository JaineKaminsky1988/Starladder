import React from 'react';
import IconsSVG from './sprite.svg';

function Icons({id, width, height}) {
	
	return (
		<svg
			className={ id }
			width={ width }
			height={ height }
			viewBox={ `0 0 ${ width } ${ height }` }
		>
			<use xlinkHref={ `${ IconsSVG }#${ id }` } />
		</svg>
	)
}

export default Icons;