import React from 'react'
import {render} from 'react-dom'

import Board from './components/Board'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Board knightPosition={[0, 0]} />,
    document.getElementById('app')
  )
})
