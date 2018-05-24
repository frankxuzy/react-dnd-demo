import React from 'react'
import {render} from 'react-dom'
import {observe} from './utils'

import Board from './components/Board'

document.addEventListener('DOMContentLoaded', () => {
  observe(knightPosition => render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('app')
  ))
})
