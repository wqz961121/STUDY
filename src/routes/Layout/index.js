import React, { useState } from 'react';
import styles from './index.less';

export default function Layout() {
  const [flag, setFlag] = useState(true)
  return (
    <React.Fragment>
      <div className={styles['gb-content']}>
        <div className='header'>header</div>
        {flag ?
          <>
            <div className='container'>
              <div className='middle'><button onClick={() => setFlag(!flag)}>切换布局</button></div>
              <div className='left'>left(圣杯)</div>
              <div className='right'>right</div>
            </div>
          </> :
          <div className='container2'>
            <div className='content2'>
              <div className='middle2'><button onClick={() => setFlag(!flag)}>切换布局</button></div>
            </div>
            <div className='left2'>left(双飞翼)</div>
            <div className='right2'>right</div>
          </div>
        }
        <div className='footer'>footer</div>
      </div>
    </React.Fragment>
  )
}