import React, {Component} from 'react'
import propTypes from 'prop-types'

import Square from './Square'
import Knight from './Knight'
import {moveKnight} from '../utils'

export default class Board extends Component {
  constructor (props) {
    super(props)
    this.renderSquare = this.renderSquare.bind(this)
  }
  renderSquare (i, j) {
    const x = i
    const y = j
    const black = (x + y) % 2 === 0

    const [knightX, knightY] = this.props.knightPosition
    const piece = (x === knightX && y === knightY)
      ? <Knight />
      : null

    return (
      <div
        key={i + (j + 1) * 10}
        style = {{width: '12.5%', height: '120px'}}
        onClick = {() => this.handleSquareClick(x, y)}
      >
        <Square black={black}>
          {piece}
        </Square>
      </div>
    )
  }

  handleSquareClick (toX, toY) {
    moveKnight(toX, toY)
  }

  render () {
    const squares = []
    for (let j = 0; j < 8; j++) {
      for (let i = 0; i < 8; i++) {
        squares.push(this.renderSquare(i, j))
      }
    }
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }} >
        {squares}
      </div>
    )
  }
}

Board.propTypes = {
  knightPosition: propTypes.arrayOf(
    propTypes.number.isRequired
  ).isRequired
}
