import React, { PropTypes } from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Ducker'}</p>
      <p className={slogan}>{'The real time, cloud base, mudular sobial platform to do lots of awsome things, wow how long is this? realy still nothing'}</p>
    </div>
  )
}
