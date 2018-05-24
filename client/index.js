import React from 'react'
import {render} from 'react-dom'
import {observe} from './utils'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  observe(knightPosition => render(
    <App knightPosition={knightPosition} />,
    document.getElementById('app')
  ))
})
