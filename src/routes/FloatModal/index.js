import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import styles from './index.less';

export default function FloatModal() {
	const [visible, setVisible] = useState(false);
	const handleOpen = () => {
		setVisible(!visible);
	}

	useEffect(() => {
		console.log(1)
	}, [visible])
	return (
		<div className={styles['content']}>
			<Button onClick={() => handleOpen()}>打开弹框</Button>
			<div className={`${visible ? 'float' : 'common'}`} />
			<div className='modal' style={{ display: `${visible ? 'block' : 'none'}` }}>
				<div className='close' onClick={() => setVisible(false)} />
				<span>我是弹框</span>
			</div>
		</div>
	)
}