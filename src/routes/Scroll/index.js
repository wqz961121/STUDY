import React, { useState, useRef, useEffect } from 'react';

export default function ScrollCom() {
	const [height, setHeight] = useState(undefined);
	const btn = useRef();

	useEffect(() => {
		window.onload = () => console.log(btn.current.scrollTop)
	}, [])

	return (<>
		<div>
			<button ref={btn}>按钮</button>
		</div>
	</>);
}